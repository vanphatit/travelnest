import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes
const protectedRoutes = ['/dashboard', '/profile', '/bookings'];
const authRoutes = ['/login', '/register']; // Routes to redirect away from when authenticated
const publicAuthRoutes = ['/auth/success', '/auth/error', '/success', '/error', '/verified']; // OAuth callback routes

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get token from cookies
  const token = request.cookies.get('token')?.value;

  // Debug logging
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    console.log('🔍 Middleware Debug:', {
      pathname,
      hasToken: !!token,
      tokenValue: token?.substring(0, 20) + '...' // Show first 20 chars
    });
  }

  // Check if user is trying to access protected routes without token
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Redirect authenticated users away from auth pages (but not callback pages)
  if (authRoutes.some(route => pathname.startsWith(route))) {
    if (token) {
      console.log('🚫 Redirecting authenticated user from', pathname, 'to home because token exists');
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Allow access to public auth routes (callbacks) regardless of auth state
  if (publicAuthRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};