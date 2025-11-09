import BusinessIcon from '@mui/icons-material/Business'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket'
import TimeToLeave from '@mui/icons-material/TimeToLeave'
import CarRentalIcon from '@mui/icons-material/CarRental'
import AttractionsIcon from '@mui/icons-material/Attractions'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'

const tabs = [
  { id: 'hotel', icon: <BusinessIcon className='w-5 h-5' />, label: 'Khách sạn' },
  { id: 'flight', icon: <AirplaneTicketIcon className='w-5 h-5' />, label: 'Vé máy bay' },
  { id: 'bus', icon: <TimeToLeave className='w-5 h-5' />, label: 'Vé xe khách' },
  { id: 'car', icon: <CarRentalIcon className='w-5 h-5' />, label: 'Cho thuê xe' },
  { id: 'activity', icon: <AttractionsIcon className='w-5 h-5' />, label: 'Hoạt động & Vui chơi' },
  { id: 'more', icon: <DragIndicatorIcon className='w-5 h-5' />, label: 'Khác' },
]

const SearchTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className='flex justify-center space-x-6  px-6 py-3'>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition font-medium ${
            activeTab === tab.id
              ? 'bg-white text-deep-navy shadow-sm'
              : 'text-white hover:bg-white/10'
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

export default SearchTabs
