'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');
  const [countdown, setCountdown] = useState(5);

  const getErrorMessage = (errorCode: string | null) => {
    switch (errorCode) {
      case 'oauth_failed':
        return 'Đăng nhập với Google thất bại. Vui lòng thử lại.';
      case 'email_not_verified':
        return 'Email chưa được xác thực. Vui lòng kiểm tra hộp thư và xác thực email.';
      default:
        return 'Đã có lỗi xảy ra trong quá trình đăng nhập.';
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          window.location.href = '/login';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="px-8 py-10">
            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.107 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  ❌ Đăng nhập thất bại
                </h1>
                <p className="text-red-600 font-semibold mb-4">
                  {getErrorMessage(message)}
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-orange-700 font-medium">
                    Tự động chuyển hướng về trang đăng nhập trong {countdown} giây...
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a 
                  href="/login" 
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 text-lg"
                >
                  🔑 Thử đăng nhập lại
                </a>
                <a 
                  href="/register" 
                  className="inline-flex items-center justify-center w-full border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-medium py-4 px-6 rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  ➕ Đăng ký tài khoản mới
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative footer */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 px-8 py-4">
            <p className="text-center text-sm text-gray-500">
              💡 <span className="font-semibold text-red-600">TravelNest</span> - Đừng lo lắng, hãy thử lại nhé!
            </p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}