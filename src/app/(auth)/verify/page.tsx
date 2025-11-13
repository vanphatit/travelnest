'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { authService } from '@/services/authService';
import { Button } from '@/components/ui/Button';

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (!token) {
      setStatus('error');
      setMessage('Mã xác thực không tồn tại hoặc đã hết hạn');
      return;
    }

    const verifyEmail = async () => {
      try {
        await authService.verifyEmail(token);
        setStatus('success');
        setMessage('Email đã được xác thực thành công! Bạn có thể đăng nhập ngay.');
      } catch (error: any) {
        setStatus('error');
        setMessage(error.response?.data?.message || 'Xác thực thất bại. Vui lòng thử lại.');
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="px-8 py-10">
            <div className="text-center">
              {status === 'loading' && (
                <div className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-600 border-t-transparent"></div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Đang xác thực email...
                    </h2>
                    <p className="text-gray-600">
                      Vui lòng chờ trong khi chúng tôi xác thực địa chỉ email của bạn.
                    </p>
                  </div>
                </div>
              )}

              {status === 'success' && (
                <div className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      🎉 Xác thực thành công!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {message}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Button
                      onClick={() => router.push('/login')}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                    >
                      Đăng nhập ngay
                    </Button>
                    <Button
                      onClick={() => router.push('/')}
                      variant="secondary"
                      className="w-full border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    >
                      Về trang chủ
                    </Button>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      ❌ Xác thực thất bại
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {message}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Button
                      onClick={() => router.push('/register')}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                    >
                      Đăng ký lại
                    </Button>
                    <Button
                      onClick={() => router.push('/login')}
                      variant="secondary"
                      className="w-full border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    >
                      Đăng nhập
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Decorative footer */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-4">
            <p className="text-center text-sm text-gray-500">
              🏖️ <span className="font-semibold text-blue-600">TravelNest</span> - Khám phá thế giới cùng chúng tôi
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}