// import React, { useEffect, useState } from 'react';
// import whatsapp from '../assets/whatsapp.png';
// import { FaArrowUpLong } from "react-icons/fa6";

// const FixedButtons = () => {
//   const [showButtons, setShowButtons] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowButtons(window.scrollY > window.innerHeight);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   if (!showButtons) return null;

//   return (
//     <div className="flex flex-col gap-4 fixed bottom-[2%] right-[1.5%] z-40">
//       <img src={whatsapp} alt="whatsapp image" className="w-[3rem]" />
//       <div className="h-[3rem] w-[3rem] bg-black text-white flex items-center justify-center rounded-full cursor-pointer">
//         <FaArrowUpLong />
//       </div>
//     </div>
//   );
// };

// export default FixedButtons;


import React, { useEffect, useState } from 'react';
import whatsapp from '../assets/whatsapp.png';
import { FaArrowUpLong } from "react-icons/fa6";

const FixedButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButtons) return null;

  return (
    <div className="flex flex-col gap-4 fixed bottom-[2%] right-[1.5%] z-40">
      <a
        href="https://wa.me/2349153864376"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsapp}
          alt="whatsapp"
          className="w-[3rem] transition-transform duration-300 hover:scale-110"
        />
      </a>
      <div
        className="h-[3rem] w-[3rem] bg-black text-white flex items-center justify-center rounded-full cursor-pointer
                   hover:bg-blue-700 transition-all duration-300"
        onClick={scrollToTop}
      >
        <FaArrowUpLong />
      </div>
    </div>
  );
};

export default FixedButtons;
