"use client";

import { useState, useEffect } from "react";
import { Plane, Menu, X, User, LogOut } from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const menu = [
    "Vé máy bay",
    "Khách sạn",
    "Thuê xe",
    "Trải nghiệm",
    "Combo",
    "Ưu đãi",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white shadow-md"
          : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div
              className={`p-2 rounded-full ${scrolled ? "bg-blue-600" : "bg-white/20"
                }`}
            >
              <Plane
                className={`w-6 h-6 ${scrolled ? "text-white" : "text-white"
                  }`}
              />
            </div>
            <span
              className={`text-xl font-bold ${scrolled ? "text-gray-800" : "text-white"
                }`}
            >
              TravelNest
            </span>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {menu.map((m) => (
              <a
                key={m}
                href="#"
                className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-700" : "text-white"
                  }`}
              >
                {m}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Clear all auth data first
                localStorage.clear();
                document.cookie.split(";").forEach(c => {
                  const eqPos = c.indexOf("=");
                  const name = eqPos > -1 ? c.substr(0, eqPos) : c;
                  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
                });
                console.log('Cleared auth data, navigating to /login');
                window.location.href = '/login';
              }}
              className={scrolled ? "text-gray-700" : "text-white"}
            >
              Đăng nhập
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Clear all auth data first
                localStorage.clear();
                document.cookie.split(";").forEach(c => {
                  const eqPos = c.indexOf("=");
                  const name = eqPos > -1 ? c.substr(0, eqPos) : c;
                  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
                });
                console.log('Cleared auth data, navigating to /register');
                window.location.href = '/register';
              }}
              className={
                scrolled
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-white text-slate-900 hover:bg-gray-100"
              }
            >
              Đăng ký
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={scrolled ? "text-gray-700" : "text-white"}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <nav className="flex flex-col px-4 py-4 space-y-2">
              {menu.map((m) => (
                <a key={m} href="#" className="text-gray-700 py-2">
                  {m}
                </a>
              ))}
              <hr className="my-2" />
              <Button
                variant="ghost"
                onClick={() => {
                  router.push('/login');
                  setMobileOpen(false);
                }}
                className="justify-start text-gray-700 w-full"
              >
                Đăng nhập
              </Button>
              <Button
                onClick={() => {
                  router.push('/register');
                  setMobileOpen(false);
                }}
                className="justify-start bg-slate-900 text-white hover:bg-slate-800 mt-2 w-full"
              >
                Đăng ký
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
