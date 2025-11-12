import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from "../store/slices/authSlice";
import { authService } from "../services/authService";
import { LoginRequest, RegisterRequest } from "../types";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, token, isLoading, isAuthenticated, error } = useAppSelector(
    (state) => state.auth
  );

  const login = useCallback(
    async (credentials: LoginRequest) => {
      try {
        dispatch(loginStart());
        const authData = await authService.login(credentials);

        // Save token to localStorage
        localStorage.setItem("token", authData.token);

        dispatch(
          loginSuccess({
            user: authData.user,
            token: authData.token,
          })
        );

        return authData;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Login failed";
        dispatch(loginFailure(errorMessage));
        throw error;
      }
    },
    [dispatch]
  );

  const register = useCallback(
    async (userData: RegisterRequest) => {
      try {
        dispatch(loginStart());
        const authData = await authService.register(userData);

        // Save token to localStorage
        localStorage.setItem("token", authData.token);

        dispatch(
          loginSuccess({
            user: authData.user,
            token: authData.token,
          })
        );

        return authData;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Registration failed";
        dispatch(loginFailure(errorMessage));
        throw error;
      }
    },
    [dispatch]
  );

  const logoutUser = useCallback(async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch {
      // Even if logout fails on server, clear local state
      dispatch(logout());
    }
  }, [dispatch]);

  return {
    user,
    token,
    isLoading,
    isAuthenticated,
    error,
    login,
    register,
    logout: logoutUser,
  };
};
