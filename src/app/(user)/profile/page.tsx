"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { AddButton, StatusBadge } from "@/components/profile/ProfileComponents";
import { User, Settings, CreditCard, Bell, Shield, LogOut } from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal");

  // Sidebar menu items
  const sidebarItems = [
    { id: "personal", icon: User, label: "Thông tin tài khoản", count: 0 },
    { id: "cards", icon: CreditCard, label: "Thẻ của tôi", count: 0 },
    { id: "bookings", icon: Settings, label: "Đặt chỗ của tôi", count: 0 },
    {
      id: "transactions",
      icon: CreditCard,
      label: "Danh sách giao dịch",
      count: 0,
    },
    { id: "refunds", icon: CreditCard, label: "Refunds", count: 0 },
    {
      id: "notifications",
      icon: Bell,
      label: "Thông báo giá vé máy bay",
      count: 0,
    },
    {
      id: "passenger",
      icon: User,
      label: "Thông tin hành khách đã lưu",
      count: 0,
    },
    { id: "settings", icon: Settings, label: "Cài đặt thông báo", count: 0 },
    { id: "account", icon: Shield, label: "Tài khoản", badge: true },
    { id: "logout", icon: LogOut, label: "Đăng xuất", count: 0 },
  ];

  const ProfileSidebar = () => (
    <div className="w-80 bg-white rounded-lg shadow-sm border h-fit">
      {/* Profile Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            P
          </div>
          <div>
            <div className="font-medium text-gray-900">Phat</div>
            <div className="text-sm text-gray-500">Google</div>
          </div>
        </div>
        <div className="mt-4 px-4 py-2 bg-amber-100 rounded-lg flex items-center gap-2 text-amber-800">
          <Settings size={16} />
          <span className="text-sm font-medium">
            Bạn là thành viên Bronze Priority
          </span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-1">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
              activeTab === item.id
                ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            {item.badge && (
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            )}
            {item.count !== undefined && (
              <span className="text-sm text-gray-400">{item.count}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  const PersonalInfoContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Cài đặt</h1>
          <div className="flex gap-6 mt-4 border-b">
            <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
              Thông tin tài khoản
            </button>
            <button className="pb-2 text-gray-500">Mật khẩu & Bảo mật</button>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dữ liệu cá nhân</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div>
              <Label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-700"
              >
                Tên đầy đủ
              </Label>
              <Input
                id="fullName"
                defaultValue="Phát"
                className="mt-1"
                placeholder="Tên trong hồ sơ được rút ngắn từ họ tên của bạn."
              />
              <p className="text-xs text-gray-500 mt-1">
                Tên trong hồ sơ được rút ngắn từ họ tên của bạn.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Giới tính
                </Label>
                <Select defaultValue="male" className="mt-1">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Ngày sinh
                </Label>
                <Select defaultValue="14" className="mt-1">
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Tháng Năm
                </Label>
                <div className="flex gap-2 mt-1">
                  <Select defaultValue="3" className="flex-1">
                    <option value="1">Tháng Một</option>
                    <option value="2">Tháng Hai</option>
                    <option value="3">Tháng Ba</option>
                    <option value="4">Tháng Tư</option>
                    <option value="5">Tháng Năm</option>
                    <option value="6">Tháng Sáu</option>
                    <option value="7">Tháng Bảy</option>
                    <option value="8">Tháng Tám</option>
                    <option value="9">Tháng Chín</option>
                    <option value="10">Tháng Mười</option>
                    <option value="11">Tháng Mười Một</option>
                    <option value="12">Tháng Mười Hai</option>
                  </Select>
                  <Select defaultValue="2024" className="flex-1">
                    {Array.from({ length: 100 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <Label
                htmlFor="city"
                className="text-sm font-medium text-gray-700"
              >
                Thành phố cư trú
              </Label>
              <Input
                id="city"
                placeholder="Thành phố cư trú"
                className="mt-1"
              />
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" className="text-gray-600">
                Để sau
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Lưu</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Email
            <AddButton label="Thêm email" />
          </CardTitle>
          <CardDescription>Chỉ có thể sử dụng tối đa 3 email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium">1. vanphat15it@gmail.com</div>
              </div>
              <StatusBadge status="notifications">
                Nơi nhận thông báo
              </StatusBadge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Số di động
            <AddButton label="Thêm số di động" />
          </CardTitle>
          <CardDescription>
            Chỉ có thể sử dụng tối đa 3 số di động
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <ProfileSidebar />
          <div className="flex-1">
            <PersonalInfoContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
