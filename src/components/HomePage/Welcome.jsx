// import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";
// import globe from '../../assets/globe.png'
// import quality from '../../assets/quality.png'
// import bulb from '../../assets/lightbulb.png'
// import shake from '../../assets/hand-shake.png'


// const features = [
//     {
//         title: "Holistic Expertise",
//         description: "One-stop-shop for a diverse range of engineering services.",
//         number: "01",
//         image: globe
//     },
//     {
//         title: "Quality Assurance",
//         description: "Adherence to the highest standards, ensuring reliability and excellence.",
//         number: "02",
//         image: quality
//     },
//     {
//         title: "Innovation Hub",
//         description: "Stay ahead with cutting-edge technology and sustainable practices.",
//         number: "03",
//         image: bulb
//     },
//     {
//         title: "Client-Focused",
//         description: "Tailored solutions that prioritize your unique needs.",
//         number: "04",
//         image: shake
//     }
// ];



// const Welcome = () => {
//     return (
//         <div className='py-10'>
//             <h1 className='text-2xl text-center mb-15'>WELCOME TO SLN ENGINEERING LIMITED</h1>

//             <div className='grid grid-cols-2 gap-15'>
//                 <div>
//                     <h3 className='text-sm'>Welcome to SLN Engineering Limited, where innovation, expertise, and dedication converge to redefine the landscape of engineering solutions. With a steadfast commitment to excellence, we have emerged as a leading provider of comprehensive services in the fields of engineering, procurement, construction, and beyond.</h3>

//                     <p className='text-xs py-4'>At SLN, we specialize in a spectrum of services tailored to meet the diverse needs of our clients. Our core offerings encompass:</p>

//                     <ul className='mt-5 flex flex-col gap-2 text-sm'>
//                         <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-600 text-white rounded-full p-1 w-5  h-5' /> Engineering Excellence</li>
//                         <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-600 text-white rounded-full p-1 w-5  h-5' />Powering Tomorrow</li>
//                         <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-600 text-white rounded-full p-1 w-5  h-5' />Precision Mechanical Services</li>
//                         <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-600 text-white rounded-full p-1 w-5  h-5' />Automation Redefined</li>
//                         <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-600 text-white rounded-full p-1 w-5  h-5' />Facility Management Mastery</li>
//                         <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-600 text-white rounded-full p-1 w-5  h-5' />And many more..</li>
//                     </ul>
//                 </div>

//                 {/* <div className='grid grid-cols-2 gap-10 gap-y-15 stuff'>

//                 <div>
//                     <div className='flex items-center justify-between mb-3 relative'>
//                         <h1 className='font-semibold'>Holistic Expertise</h1>
//                         <h1 className='text-5xl text-blue-200 font-semibold absolute z-[-1000] left-[-4%]'>01</h1>
//                         <img src={globe} alt="" className='w-[3rem]' />
//                     </div>
//                     <p>One-stop-shop for a diverse range of engineering services.</p>
//                 </div>

//                 <div>
//                     <div className='flex items-center justify-between mb-3 relative'>
//                         <h1 className='font-semibold'>Quality Assurance</h1>
//                         <h1 className='text-5xl text-blue-200 font-semibold absolute z-[-1000] left-[-4%]'>01</h1>
//                         <img src={globe} alt="" className='w-[3rem]' />
//                     </div>
//                     <p>Adherence to the highest standards, ensuring reliability and excellence.</p>
//                 </div>

//                 <div>
//                     <div className='flex items-center justify-between mb-3 relative'>
//                         <h1 className='font-semibold'>  Innovation HUb</h1>
//                         <h1 className='text-5xl text-blue-200 font-semibold absolute z-[-1000] left-[-4%]'>01</h1>
//                         <img src={globe} alt="" className='w-[3rem]' />
//                     </div>
//                     <p>Stay ahead with cutting-edge technology and sustainable practices.</p>
//                 </div>

//                 <div>
//                     <div className='flex items-center justify-between mb-3 relative'>
//                         <h1 className='font-semibold'>Client-Focused</h1>
//                         <h1 className='text-5xl text-blue-200 font-semibold absolute z-[-1000] left-[-4%]'>01</h1>
//                         <img src={globe} alt="" className='w-[3rem]' />
//                     </div>
//                     <p>Tailored solutions that prioritize your unique needs.</p>
//                 </div>



//             </div> */}

//                 <div className='grid grid-cols-2 gap-10 gap-y-15 stuff'>
//                     {features.map((feature, index) => (
//                         <div key={index}>
//                             <div className='flex items-center justify-between mb-3 relative'>
//                                 <h1 className='font-semibold'>{feature.title}</h1>
//                                 <h1 className='text-5xl text-blue-200 font-semibold absolute z-[-1000] left-[-4%]'>
//                                     {feature.number}
//                                 </h1>
//                                 <img src={feature.image} alt="" className='w-[3rem]' />
//                             </div>
//                             <p>{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Welcome








// I PROBABLY NEED TO COME BACK TO THIS
// import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";
// import globe from '../../assets/globe.png'
// import quality from '../../assets/quality.png'
// import bulb from '../../assets/lightbulb.png'
// import shake from '../../assets/hand-shake.png'

// const features = [
//     {
//         title: "Holistic Expertise",
//         description: "One-stop-shop for a diverse range of engineering services.",
//         number: "01",
//         image: globe
//     },
//     {
//         title: "Quality Assurance",
//         description: "Adherence to the highest standards, ensuring reliability and excellence.",
//         number: "02",
//         image: quality
//     },
//     {
//         title: "Innovation Hub",
//         description: "Stay ahead with cutting-edge technology and sustainable practices.",
//         number: "03",
//         image: bulb
//     },
//     {
//         title: "Client-Focused",
//         description: "Tailored solutions that prioritize your unique needs.",
//         number: "04",
//         image: shake
//     }
// ];

// const Welcome = () => {
//     return (
//         <div className='py-10 px-4'>
//             <h1 className='text-xl md:text-2xl text-center mb-10'>
//                 WELCOME TO SLN ENGINEERING LIMITED
//             </h1>

//             <div className='grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-10 md:gap-15'>
//                 <div className='one'>
//                     <h3 className='text-sm md:text-base'>
//                         Welcome to SLN Engineering Limited, where innovation, expertise, and dedication converge to redefine the landscape of engineering solutions. With a steadfast commitment to excellence, we have emerged as a leading provider of comprehensive services in the fields of engineering, procurement, construction, and beyond.
//                     </h3>

//                     <p className='text-sm py-4'>
//                         At SLN, we specialize in a spectrum of services tailored to meet the diverse needs of our clients. Our core offerings encompass:
//                     </p>

//                     <ul className='mt-5 flex flex-col gap-2 text-sm md:text-base'>
//                         <li className='flex items-center gap-2'>
//                             <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
//                             Engineering Excellence
//                         </li>
//                         <li className='flex items-center gap-2'>
//                             <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
//                             Powering Tomorrow
//                         </li>
//                         <li className='flex items-center gap-2'>
//                             <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
//                             Precision Mechanical Services
//                         </li>
//                         <li className='flex items-center gap-2'>
//                             <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
//                             Automation Redefined
//                         </li>
//                         <li className='flex items-center gap-2'>
//                             <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
//                             Facility Management Mastery
//                         </li>
//                         <li className='flex items-center gap-2'>
//                             <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
//                             And many more..
//                         </li>
//                     </ul>
//                 </div>

//                 <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-15 gap-10 md:gap-15 two'>
//                     {features.map((feature, index) => (
//                         <div key={index}>
//                             <div className='flex items-center justify-between mb-3 relative flex-col-reverse gap-4'>
//                                 <h1 className='font-semibold'>{feature.title}</h1>
//                                 <h1 className='text-5xl text-blue-200 font-semibold static lg:absolute z-[-1000] left-[-4%]'>
//                                     {feature.number}
//                                 </h1>
//                                 <img src={feature.image} alt="" className='w-[3rem]' />
//                             </div>
//                             <p className='text-center'>{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Welcome;






import React, { useRef } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import globe from '../../assets/globe.png'
import quality from '../../assets/quality.png'
import bulb from '../../assets/lightbulb.png'
import shake from '../../assets/hand-shake.png'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    title: "End-to-End Engineering Expertise",
    description:
      "From system design and installation to maintenance, audits, and refurbishment, we deliver complete electrical engineering solutions under one roof.",
    number: "01",
    image: globe
  },
  {
    title: "Quality & Safety Assurance",
    description:
      "All services are executed in line with industry standards, ensuring system reliability, operational safety, and long-term performance.",
    number: "02",
    image: quality
  },
  {
    title: "Practical, Proven Solutions",
    description:
      "We apply proven technologies and engineering best practices to solve real-world power and industrial challenges efficiently.",
    number: "03",
    image: bulb
  },
  {
    title: "Client-Driven Service Delivery",
    description:
      "Every project is approached with a clear understanding of client requirements, operational needs, and performance expectations.",
    number: "04",
    image: shake
  }
];


const Welcome = () => {
  // Refs for each animated div
  const refOne = useRef(null);
  const refTwo = useRef(null);

  // Detect if in view (true/false)
  const isInViewOne = useInView(refOne, { once: false, margin: '-100px' }); // margin to trigger a bit before fully in view
  const isInViewTwo = useInView(refTwo, { once: false, margin: '-100px' });

  return (
    <div className='py-10 px-4'>
      <div className='w-full text-center mb-10 inline-flex gap-2 items-center justify-center'>
        
        <h1 className='text-xl md:text-2xl inline-block'>WELCOME TO SLN ENGINEERING LIMITED</h1>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-10 md:gap-15'>

        {/* Animate div.one from left */}
        <motion.div
          ref={refOne}
          className='one'
          initial={{ opacity: 0, x: -50 }}
          animate={isInViewOne ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className='text-sm md:text-base'>
            Welcome to SLN Engineering Limited, a trusted provider of electrical and power engineering solutions. We deliver reliable, efficient, and safety-focused services backed by technical expertise and hands-on industry experience.
          </h3>

          <p className='text-sm py-4'>
            We specialize in the design, installation, maintenance, and optimization of electrical power systems, supporting businesses with dependable solutions across operation, maintenance, and system performance.
          </p>

          <ul className='mt-5 flex flex-col gap-2 text-sm md:text-base'>
  <li className='flex items-center gap-2'>
    <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
    Electrical System Design, Installation & Commissioning
  </li>
  <li className='flex items-center gap-2'>
    <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
    Operations & Maintenance 
  </li>
  <li className='flex items-center gap-2'>
    <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
    Power Equipment Procurement & Supply
  </li>
  <li className='flex items-center gap-2'>
    <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
    Power Equipment & Industrial Control Maintenance
  </li>
  <li className='flex items-center gap-2'>
    <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
    Power System Audit, Analysis & Earthing Systems
  </li>
  <li className='flex items-center gap-2'>
    <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
    Panel Building, Repair & Refurbishment
  </li>
</ul>

        </motion.div>

        {/* Animate div.two from right */}
        <motion.div
          ref={refTwo}
          className='grid grid-cols-1 sm:grid-cols-2 gap-y-15 gap-10 md:gap-15 two'
          initial={{ opacity: 0, x: 50 }}
          animate={isInViewTwo ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {features.map((feature, index) => (
            <div key={index}>
              <div className='flex items-center justify-between mb-3 relative flex-col-reverse lg:flex-row gap-4'>
                <h1 className='font-semibold'>{feature.title}</h1>
                <h1 className='text-5xl text-blue-200 font-semibold static lg:absolute z-[-1000] left-[-4%]'>
                  {feature.number}
                </h1>
                <img src={feature.image} alt="" className='w-[3rem]' />
              </div>
              <p className='text-center'>{feature.description}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default Welcome;
