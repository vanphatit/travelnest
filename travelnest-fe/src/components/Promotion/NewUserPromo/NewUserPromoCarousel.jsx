import { useState } from 'react'
import PromoCodeCard from '../NewUserPromo/Card/PromoCodeCard'
import { promotionCodes } from '../../../data/promotionCodes'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const NewUserPromoCarousel = () => {
  const [startIndex, setStartIndex] = useState(0)
  const cardsToShow = 3

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - cardsToShow, 0))
  }

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + cardsToShow, promotionCodes.length - cardsToShow)
    )
  }

  const isAtStart = startIndex === 0
  const isAtEnd = startIndex + cardsToShow >= promotionCodes.length

  return (
    <div className='py-16 bg-white relative px-4 sm:px-8 lg:px-20'>
      {/* Tiêu đề */}
      <h2 className='text-2xl font-bold text-deep-navy mb-8 ml-2 flex items-center'>
        <CardGiftcardIcon className='w-8 h-8 text-deep-navy mr-2' />
        Mã Ưu Đãi Tặng Bạn Mới
      </h2>

      {/* Carousel */}
      <div className='relative w-full'>
        <div className='overflow-hidden'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{
              transform: `translateX(-${startIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {promotionCodes.map((promo) => (
              <div key={promo.id} className='w-1/3 px-2 shrink-0'>
                <PromoCodeCard {...promo} />
              </div>
            ))}
          </div>
        </div>

        {/* Nút Prev */}
        {!isAtStart && (
          <button
            onClick={handlePrev}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 border border-gray-200 hover:bg-blue-500 hover:text-white transition duration-300 focus:outline-none z-10'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
        )}

        {/* Nút Next */}
        {!isAtEnd && (
          <button
            onClick={handleNext}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 border border-gray-200 hover:bg-blue-500 hover:text-white transition duration-300 focus:outline-none z-10'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default NewUserPromoCarousel
