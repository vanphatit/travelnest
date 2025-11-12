import { Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo và thông tin */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Plane className="w-8 h-8 mr-2 text-orange-500" />
              <span className="text-2xl font-bold">TravelNest</span>
            </div>
            <p className="text-gray-300 mb-4">
              App du lịch hàng đầu, một chạm đi bất cứ đâu. Đặt vé, đặt phòng và
              tận hưởng hành trình của bạn cùng TravelNest.
            </p>
          </div>

          {/* Dịch vụ */}
          <div>
            <h3 className="font-semibold mb-4">Dịch vụ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vé máy bay
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Khách sạn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Thuê xe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trải nghiệm
                </a>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div>
            <h3 className="font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chính sách
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Điều khoản
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>© 2025 TravelNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
