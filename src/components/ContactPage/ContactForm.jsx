// import React from 'react'

// const ContactForm = () => {
//   return (
//     <div>
//         <h1 className='text-xl mb-10 font-semibold'>Contact Us</h1>

//         <form action="" className='flex flex-col gap-4'>
//             <div className='w-full flex flex-col gap-2 '>
//                 <label htmlFor="">Name:</label>
//                 <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300"  />
//             </div>

//             <div className='w-full flex flex-col gap-2'>
//                 <label htmlFor="">Email:</label>
//                 <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300" />
//             </div>

//             <div className='w-full flex flex-col gap-2'>
//                 <label htmlFor="">Subject:</label>
//                 <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300" />
//             </div>

//             <div className='w-full flex flex-col gap-2'>
//                 <label htmlFor="">Message:</label>
//                 <textarea name="" id="" cols="30" rows="5" className="resize-none text-black px-5 py-3 outline-none border border-gray-300"></textarea>
//             </div>

//             <div>
//             <button type='submit' className='bg-blue-800 py-4 px-6 text-white cursor-pointer'>Send Message</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default ContactForm

// import React from 'react';

// const ContactForm = () => {
//   return (
//     <div className="relative">
//       {/* <div className="relative mb-10">
//         <h1 className='text-xl font-semibold relative z-10 inline-block bg-white'>Contact Us</h1>
//       </div> */}
//       <div className="mb-10 inline-flex gap-2 items-center">
//         <h1 className='text-xl font-semibold inline-block bg-white'>Contact Us</h1>
//         <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
//       </div>

//       <form action="" className='flex flex-col gap-4'>
//         <div className='w-full flex flex-col gap-2'>
//           <label htmlFor="">Name:</label>
//           <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300" />
//         </div>

//         <div className='w-full flex flex-col gap-2'>
//           <label htmlFor="">Email:</label>
//           <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300" />
//         </div>

//         <div className='w-full flex flex-col gap-2'>
//           <label htmlFor="">Subject:</label>
//           <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300" />
//         </div>

//         <div className='w-full flex flex-col gap-2'>
//           <label htmlFor="">Message:</label>
//           <textarea cols="30" rows="5" className="resize-none text-black px-5 py-3 outline-none border border-gray-300"></textarea>
//         </div>

//         <div>
//           <button type='submit' className='bg-blue-800 py-4 px-6 text-white cursor-pointer hover:bg-blue-700 transition-all duration-300 ease-in-out'>
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com'
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,     // Replace with your actual Service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,    // Replace with your actual Template ID
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY      // Replace with your actual Public Key
    )
    .then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. I'll get back to you soon.",
          confirmButtonColor: "#3085d6"
        });
         // Optional: clear form after send
      },
      (error) => {
        console.error(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#d33"
        });
      }
    )
    .finally(() => {
      setLoading(false);
      e.target.reset();
    });
  };

  return (
    <div className="relative">
      <div className="mb-10 inline-flex gap-2 items-center">
        <h1 className='text-xl font-semibold inline-block bg-white'>Contact Us</h1>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
      </div>

      <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
        <div className='w-full flex flex-col gap-2'>
          <label>Name:</label>
          <input type="text" name="name" required className="text-black px-5 py-2 outline-none border border-gray-300" />
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label>Email:</label>
          <input type="email" name="email" required className="text-black px-5 py-2 outline-none border border-gray-300" />
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label>Subject:</label>
          <input type="text" name="title" required className="text-black px-5 py-2 outline-none border border-gray-300" />
        </div>

        <div className='w-full flex flex-col gap-2'>
          <label>Message:</label>
          <textarea name="message" required rows="5" className="resize-none text-black px-5 py-3 outline-none border border-gray-300"></textarea>
        </div>

        <div>
          <button type='submit' className='bg-blue-800 py-4 px-6 text-white cursor-pointer hover:bg-blue-700 transition-all duration-300 ease-in-out'>
          {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

