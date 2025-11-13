import { apiService } from "./api";
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  ApiResponse,
} from "../types";

class AuthService {
  // Login
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await apiService.post<ApiResponse<AuthResponse>>(
      "/auth/login",
      credentials
    );
    return response.data;
  }

  // Register
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await apiService.post<ApiResponse<AuthResponse>>(
      "/auth/register",
      userData
    );
    return response.data;
  }

  // Logout
  async logout(): Promise<void> {
    await apiService.post("/auth/logout");
    localStorage.removeItem("token");
  }

  // Get current user profile
  async getProfile(): Promise<AuthResponse["user"]> {
    const response = await apiService.get<ApiResponse<AuthResponse["user"]>>(
      "/auth/profile"
    );
    return response.data;
  }

  // Refresh token
  async refreshToken(): Promise<string> {
    const response = await apiService.post<ApiResponse<{ token: string }>>(
      "/auth/refresh"
    );
    return response.data.token;
  }

  // Forgot password
  async forgotPassword(email: string): Promise<void> {
    await apiService.post("/auth/forgot-password", { email });
  }

  // Reset password
  async resetPassword(token: string, password: string): Promise<void> {
    await apiService.post("/auth/reset-password", { token, password });
  }

  // Verify email
  async verifyEmail(token: string): Promise<void> {
    await apiService.post(`/auth/verify?token=${token}`);
  }
}

export const authService = new AuthService();
export default authService;

// Export registerUser for compatibility with register page
export const registerUser = authService.register.bind(authService);
