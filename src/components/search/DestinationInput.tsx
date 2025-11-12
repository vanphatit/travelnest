import { MapPin } from "lucide-react";

const DestinationInput = () => (
  <div className="flex items-center flex-1 px-4 py-3">
    <MapPin className="w-5 h-5 text-slate-900" />
    <input
      type="text"
      placeholder="Thành phố, khách sạn, điểm đến"
      className="flex-1 ml-2 py-2 outline-none placeholder-gray-400 bg-transparent text-sm"
    />
  </div>
);

export default DestinationInput;
