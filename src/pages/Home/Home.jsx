import React from 'react'
import HeroSection from '../../components/HomePage/HeroSection'
import Marquee from '../../components/HomePage/Marquee'
import Welcome from '../../components/HomePage/Welcome'
import StatsSection from '../../components/HomePage/StatsSection'
import Service from '../../components/HomePage/Service'
import Ready from '../../components/Ready'
import SEO from '../../components/Seo'
import PartnersNCustomers from '../../components/AboutPage/PartnersNCustomers'
/* import partners from '../../data/partners'
import customers from '../../data/customers'
 */

const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <SEO
        title="S.L.N Engineering Limited | Electrical, Power & Energy Engineering Solutions"
        description="S.L.N Engineering Limited provides comprehensive electrical and power engineering solutions, including low and medium voltage equipment, power and energy systems, solar solutions, lighting systems, building management systems, and industrial electrical services. We specialize in design, installation, commissioning, maintenance, power equipment supply, and engineering consultancy across Nigeria."
        keywords="
    SLN Engineering Limited,
    electrical engineering company Nigeria,
    power engineering solutions,
    electrical power systems,
    low voltage electrical equipment,
    medium voltage switchgear,
    circuit breakers and motor control,
    power management systems,
    solar energy solutions Nigeria,
    solar panels and inverters,
    battery and hybrid energy systems,
    industrial lighting solutions,
    LED lighting systems,
    building management systems,
    fire and smoke alarm systems,
    electrical testing instruments,
    power equipment procurement,
    electrical installation and commissioning,
    electrical maintenance services,
    industrial electrical services,
    panel building and refurbishment
  "
        canonical="https://slneng.com"
      />

      

      <Welcome />
      <Service />
      
      <h3 className="mt-12 mb-4 text-center text-sm font-semibold tracking-widest text-gray-500">
        TRUSTED BY
      </h3>
      {/* <Marquee speed={35}>
        {customers.map(c => (
          <div key={c.name} className="mx-10 flex items-center">
            <img src={c.src} alt={c.name} className="h-12 w-auto object-contain" />
          </div>
        ))}
      </Marquee>
      <h3 className="mb-4 text-center text-sm font-semibold tracking-widest text-gray-500">
        OUR PARTNERS
      </h3>
      <Marquee speed={55}>
        {partners.map(p => (
          <div key={p.name} className="mx-10 flex items-center">
            <img src={p.src} alt={p.name} className="h-12 w-auto object-contain" />
          </div>
        ))}

      </Marquee> */}
      <PartnersNCustomers />
      <StatsSection />
      
      <Ready />
    </div>
  )
}

export default Home