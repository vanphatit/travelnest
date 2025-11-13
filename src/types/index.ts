// Common API response type
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// User types
export interface User {
  id: string;
  email: string;
  username: string;
  fullname?: string;
  avatar?: string;
  role: 'traveler' | 'host' | 'admin' | 'user';
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

// Auth types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  username?: string;
  fullname?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

// Travel types (có thể mở rộng sau)
export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  priceRange: string;
}

// Promo types
export interface Promo {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface Booking {
  id: string;
  userId: string;
  destinationId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}

// Common UI types
export interface SelectOption {
  value: string;
  label: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
