import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import panels from "../assets/panels.jpg"; // adjust path if needed
import panels from '../../assets/panelss.webp'

export default function WhyChooseUs() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-10rem py-10'>
      <motion.img
        src={panels}
        alt="about image"
        className='w-full lg:w-[35vw]'
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        viewport={{ once: true }}
        loading="lazy"
      />

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <div className='inline-flex gap-2 items-center'>
          <h1 className='text-lg font-semibold inline-block'>Why Choose Us</h1>
          <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
        </div>

        <div className='mt-5'>
          <p>
            Choosing the right partner for your engineering needs is pivotal. At SLN, we stand as the premier choice for comprehensive engineering solutions. Here's why discerning clients trust us:
          </p>

          <ul className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:gap-8'>
            {[
              "Comprehensive Expertise",
              "Innovation at the Core",
              "Seasoned Professionals",
              "Reliability and Timeliness",
              "Unparalleled Quality",
              "Client-Centric Approach",
              "Sustainability Focus",
              "End-to-End Solutions",
            ].map((item, idx) => (
              <li key={idx} className='flex items-center gap-2 text-sm'>
                <FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5 h-5' />
                {item}
              </li>
            ))}
          </ul>

          <Link to={'/services'}>
            <button className='bg-blue-800 px-4 py-5 text-white text-sm mt-8 cursor-pointer'>
              SEE What We Do
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
