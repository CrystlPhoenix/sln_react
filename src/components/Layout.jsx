// src/components/Layout.jsx
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HomePage/HeroSection';
import FixedButtons from './FixedButtons';
import StatsSection from './HomePage/StatsSection';

export default function Layout({ children }) {
    const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <Navbar isHomePage={isHomePage}/>
      <FixedButtons/>

      {/* {showHero && <HeroSection/>} */}
      {isHomePage && <HeroSection />}
      
      <main key={location.pathname} className={`w-full  px-4 max-w-[100rem] mx-auto py-8 ${!isHomePage ? 'pt-[7rem]' : ''}`}>
        {children}
      </main>
      {/* {isHomePage && <StatsSection/>} */}
      <Footer />
    </>
  );
}
