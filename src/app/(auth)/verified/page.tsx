'use client';

import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function VerifiedPage() {
    const router = useRouter();

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
                                    🎉 Chào mừng đến với TravelNest!
                                </h1>
                                <h2 className="text-xl font-semibold text-green-600 mb-4">
                                    Email đã được xác thực thành công!
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Tài khoản của bạn đã được kích hoạt thành công. 
                                    <br />
                                    Bạn có thể đăng nhập để khám phá những chuyến du lịch tuyệt vời cùng chúng tôi.
                                </p>
                            </div>

                            <div className="space-y-4 pt-2">
                                <Button
                                    onClick={() => router.push('/login')}
                                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 text-lg"
                                >
                                    🔑 Đăng nhập ngay
                                </Button>
                                <Button
                                    onClick={() => router.push('/')}
                                    variant="secondary"
                                    className="w-full border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-medium py-4 px-6 rounded-xl hover:bg-gray-50 transition-all duration-200"
                                >
                                    🏠 Về trang chủ
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative footer */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6">
                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-2">
                                Cảm ơn bạn đã tin tưởng và đồng hành cùng TravelNest
                            </p>
                            <p className="text-xs text-gray-500">
                                🌍 Hãy sẵn sàng cho những trải nghiệm du lịch tuyệt vời
                            </p>
                        </div>
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