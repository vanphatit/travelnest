import { useState, useRef, useEffect } from 'react'
import GroupsIcon from '@mui/icons-material/Groups'

const GuestSelector = () => {
  const [open, setOpen] = useState(false)
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 })
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      ref={ref}
      className='flex items-center border-l border-gray-200 px-4 cursor-pointer relative'
      onClick={() => setOpen(!open)}
    >
      <GroupsIcon className='w-5 h-5 text-deep-navy' />
      <span className='ml-2 text-sm'>
        {`${guests.adults} người lớn, ${guests.children} Trẻ em, ${guests.rooms} phòng`}
      </span>

      {open && (
        <div className='absolute top-14 right-0 bg-white shadow-lg rounded-xl p-4 w-64 text-sm z-50'>
          {[
            { key: 'adults', label: 'Người lớn' },
            { key: 'children', label: 'Trẻ em' },
            { key: 'rooms', label: 'Phòng' },
          ].map((item) => (
            <div
              key={item.key}
              className='flex items-center justify-between py-2'
            >
              <span>{item.label}</span>
              <div className='flex items-center gap-2'>
                <button
                  className='w-6 h-6 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200'
                  onClick={(e) => {
                    e.stopPropagation()
                    setGuests((prev) => ({
                      ...prev,
                      [item.key]: Math.max(prev[item.key] - 1, 0),
                    }))
                  }}
                >
                  −
                </button>
                <span>{guests[item.key]}</span>
                <button
                  className='w-6 h-6 rounded-full bg-blue-100 text-deep-navy hover:bg-blue-200'
                  onClick={(e) => {
                    e.stopPropagation()
                    setGuests((prev) => ({
                      ...prev,
                      [item.key]: prev[item.key] + 1,
                    }))
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <button
            className='w-full mt-3 bg-deep-navy text-white py-2 rounded-lg font-medium hover:bg-blue-600'
            onClick={() => setOpen(false)}
          >
            Xong
          </button>
        </div>
      )}
    </div>
  )
}

export default GuestSelector
