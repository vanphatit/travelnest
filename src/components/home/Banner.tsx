import { Button } from "../ui/Button";

const Banner = () => {
  return (
    <section className="bg-sky-50 text-center py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-700">
          Du lịch dễ dàng hơn với TravelNest!
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Đặt mọi thứ bạn cần cho chuyến đi chỉ trong một ứng dụng. Từ vé máy
          bay, khách sạn đến các hoạt động giải trí.
        </p>
        <Button
          size="lg"
          className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3"
        >
          Tải ứng dụng ngay
        </Button>
      </div>
    </section>
  );
};

export default Banner;
