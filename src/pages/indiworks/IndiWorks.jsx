// import Navbar from '../indiworks/Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WhyChooseSection from './WhyChooseSection';
import Footer from './Footer';
// import VirtualTourForm from './VirtualTourForm';
import FlexForm from './FlexForm';
import { useMediaQuery } from '@mui/material';
import Navbar from '../indiworks/Navbar';
import HeroMobile from './HeroMobile';

const IndiWorksLanding = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {isMobile && <Navbar/>}
      {isMobile ? <HeroMobile />:<HeroSection />}
      <AboutSection />
      <WhyChooseSection />
      <FlexForm/>
      <Footer />
    </>
  );
};

export default IndiWorksLanding;
