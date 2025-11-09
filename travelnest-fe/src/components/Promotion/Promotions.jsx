import PromoCardCarousel from './CasualPromoCard/PromoCardCarousel'
import NewUserPromoCarousel from './NewUserPromo/NewUserPromoCarousel'
import { promos } from '../../data/promos'

const Promotions = () => {
  return (
    <section className='py-20'>
      <div className='carousel-container px-20'>
        <PromoCardCarousel promos={promos} />
      </div>

      <div className='mt-0'>
        <NewUserPromoCarousel />
      </div>
    </section>
  )
}

export default Promotions
