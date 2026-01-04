import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const DiscoverSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px 0px' })

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full py-16 px-4 text-center"
        >
            <h2 className="text-2xl md:text-4xl mb-4">
                Discover the difference with <span className="animated-letter">S</span>
                <span className="animated-letter">L</span>
                <span className="animated-letter">N</span>

            </h2>
            <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                Contact us today to embark on a journey of engineering <br /> excellence and innovation.
            </p>
            <Link to="/contact">
                <div className="bg-blue-800 text-white text-sm py-3 px-6 rounded-md inline-flex hover:bg-blue-700 transition-all duration-300">
                    Contact Us
                </div>
            </Link>
        </motion.section>
    )
}

export default DiscoverSection
