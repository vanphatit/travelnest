'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AuthSuccessPage() {
  const searchParams = useSearchParams();
  const provider = searchParams.get('provider');
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="px-8 py-10">
            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  🎉 Đăng nhập thành công!
                </h1>
                <p className="text-green-600 font-semibold mb-4">
                  {provider === 'google'
                    ? 'Bạn đã đăng nhập thành công với Google.'
                    : 'Chào mừng bạn đến với TravelNest!'
                  }
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-700 font-medium">
                    Tự động chuyển hướng về trang chủ trong {countdown} giây...
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 text-lg"
                >
                  🏠 Về trang chủ ngay
                </a>
              </div>
            </div>
          </div>

          {/* Decorative footer */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-4">
            <p className="text-center text-sm text-gray-500">
              🌍 <span className="font-semibold text-green-600">TravelNest</span> - Hành trình khám phá bắt đầu từ đây!
            </p>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-green-200/30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}