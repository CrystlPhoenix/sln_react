// import React from 'react'
// import home from '../../assets/home.jpg'
// import { Link } from 'react-router-dom'

// const HeroSection = () => {
//   return (
//     <section className="h-[82vh] lg:h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
    
//       style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${home})` }}>
//       <div className="max-w-3xl">
//         <p  className='text-main-blue text-xl'>Powering Reliable Electrical Solutions</p>
//         <h1 className="text-2xl md:text-5xl font-semibold leading-tight mb-6 mt-3">
//         Electrical Engineering, Power Systems, and Industrial Solutions You Can Trust
//         </h1>
//         <Link to={'services'}>
//         <button className="cursor-pointer bg-white text-main-blue px-6 py-3 text-sm font-semibold hover:bg-blue-100 transition">
//           View What We Do
//         </button>
//         </Link>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

import React from 'react'
import home from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section
      className="h-[82vh] lg:h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${home})`,
      }}
    >
      <div className="max-w-3xl">
        {/* Fade in from the spot */}
        <motion.p
          className="text-main-blue text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Powering Reliable Electrical Solutions
        </motion.p>

        <motion.h1
          className="text-2xl md:text-5xl font-semibold leading-tight mb-6 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        >
          Electrical Engineering, Power Systems, and Industrial Solutions You Can Trust
        </motion.h1>

        {/* Fade in from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link to={'services'}>
            <button className="cursor-pointer bg-white text-main-blue px-6 py-3 text-sm font-semibold hover:bg-blue-100 transition">
              View What We Do
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

































































// import React from 'react'
// import home from '../../assets/home.jpg'
// import { Link } from 'react-router-dom'

// const HeroSection = () => {
//   return (
//     <section
//       className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${home})`,
//       }}
//     >
//       <div className="max-w-3xl px-2 sm:px-4">
//         <p className="text-blue-600 text-base sm:text-xl">Powering Reliable Electrical Solutions</p>
//         <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight mb-6 mt-3">
//           Electrical Engineering, Power Systems, and Industrial Solutions You Can Trust
//         </h1>
//         <Link to={'/services'}>
//           <button className="cursor-pointer bg-white text-blue-600 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold hover:bg-blue-100 transition">
//             View What We Do
//           </button>
//         </Link>
//       </div>
//     </section>
//   )
// }

// export default HeroSection
