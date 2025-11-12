import { Search } from "lucide-react";
import DestinationInput from "./DestinationInput";
import DatePicker from "./DatePicker";
import GuestSelector from "./GuestSelector";

const HotelSearchBar = () => {
  return (
    <div className="bg-white text-gray-700 rounded-full flex items-stretch shadow-lg overflow-hidden">
      <DestinationInput />
      <DatePicker isRoundTrip={true} />
      <GuestSelector />
      <button className="bg-orange-500 text-white px-6 hover:bg-orange-600 transition-colors flex items-center justify-center">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HotelSearchBar;
