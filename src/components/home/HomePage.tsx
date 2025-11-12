import Navbar from "../layout/Navbar";
import HeroSection from "./HeroSection";
import Promotions from "./Promotions";
import Banner from "./Banner";
import Footer from "../layout/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Promotions />
      <Banner />
      <Footer />
    </>
  );
};

export default HomePage;
