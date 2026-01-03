import React from 'react'
import HeroSection from '../../components/HomePage/HeroSection'
import Marquee from '../../components/HomePage/Marquee'
import Welcome from '../../components/HomePage/Welcome'
import StatsSection from '../../components/HomePage/StatsSection'
import Service from '../../components/HomePage/Service'
import Ready from '../../components/Ready'
import SEO from '../../components/Seo'
import partners from '../../data/partners'
import customers from '../../data/customers'


const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <SEO
        title="S.L.N Engineering Limited"
        description="Discover unparalleled engineering solutions with S.L.N Engineering Limited. From Engineering Procurement and Construction (EPC) to Power and Energy Solutions, Mechanical Services, Automation, Facility Management, and more. Our expertise encompasses innovative engineering designs and consultancy, sales of top-quality engineering spares and materials, and cutting-edge Solar Lights and Panels Solutions. Partner with us for excellence in every facet of your project."
        keywords="S.L.N, S.L.N ENG, S.L.N ENGINEERING LIMITED, s.l.n, s.l.neng, s.l.n engineering limited, s.l.nenglimited,sln, slneng, eng, engineering, engineering limited, Engineering Procurement and Construction,Power and Energy Solutions, Mechanical Services, Automation, Facility Management, Engineering Designs and Consultancy, Sales and Supplies of Engineering Spares and Materials, Solar Lights and Panels Solutions"
        canonical="https://slneng.com"
      />
      <h3 className="mb-4 text-center text-sm font-semibold tracking-widest text-gray-500">
        OUR PARTNERS
      </h3>
      <Marquee speed={55}>
        {partners.map(p => (
          <div key={p.name} className="mx-10 flex items-center">
            <img src={p.src} alt={p.name} className="h-12 w-auto object-contain" />
          </div>
        ))}
      </Marquee>
      <h3 className="mt-12 mb-4 text-center text-sm font-semibold tracking-widest text-gray-500">
        TRUSTED BY
      </h3>
      <Marquee speed={35}>
        {customers.map(c => (
          <div key={c.name} className="mx-10 flex items-center">
            <img src={c.src} alt={c.name} className="h-12 w-auto object-contain" />
          </div>
        ))}
      </Marquee>
      <Welcome />
      <Service />
      <StatsSection />
      <Ready />
    </div>
  )
}

export default Home