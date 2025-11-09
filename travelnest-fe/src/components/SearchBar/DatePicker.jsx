import { useState, useRef, useEffect } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DatePicker = ({ isRoundTrip }) => {
  const [open, setOpen] = useState(false)
  const [selectingReturn, setSelectingReturn] = useState(false) // để biết đang chọn ngày nào
  const [date, setDate] = useState({
    depart: new Date(),
    return: new Date(),
  })
  const ref = useRef(null)

  // đóng popup khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const formatDate = (d) =>
    d.toLocaleDateString('vi-VN', { day: '2-digit', month: 'short' })

  const handleSelect = (ranges) => {
    if (selectingReturn) {
      setDate((prev) => ({ ...prev, return: ranges.selection.startDate }))
    } else {
      setDate((prev) => ({ ...prev, depart: ranges.selection.startDate }))
    }
  }

  return (
    <div className='flex border-l border-gray-200 items-center'>
      {/* Ô ngày đi */}
      <div
        className='flex items-center px-4 cursor-pointer relative'
        onClick={() => {
          setSelectingReturn(false)
          setOpen(true)
        }}
      >
        <CalendarMonthIcon className='w-5 h-5 text-deep-navy' />
        <span className='ml-2 text-sm'>
          {`${formatDate(date.depart)}`}
        </span>
      </div>

      {/* Ô ngày về */}
      <div
        className={`flex items-center px-4 border-l border-gray-200 relative ${
          !isRoundTrip ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        onClick={() => {
          if (!isRoundTrip) return
          setSelectingReturn(true)
          setOpen(true)
        }}
      >
        <CalendarMonthIcon className='w-5 h-5 text-deep-navy' />
        <span className='ml-2 text-sm'>
          {`${formatDate(date.return)}`}
        </span>
      </div>

      {/* Popup lịch */}
      {open && (
        <div
          ref={ref}
          className='absolute top-14 right-0 z-50 bg-white shadow-lg rounded-xl p-3'
          onClick={(e) => e.stopPropagation()}
        >
          <DateRange
            ranges={[
              {
                startDate: selectingReturn ? date.return : date.depart,
                endDate: selectingReturn ? date.return : date.depart,
                key: 'selection',
              },
            ]}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            editableDateInputs
            rangeColors={['#2563eb']}
            months={2}
            direction='horizontal'
          />
        </div>
      )}
    </div>
  )
}

export default DatePicker
