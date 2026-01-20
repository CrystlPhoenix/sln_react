// import React from 'react'
// import { IoMailOutline } from "react-icons/io5";
// import { MdOutlineLocalPhone } from "react-icons/md";
// import { GrLocation } from "react-icons/gr";
// import { FaRegClock } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

// const ContactText = () => {
//   return (
//     <div>
//         <h1 className='text-xl mb-10 font-semibold'>Contact Text</h1>

//         <div className='w-full grid grid-cols-2 gap-10'>
//             <div className='hover:text-white hover:bg-blue-800 flex items-center justify-center flex-col gap-3 text-center py-7 px-3 border border-gray-300'>
//             <GrLocation size={50}/>
//             <p className='text-xl font-semibold'>Our Location</p>
//             <p className='text-sm'>Suite 5, Amethyst Block, All Seasons Plaza, 24 Lateef Jakande Road, Agidingbi, Ikeja, Lagos</p>
//             </div>

//             <div className='hover:text-white hover:bg-blue-800 flex items-center justify-center flex-col gap-3 text-center py-7 px-3 border border-gray-300'>
//             <MdOutlineLocalPhone size={50}/>
//             <p className='text-xl font-semibold'>Call Us</p>
//             <p>09153864376</p>
//             </div>

//             <div className='hover:text-white hover:bg-blue-800 flex items-center justify-center flex-col gap-3 text-center py-7 px-3 border border-gray-300'>
//             <IoMailOutline size={50} />
//             <p className='text-xl font-semibold'>Email Us</p>
//             <p>customercare@slneng.com</p>
//             </div>

//             <div className='hover:text-white hover:bg-blue-800 flex items-center justify-center flex-col gap-3 text-center py-7 px-3 border border-gray-300'>
//             <FaRegClock size={50}/>
//             <p className='text-xl font-semibold'>Business Hours</p>
//             <p>Mon-Fri: 09.00am to 5.00pm</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ContactText

import React from 'react';
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";

const contactItems = [
  {
    icon: <GrLocation size={50} />,
    title: 'Our Location',
    description: 'Suite 5, Amethyst Block, All Seasons Plaza, 24 Lateef Jakande Road, Agidingbi, Ikeja, Lagos'
  },
  {
    icon: <MdOutlineLocalPhone size={50} />,
    title: 'Call Us',
    description: '+2349153864376'
  },
  {
    icon: <IoMailOutline size={50} />,
    title: 'Email Us',
    description: 'customercare@slneng.com'
  },
  {
    icon: <FaRegClock size={50} />,
    title: 'Business Hours',
    description: 'Mon-Fri: 09.00am to 5.00pm'
  }
];

const ContactText = () => {
  return (
    <div className="relative">
      <div className="mb-10 inline-flex gap-2 items-center">
        <h1 className='text-xl font-semibold inline-block bg-white'>Get In Touch</h1>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-10'>
        {contactItems.map((item, index) => (
          <div
            key={index}
            className='hover:text-white hover:bg-blue-800 transition-all duration-300 ease-in-out flex items-center justify-center flex-col gap-3 text-center py-7 px-3 border border-gray-300'
          >
            {item.icon}
            <p className='text-lg lg:text-xl font-semibold'>{item.title}</p>
            <p className='text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactText;
