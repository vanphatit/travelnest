import { useState } from 'react'
import BusinessIcon from '@mui/icons-material/Business'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket'
import TimeToLeave from '@mui/icons-material/TimeToLeave'
import CarRentalIcon from '@mui/icons-material/CarRental'

const PromoCodeCard = ({ icon, title, code, description }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getIconColor = () => {
    if (icon === 'flight') return 'bg-blue-600'
    if (icon === 'hotel') return 'bg-sky-500'
    if (icon === 'xperience') return 'bg-red-500'
    if (icon === 'truck') return 'bg-green-500'
    return 'bg-gray-500'
  }

  const getIconComponent = () => {
    switch (icon) {
    case 'flight':
      return <AirplaneTicketIcon className='w-4 h-4 text-white' />
    case 'hotel':
      return <BusinessIcon className='w-4 h-4 text-white' />
    case 'xperience':
      return <TimeToLeave className='w-4 h-4 text-white' />
    case 'truck':
      return <CarRentalIcon className='w-4 h-4 text-white' />
    default:
      return null
    }
  }

  return (
    <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full'>
      <div className='p-4 flex-1'>
        {/* Header */}
        <div className='flex items-start justify-between mb-3'>
          <div className='flex items-center gap-2'>
            <div
              className={`w-8 h-8 rounded-full ${getIconColor()} flex items-center justify-center shrink-0 mt-1`}
            >
              {getIconComponent()}
            </div>
            <h4 className='font-semibold text-gray-800 text-sm leading-snug line-clamp-2'>
              {title}
            </h4>
          </div>
          <button className='text-gray-400 hover:text-blue-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </div>
        <p className='text-gray-500 text-sm leading-snug'>{description}</p>
      </div>

      {/* Divider */}
      <div className='relative h-4 bg-white my-1'>
        <div
          className='absolute inset-x-0 h-0.5'
          style={{
            backgroundColor: 'rgb(229, 231, 235)',
            backgroundImage:
              'radial-gradient(circle, white 6px, transparent 6px)',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center',
            backgroundSize: '16px 1px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        ></div>
        <div className='absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-gray-200'></div>
        <div className='absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-gray-200'></div>
      </div>

      {/* Footer */}
      <div className='px-4 py-3 flex items-center bg-gray-50'>
        <div className='flex items-center text-sm font-semibold text-gray-700 flex-1 truncate'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            className='mr-2 flex-shrink-0'
          >
            <g fill='none' fillRule='evenodd'>
              <path
                d='M6.5 4.5V3C6.5 2.44772 6.94772 2 7.5 2H13C13.5523 2 14 2.44772 14 3V10.5C14 11.0523 13.5523 11.5 13 11.5H9.5'
                stroke='#0194F3'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M2 13V5.5C2 4.94772 2.44772 4.5 3 4.5H8.5C9.05228 4.5 9.5 4.94772 9.5 5.5V13C9.5 13.5523 9.05228 14 8.5 14H3C2.44772 14 2 13.5523 2 13Z'
                stroke='#687176'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </g>
          </svg>
          <span className='tracking-widest'>{code}</span>
        </div>

        <button
          onClick={handleCopy}
          className={`px-4 py-1.5 text-sm font-semibold rounded-full transition duration-200 ${
            copied
              ? 'bg-green-500 text-white'
              : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
          }`}
        >
          {copied ? 'Đã Sao Chép' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

export default PromoCodeCard
