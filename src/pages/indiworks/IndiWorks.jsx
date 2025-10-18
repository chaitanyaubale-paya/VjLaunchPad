// import Navbar from '../indiworks/Navbar';
// import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WhyChooseSection from './WhyChooseSection';
import Footer from './Footer';
// import VirtualTourForm from './VirtualTourForm';
import FlexForm from './FlexForm';
import { useMediaQuery } from '@mui/material';
const IndiWorksLanding = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {/* <HeroSection /> */}
      <AboutSection />
      <WhyChooseSection />
      
      {/* {<VirtualTourForm />} */}
      <FlexForm/>
      <Footer />
    </>
  );
};

export default IndiWorksLanding;
