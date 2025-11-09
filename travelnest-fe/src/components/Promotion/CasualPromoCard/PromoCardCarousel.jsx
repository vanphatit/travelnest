import { useState } from 'react'

const PromoCardCarousel = ({ promos = [] }) => {
  const [startIndex, setStartIndex] = useState(0)
  const cardsToShow = 3

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - cardsToShow, 0))
  }

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + cardsToShow, promos.length - cardsToShow)
    )
  }

  const isAtStart = startIndex === 0
  const isAtEnd = startIndex + cardsToShow >= promos.length

  return (
    <div className='relative w-full'>
      {/* Wrapper */}
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${startIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {promos.map((promo) => (
            <div
              key={promo.id}
              className='w-1/3 px-2 shrink-0'
            >
              <a
                href={promo.url}
                target='_blank'
                rel='noopener noreferrer'
                className='block bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition'
              >
                <img
                  src={promo.image}
                  alt={promo.title || 'Promotion'}
                  className='w-full h-50 object-cover hover:scale-105 transition-transform duration-300'
                />
              </a>
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
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>
      )}
    </div>
  )
}

export default PromoCardCarousel
