// import React from 'react'
// import ContactText from '../../components/ContactPage/ContactText'
// import ContactForm from '../../components/ContactPage/ContactForm'
// import LocationMap from '../../components/LocationMap'
// import SEO from '../../components/Seo';

// const Contact = () => {
//   return (
//     <div>
//       <SEO
//         title="Contact - S.L.N Engineering Limited"
//         canonical="https://slneng.com/contact"
//       />

//       <div className='grid grid-cols-1 lg:grid-cols-2 gap-[3rem] py-15'>
//       <ContactForm/>
//       <ContactText/>
//     </div>

//     <LocationMap/>
//     </div>
//   )
// }

// export default Contact

import React from 'react'
import { motion } from 'framer-motion'
import ContactText from '../../components/ContactPage/ContactText'
import ContactForm from '../../components/ContactPage/ContactForm'
import LocationMap from '../../components/LocationMap'
import SEO from '../../components/Seo'

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact - S.L.N Engineering Limited"
        canonical="https://slneng.com/contact"
      />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[3rem] py-15 px-4'>

        {/* Animate Contact Form from the Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeIn' }}
        >
          <ContactForm />
        </motion.div>

        {/* Animate Contact Text from the Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeIn' }}
        >
          <ContactText />
        </motion.div>

      </div>

      <LocationMap />
    </div>
  )
}

export default Contact
