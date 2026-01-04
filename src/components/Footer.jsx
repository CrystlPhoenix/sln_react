
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_color.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function Footer() {

  return (
    <section className='w-full bg-gray-200'>
      {/* <nav className="max-w-full mx-auto flex items-center justify-between px-[10%] py-10"> */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-[5%] lg:px-[10%] py-8 pt-10 flex flex-col lg:flex-row items-center justify-between gap-y-7 lg:gap-y-0">
        <div className='flex flex-col lg:flex-row items-center gap-5'>
          <img src={logo} className='w-[5rem]' alt="footer_logo" />
          <div className='flex items-center lg:items-start gap-5 flex-col'>
            <h1 className='font-semibold'>Quick Links</h1>
            <div className='flex flex-col lg:flex-row items-center gap-5 text-sm'>
              <Link to={'/about'} className='hover:text-blue-700'>
              <p>About</p>
              </Link>
              <Link to={'/services'} className='hover:text-blue-700'>
              <p>What We Do</p>
              </Link>
            </div>
          </div>
        </div>


        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold'>Connect with Us</h1>
          <div className='flex items-center gap-3 cursor-pointer'>
          <a
    href="https://www.instagram.com/s.l.negineering_ltd?igsh=NmUxbjZtdm0zMWN4"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="SLN Engineering on Instagram"
  >
    <FaInstagram />
  </a>
  <a href="mailto:customercare@slneng.com" target="_blank" rel="noopener noreferrer">
  <IoIosMail />
</a>
  <a
    href="https://www.linkedin.com/in/s-l-n-engineering-lagos-nigeria-a25826300/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="SLN Engineering on Linkedin"
  >
    <FaLinkedinIn />
  </a>
          <FaXTwitter /><FaFacebookF />
          </div>
        </div>
      </div>

      <div className='text-center text-sm text-gray-600 border-t border-gray-300 py-5'>
        <p>© 2025 slneng.com. All Rights Reserved</p>
      </div>
    </section>
  );
}
