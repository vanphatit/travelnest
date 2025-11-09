import { useState, useEffect } from 'react'
import AirlinesIcon from '@mui/icons-material/Airlines'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false) // <-- state để check scroll
  const menu = ['Vé máy bay', 'Khách sạn', 'Thuê xe', 'Trải nghiệm', 'Combo', 'Ưu đãi']

  // useEffect để lắng nghe scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // scroll > 50px -> đổi background
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center'>
          <AirlinesIcon className={`w-8 h-8 mr-2 ${scrolled ? 'text-deep-navy' : 'text-white'}`} />
          <span className={`text-xl font-semibold ${scrolled ? 'text-deep-navy' : 'text-white'}`}>TravelNest</span>
        </div>
        <nav className='hidden lg:flex space-x-8'>
          {menu.map((m) => (
            <a key={m} href='#' className={`hover:text-deep-navy ${scrolled ? 'text-gray-700' : 'text-white'}`}>{m}</a>
          ))}
        </nav>
        <div className='hidden lg:flex items-center space-x-4'>
          <button className={`${scrolled ? 'text-gray-700' : 'text-white'}`}>Đăng nhập</button>
          <button className={`px-4 py-2 rounded-md ${scrolled ? 'bg-deep-navy text-white' : 'bg-white text-deep-navy'}`}>Đăng ký</button>
        </div>
        <div className='lg:hidden'>
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`${scrolled ? 'text-gray-700' : 'text-white'}`}>
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className='lg:hidden bg-white shadow-md'>
          <nav className='flex flex-col px-4 py-4 space-y-2'>
            {menu.map((m) => (
              <a key={m} href='#' className='text-gray-700'>{m}</a>
            ))}
            <hr className='my-2' />
            <button className='text-left text-gray-700'>Đăng nhập</button>
            <button className='text-left bg-deep-navy text-white px-4 py-2 rounded-md mt-2'>Đăng ký</button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
