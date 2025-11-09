import Navbar from '~/components/Navbar'
import HeroSection from '~/components/HeroSection'

import Banner from '~/components/Banner'
import Footer from '~/components/Footer'
import Promotions from '~/components/Promotion/Promotions'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Promotions />
      <Banner />
      <Footer />
    </>
  )
}

export default HomePage
