// import React from 'react'
// import { Link, NavLink } from "react-router-dom";

// const Ready = () => {
//     return (
//         <div className='ready__title py-15'>
//             <div>
//                 <h3 className='sm:text-lg md:text-3xl text-center mb-7'>Ready to work with <span>u</span><span>s</span><span>?</span></h3>

//                 <div className='flex justify-center'>
//                     <Link to={'/contact'}>
//                         <div className='bg-blue-800 text-sm text-white py-4 px-5 cursor-pointer text-center flex rounded-md'>
//                             Contact Us
//                         </div>
//                     </Link>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Ready



import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const Ready = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: '-100px 0px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='ready__title py-15'
        >
            <div>
                <h3 className='sm:text-lg md:text-3xl text-center mb-7'>
                    Ready to work with <span>u</span><span>s</span><span>?</span>
                </h3>

                <div className='flex justify-center'>
                    <Link to={'/contact'}>
                        <div className='bg-blue-800 text-sm text-white py-4 px-5 cursor-pointer text-center flex rounded-md'>
                            Contact Us
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Ready
