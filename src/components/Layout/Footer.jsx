"use client";
import { useState } from 'react';
import Link from 'next/link';
const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <footer className=" py-8 text-gray-700 font-brandon">
        <div className='flex justify-center'>
                <p className="text-[32px] text-[#718096] font-black py-[24px]">PRESS MENTIONS</p>
        </div>
        <div className='flex max-w-[1200px] mx-auto justify-between pb-[60px] flex-col items-center lg:flex-row lg:items-start '>
            <img src='/Assets/footer/CNA.webp' alt="Logo" className= "pt-[32px] " />
            <img src='/Assets/footer/Mediacorp.webp' alt="Logo" className="pt-[32px] " />
            <img src='/Assets/footer/scmp.webp' alt="Logo" className="pt-[32px] " />
            <img src='/Assets/footer/BT.webp' alt="Logo" className=" pt-[32px]" />
        </div>
       
                
        <div className='bg-gray-100'>
      <div className="container max-w-[1200px] mx-auto px-4 ">
        <div className=' flex flex-col justify-center'>
      <div className=" flex  flex-col items-center">
      <span className="text-black gradient-text mt-[48px] text-[32px] font-bold font-dj ">
          To know one life has breathed easier because you lived.
        </span>
            <p className="text-[17px] font-bold font-poppins"><span className=' font-normal'>— </span> Bessie A. Stanley <span className=' font-normal'> — </span></p>
          </div>
        <div className="flex lg:flex-row flex-col  justify-between  mb-4 py-[72px]">
          <div className="mb-4">
          <Link href="/" >
          <img src='/Assets/header/jack-logo.png' alt="Logo" className=" mr-4" />
          </Link>
          </div> 
          <div className='flex gap-20 lg:flex-row flex-col'>
            <div className='flex flex-col'>
                <div className="mb-4 ">
                    <p className="text-[20px] font-black">LET'S CHAT</p>
                        <div className='py-[15px]'>
                                <p className="text-[15px] poppins mb-2"><a href="#" className="text-[14px] text-[#123774] underline hover:text-[#ffffff] hover:bg-[#123774]">Whatsapp</a></p>
                                <p className="text-[15px] poppins mb-2"><a href="#" className="text-[#123774] underline hover:text-[#ffffff] hover:bg-[#123774]">Contact Form</a></p>
                                <p className="text-[15px] poppins mb-2">+65 9337 8483</p>
                                <p className="text-[15px] poppins mb-2">jack.sheo@gmail.com</p>
                        </div>
                </div>
                <div className="mb-4 ">
                   <p className="text-[20px] font-black ">EXPLORE</p>
                    <ul className="list-none py-[15px]">
                        <li className="text-[15px] poppins mb-2"><a href="#" className="text-[#123774] underline  hover:text-[#ffffff] hover:bg-[#123774]">Blog</a></li>
                        <li className="text-[15px] poppins mb-2"><a href="#" className="text-[#123774] underline hover:text-[#ffffff] hover:bg-[#123774]">About</a></li>
                        <li className="text-[15px] poppins mb-2"><a href="#" className="text-[#123774] underline  hover:text-[#ffffff] hover:bg-[#123774]">Testimonials</a></li>
                        <li className="text-[15px] poppins mb-2"><a href="#" className="text-[#123774] underline  hover:text-[#ffffff] hover:bg-[#123774]">Transactions</a></li>
                        <li className="text-[15px] poppins mb-2"><a href="#" className="text-[#123774] underline  hover:text-[#ffffff] hover:bg-[#123774]">Real Estate Career</a></li>
                    </ul>
          </div>
          
            </div>
            <div className='flex flex-col'>
            <div className="mb-4 ">
            <p className="text-[20px] font-black">STORY-LETTERS</p>
            <div className='pt-[15px]'>
            <p className="text-[15px] poppins mb-2">Can you resist a good real <br></br>estate story?</p>
            <p className="text-[15px] poppins mb-2">No spam. I promise.</p>
            <p className="text-[15px] poppins  ">Your good name & best email?</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <div className="mb-4 ">
              <input
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md"
                placeholder="Your name "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4 ">
              <input
                type="email"
                className="border border-gray-300 px-3 py-2 rounded-md"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-[#123774] ml-auto hover:bg-black  text-white text-[16px] font-bold h-[52px] w-[150px]  focus:outline-none focus:shadow-outline"
            >
              SUBSCRIBE
            </button>
          </form>
            </div>
          </div>      
        </div>
      </div>
      </div>  
      </div>
      <div className="flex justify-center my-4 mx-auto text-center">
            <p className="text-sm">© 2024 Jack Sheo, CEA Reg No. R012421H. All Rights Reserved. Powered By <a href="#" className="font-bold text-[#123774]">ROCKET 🚀</a></p>
          </div>
    </footer>
  );
};

export default Footer;