"use client";

import { useState, useEffect } from "react";
import { Plane, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = [
    { name: "Trang chủ", href: "/" },
    { name: "Vé máy bay", href: "#" },
    { name: "Khách sạn", href: "#" },
    { name: "Thuê xe", href: "#" },
    { name: "Trải nghiệm", href: "#" },
    { name: "Về chúng tôi", href: "/about" },
  ];

  // useEffect để lắng nghe scroll
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
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Plane
            className={`w-8 h-8 mr-2 ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          />
          <span
            className={`text-xl font-semibold ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            TravelNest
          </span>
        </Link>

        <nav className="hidden lg:flex space-x-8">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:text-blue-600 transition-colors ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/profile">
            <Button
              variant="ghost"
              className={scrolled ? "text-gray-700" : "text-white"}
            >
              Profile
            </Button>
          </Link>
          <Button
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
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <hr className="my-2" />
            <Link href="/profile" onClick={() => setMobileOpen(false)}>
              <Button
                variant="ghost"
                className="justify-start text-gray-700 w-full"
              >
                Profile
              </Button>
            </Link>
            <Button className="justify-start bg-slate-900 text-white hover:bg-slate-800 mt-2">
              Đăng ký
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
