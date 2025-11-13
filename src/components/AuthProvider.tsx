'use client';

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { authService } from '@/services/authService';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { login } = useAuth();

    useEffect(() => {
        // Check if user is already authenticated on app start
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    // Validate token by fetching user profile
                    const user = await authService.getProfile();
                    // If successful, the user is authenticated
                    console.log('User authenticated on app start:', user);
                }
            } catch (error) {
                // Token is invalid, remove it
                localStorage.removeItem('token');
                console.log('Token validation failed:', error);
            }
        };

        checkAuth();
    }, []);

    return <>{children}</>;
};