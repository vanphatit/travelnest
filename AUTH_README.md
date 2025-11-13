# TravelNest Authentication System

Hệ thống xác thực cho TravelNest với các tính năng:
- Đăng ký tài khoản
- Xác thực email
- Đăng nhập với email/password
- Đăng nhập với Google OAuth
- JWT token authentication
- Bảo vệ routes

## 🚀 Cấu trúc Files

### Auth Pages
- `/auth/login` - Trang đăng nhập
- `/auth/register` - Trang đăng ký
- `/auth/verified` - Trang xác nhận email thành công
- `/auth/success` - Trang đăng nhập thành công (OAuth)
- `/auth/error` - Trang lỗi đăng nhập

### Services
- `src/services/authService.ts` - Auth API service
- `src/services/api.ts` - Axios configuration with interceptors

### Hooks
- `src/hooks/useAuth.ts` - Authentication hook

### Components
- `src/components/AuthProvider.tsx` - Auth state provider
- `src/components/layout/Navbar.tsx` - Navigation with auth state

### Middleware
- `src/middleware.ts` - Route protection and auth redirects

## 🔧 Backend Configuration

Backend chạy tại `localhost:9091` với các endpoints:

```typescript
POST /auth/register     // Đăng ký
GET  /auth/verify       // Xác thực email
POST /auth/login        // Đăng nhập
GET  /auth/google       // OAuth Google
GET  /auth/google/callback // OAuth callback
```

## ⚙️ Environment Variables

```bash
NEXT_PUBLIC_API_URL=http://localhost:9091
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
```

## 🔐 Authentication Flow

### 1. Đăng ký
1. User điền form đăng ký
2. Frontend gửi POST request đến `/auth/register`
3. Backend tạo user và gửi email xác thực
4. User click link trong email
5. Redirect đến `/auth/verified`

### 2. Đăng nhập
1. User điền email/password
2. Frontend gửi POST request đến `/auth/login`
3. Backend validate và trả về JWT token trong cookie
4. Frontend redirect đến trang chủ

### 3. Google OAuth
1. User click "Đăng nhập với Google"
2. Redirect đến `localhost:9091/auth/google`
3. Google OAuth flow
4. Callback đến `localhost:9091/auth/google/callback`
5. Backend set JWT cookie và redirect về frontend
6. Frontend redirect đến `/auth/success`

## 🛡️ Protected Routes

Middleware tự động bảo vệ các routes:
- `/dashboard/*`
- `/profile/*`
- `/bookings/*`

Nếu chưa đăng nhập, redirect về `/auth/login`

## 📱 Features

### Navbar
- Hiển thị user menu khi đã đăng nhập
- Button đăng nhập/đăng ký khi chưa đăng nhập
- Responsive mobile menu

### Error Handling
- Network errors
- Invalid credentials
- Email not verified
- OAuth failures

### Token Management
- Automatic token refresh
- Cookie-based authentication
- Secure HttpOnly cookies

## 🧪 Testing

Để test hệ thống:

1. Start backend tại `localhost:9091`
2. Start frontend tại `localhost:3000`
3. Thử các scenarios:
   - Đăng ký tài khoản mới
   - Xác thực email
   - Đăng nhập với email/password
   - Đăng nhập với Google
   - Access protected routes

## 🔄 State Management

Redux store quản lý auth state:
- `user` - Thông tin user
- `token` - JWT token
- `isAuthenticated` - Trạng thái đăng nhập
- `isLoading` - Trạng thái loading
- `error` - Error messages

## 🎨 UI/UX

- Consistent loading states
- Error messages tiếng Việt
- Success notifications
- Auto redirects
- Mobile responsive
- Clean gradient design