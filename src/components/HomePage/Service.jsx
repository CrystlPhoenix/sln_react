// import React from 'react'
// import facility from '../../assets/facility.png'
// import epc from '../../assets/epc.png'
// import power from '../../assets/power.png'
// import automation from '../../assets/automation.png'
// import wrench from '../../assets/wrench.png'
// import blueprint from '../../assets/blueprint.png'
// import toolbox from '../../assets/toolbox.png'
// import solar from '../../assets/solar-energy.png'
// import { Link } from 'react-router-dom'

// const Service = () => {

//     const servicesData = [
//         {
//         id: 1,
//         icon: facility,
//         title: "Facility Management",
//         description: "We take pride in managing facilities with precision, ensuring operational smoothness and maintaining peak performance standards."
//       },
//       {
//         id: 2,
//         icon: epc,
//         title: "Engineering Procurement and Construction (EPC)",
//         description: "Transform your visions into reality with our end-to-end EPC services. From conceptualization to execution, we seamlessly integrate engineering, procurement, and construction processes to deliver projects that stand the test of time.."
//       },
  
//       {
//         id: 3,
//         icon: power,
//         title: "Power and Energy Solutions:",
//         description: "At the forefront of energy innovation, we engineer sustainable power solutions that empower industries, communities, and businesses. From conventional to renewable energy sources, we ensure reliability and efficiency in every solution."
//       },
//       {
//         id: 4,
//         icon: wrench,
//         title: "Mechanical Services",
//         description: "Precision and durability define our Mechanical Services. Our expert team ensures that mechanical systems operate seamlessly, delivering performance that exceeds industry standards.."
//       },
//       {
//         id: 5,
//         icon: automation,
//         title: "Automation",
//         description: "Embracing cutting-edge technology, we deploy automation solutions that optimize operations and streamline processes, enhancing productivity and performance."
//       },
//       {
//         id: 6,
//         icon: blueprint,
//         title: "Engineering Designs and Consultancy",
//         description: "Our team of experts offers innovative designs and strategic consultancy services, providing tailored solutions to complex engineering challenges."
//       },
//     ];
//   return (
//     <div className='py-15'>
//       <div className='flex justify-center items-center w-full flex-col gap-4 text-center'>
//         <p className='text-xl font-semibold'>What We Do</p>
//         <h1 className='text-4xl font-semibold w-[50%] leading-relaxed'>Comprehensive Electrical and Power Engineering Services</h1>
//       </div>

//       <div className='w-full grid grid-cols-3 gap-[2rem] py-15 pt-20'>
//         {servicesData.map((service) => (
//           <div key={service.id} className='py-9 px-6 hover:shadow-md '>
//             <img src={service.icon} alt={service.title} className='w-[3rem]' />
//             <h3 className='text-xl text-blue-700 font-semibold py-6'>{service.title}</h3>
//             <p className='text-xs text-gray-400 leading-relaxed'>{service.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className='flex items-center justify-center'> 
//       <Link to={'/services'}>
//       <button className='bg-blue-600 text-white text-sm py-4 px-6 cursor-pointer '>
//         View More
//       </button>
//       </Link>
//       </div>
//     </div>
//   )
// }

// export default Service






// I NEED TO COME BACK TO THIS 
// import React from 'react'
// import facility from '../../assets/facility.png'
// import epc from '../../assets/epc.png'
// import power from '../../assets/power.png'
// import automation from '../../assets/automation.png'
// import wrench from '../../assets/wrench.png'
// import blueprint from '../../assets/blueprint.png'
// import toolbox from '../../assets/toolbox.png'
// import solar from '../../assets/solar-energy.png'
// import { Link } from 'react-router-dom'

// const Service = () => {

//   const servicesData = [
//     {
//       id: 1,
//       icon: facility,
//       title: "Facility Management",
//       description: "We take pride in managing facilities with precision, ensuring operational smoothness and maintaining peak performance standards."
//     },
//     {
//       id: 2,
//       icon: epc,
//       title: "Engineering Procurement and Construction (EPC)",
//       description: "Transform your visions into reality with our end-to-end EPC services. From conceptualization to execution, we seamlessly integrate engineering, procurement, and construction processes to deliver projects that stand the test of time.."
//     },
//     {
//       id: 3,
//       icon: power,
//       title: "Power and Energy Solutions:",
//       description: "At the forefront of energy innovation, we engineer sustainable power solutions that empower industries, communities, and businesses. From conventional to renewable energy sources, we ensure reliability and efficiency in every solution."
//     },
//     {
//       id: 4,
//       icon: wrench,
//       title: "Mechanical Services",
//       description: "Precision and durability define our Mechanical Services. Our expert team ensures that mechanical systems operate seamlessly, delivering performance that exceeds industry standards.."
//     },
//     {
//       id: 5,
//       icon: automation,
//       title: "Automation",
//       description: "Embracing cutting-edge technology, we deploy automation solutions that optimize operations and streamline processes, enhancing productivity and performance."
//     },
//     {
//       id: 6,
//       icon: blueprint,
//       title: "Engineering Designs and Consultancy",
//       description: "Our team of experts offers innovative designs and strategic consultancy services, providing tailored solutions to complex engineering challenges."
//     },
//   ];

//   return (
//     <div className='py-15 px-4'>
//       <div className='flex justify-center items-center w-full flex-col gap-4 text-center'>
//         <p className='text-lg md:text-xl font-semibold'>What We Do</p>
//         <h1 className='text-2xl md:text-4xl font-semibold md:w-[50%] w-full leading-relaxed'>
//           Comprehensive Electrical and Power Engineering Services
//         </h1>
//       </div>

//       <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[2rem] py-10 md:py-15'>
//         {servicesData.map((service) => (
//           <div key={service.id} className='py-9 px-6 hover:shadow-md'>
//             <img src={service.icon} alt={service.title} className='w-[3rem]' />
//             <h3 className='text-lg md:text-xl text-blue-800 font-semibold py-6'>{service.title}</h3>
//             <p className='text-sm text-gray-500 leading-relaxed'>{service.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className='flex items-center justify-center mt-6'>
//         <Link to={'/services'}>
//           <button className='bg-blue-800 text-white text-sm py-3 px-6 cursor-pointer'>
//             View More
//           </button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Service;


import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import facility from '../../assets/facility.png'
import epc from '../../assets/epc.png'
import power from '../../assets/power.png'
import automation from '../../assets/automation.png'
import wrench from '../../assets/wrench.png'
import blueprint from '../../assets/blueprint.png'
import { Link } from 'react-router-dom'

const Service = () => {
  const headersRef = useRef(null);
  const groupOneRef = useRef(null);
  const groupTwoRef = useRef(null);
  const buttonRef = useRef(null);

  const headersInView = useInView(headersRef, { once: false, margin: '-100px' });
  const groupOneInView = useInView(groupOneRef, { once: false, margin: '-100px' });
  const groupTwoInView = useInView(groupTwoRef, { once: false, margin: '-100px' });
  const buttonInView = useInView(buttonRef, { once: false, margin: '-100px' });

  const servicesData = [
    {
      id: 1,
      icon: facility,
      title: "Design, Installation & Commissioning",
      description: "We design, install, and commission electrical power systems tailored to meet operational and safety standards across industries."
    },
    {
      id: 2,
      icon: epc,
      title: "Operations & Maintenance Services",
      description: "Daily, weekly, monthly, and annual maintenance services to ensure optimal performance of installed electrical equipment."
    },
    {
      id: 3,
      icon: power,
      title: "Power Equipment Procurement & Supply",
      description: "Supply of reliable power equipment and engineering materials sourced to meet project and operational requirements."
    },
    {
      id: 4,
      icon: wrench,
      title: "Power & Industrial Control Maintenance",
      description: "Preventive and corrective maintenance services for power equipment and industrial control systems."
    },
    {
      id: 5,
      icon: automation,
      title: "On-Site Equipment & Component Training",
      description: "Hands-on training for personnel on the operation, maintenance, and safety of electrical equipment and components."
    },
    {
      id: 6,
      icon: blueprint,
      title: "Power System Audit & Analysis",
      description: "Comprehensive audits and analysis to identify inefficiencies, risks, and opportunities for system optimization."
    },
  ];

  return (
    <div className='py-15 px-4'>

      {/* Header Section */}
      <motion.div
        ref={headersRef}
        className='flex justify-center items-center w-full flex-col gap-4 text-center'
        initial={{ opacity: 0, y: 40 }}
        animate={headersInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* <p className='text-lg md:text-xl font-semibold'>What We Do</p> */}
        <div className='w-full text-center inline-flex gap-2 items-center justify-center'>
        
        <p className='text-lg md:text-xl inline-block'>What We Do</p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
      </div>
        <h1 className='text-2xl md:text-4xl md:w-[50%] w-full leading-relaxed'>
          Comprehensive Electrical and Power Engineering Services
        </h1>
      </motion.div>

      {/* Service Cards */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[2rem] py-10 md:py-15'>

        {/* First 3 services */}
        {servicesData.slice(0, 3).map((service, index) => (
          <motion.div
            key={service.id}
            ref={index === 0 ? groupOneRef : null} // attach ref only once
            className='py-9 px-6 hover:shadow-md'
            initial={{ opacity: 0, y: 40 }}
            animate={groupOneInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={service.icon} alt={service.title} className='w-[3rem]' />
            <h3 className='text-lg md:text-xl text-blue-800 font-semibold py-6'>{service.title}</h3>
            <p className='text-sm text-gray-500 leading-relaxed'>{service.description}</p>
          </motion.div>
        ))}

        {/* Next 3 services */}
        {servicesData.slice(3, 6).map((service, index) => (
          <motion.div
            key={service.id}
            ref={index === 0 ? groupTwoRef : null}
            className='py-9 px-6 hover:shadow-md'
            initial={{ opacity: 0, y: 40 }}
            animate={groupTwoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={service.icon} alt={service.title} className='w-[3rem]' />
            <h3 className='text-lg md:text-xl text-blue-800 font-semibold py-6'>{service.title}</h3>
            <p className='text-sm text-gray-500 leading-relaxed'>{service.description}</p>
          </motion.div>
        ))}

      </div>

      {/* View More Button */}
      <motion.div
        ref={buttonRef}
        className='flex items-center justify-center mt-6'
        initial={{ opacity: 0, y: 30 }}
        animate={buttonInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Link to={'/services'}>
          <button className='bg-blue-800 text-white text-sm py-3 px-6 cursor-pointer'>
            View More
          </button>
        </Link>
      </motion.div>
    </div>
  )
}

export default Service;
