import React from 'react'
import panels from '../../assets/panelss.webp'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import SEO from '../../components/Seo';
import StatsSection from '../../components/HomePage/StatsSection';
import MissionVisionSection from '../../components/AboutPage/MissionVisionSection';
import PartnersNCustomers from '../../components/AboutPage/PartnersNCustomers';
import WhyChooseUs from '../../components/AboutPage/WhyChooseUs';

const About = () => {
  return (
    <div>
      <SEO
        title="About Us - S.L.N Engineering Limited"
        description="Explore the story behind SLN, a leading force in providing comprehensive engineering solutions. Learn about our expertise in Engineering Procurement and Construction (EPC), Power and Energy Solutions, Mechanical Services, Automation, Facility Management, Engineering Designs and Consultancy. Discover how we excel in sales and supplies of top-quality engineering spares and materials, and pioneering Solar Lights and Panels Solutions. Dive into our journey of innovation, client-centric philosophy, and commitment to shaping the future of engineering excellence."
        keywords="About sln, About slneng, sln engineering limited, slnenglimited, eng, engineering, engineering limited, Engineering Procurement and Construction,Power and Energy Solutions, Mechanical Services, Automation, Facility Management, Engineering Designs and Consultancy, Sales and Supplies of Engineering Spares and Materials, Solar Lights and Panels Solutions"
        canonical="https://slneng.com/about"
      />
      <div className='py-15'>

        <WhyChooseUs/>
        <StatsSection />
        <PartnersNCustomers/>
        <MissionVisionSection/>



      </div>
    </div>
  )
}

export default About