"use client";

import Image from "next/image";
import { promos } from "../../data/promos";
import { Promo } from "../../types";

interface PromoCardProps {
  promo: Promo;
}

const PromoCard = ({ promo }: PromoCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
    <div className="relative h-48">
      <Image
        src={promo.image}
        alt={promo.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{promo.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{promo.description}</p>
    </div>
  </div>
);

const Promotions = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ưu đãi hấp dẫn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những chương trình khuyến mãi tốt nhất cho chuyến du lịch
            của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Xem tất cả ưu đãi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
