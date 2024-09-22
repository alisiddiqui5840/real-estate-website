"use client";
import { useRef } from 'react';

const MapSection = () => {

  const bottomRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
    return (
      <div className="container max-w-[1200px] mx-auto px-4 py-8">
        <div className="text-[17px] font-poppins text-gray-[#1a202c] mb-[32px] max-w-[730px] mx-auto">
        The photos at the  
        <a 
          href="#"
          onClick={scrollToTop}
          className="px-1 underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]"
        > 
          top 
        </a> 
         and  
        <a 
          href="#"
          onClick={scrollToBottom}
          className=" px-1 underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]"
        > 
          bottom
        </a> 
         of this page showcase some of the properties I’ve successfully transacted over the years.
      </div>
        <div className="text-[17px] font-poppins text-gray-[#1a202c] mb-[32px] max-w-[730px] mx-auto">
          The map below shows all the locations I’ve transacted (updated periodically). All my residential property transactions are marked, with <span className="text-[#b03059] font-bold">RED</span> icons representing HDB flats and <span className="text-[#6041b2] font-bold">PURPLE</span> icons representing private residential properties, including both landed houses and condominiums.
        </div>
        <div className="text-[17px] font-poppins text-gray-[#1a202c] mb-[32px] max-w-[730px] mx-auto">
          You can zoom in and click on any icon to show the condo’s name or address.
        </div>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6146454771413!2d106.66017231526005!3d10.762622592333313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1eb6b9c131%3A0x523dc7d6f7b7b50e!2sSaigon%20Notre-Dame%20Basilica!5e0!3m2!1sen!2s!4v1629404935260!5m2!1sen!2s" 
            width="100%"
            height="480"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className='text-left max-w-[730px] mx-auto'>
          <p className="text-[20px] font-bold text-[#123774] pt-[48px] mb-[32px]">
          A QUESTION OF EXPERIENCE
          </p>
          <p className="text-[17px] mb-[32px]">
          Prospective sellers/landlords sometimes ask if I’ve transacted in specific condos. While prior experience in a particular development can be helpful, it shouldn’t be the most important factor when choosing an agent.
          </p>
          <p className="text-[17px] mb-[32px]">
          Every property agent starts their career with zero transaction experience. If I had let that hold me back, I wouldn’t have been able to grow and help the countless <a href="/testimonials" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">clients I’ve served </a> over the years.
          </p>
          <p className="text-[17px] mb-[32px]">
          Instead, I’ve focused on building my knowledge and skills to provide my expertise to my clients, regardless of the property’s location.
          </p>
          <p className="text-[17px] mb-[32px]">
          The most crucial factor in a successful client-agent relationship is the <span className=' font-bold'>chemistry between the two parties </span> and the  <span className=' font-bold'>alignment of their views </span> on the client’s situation and the property market.
          </p>
          <p className="text-[17px] mb-[32px]">
          When you work with an agent who understands your needs, communicates effectively, and provides sound advice, you’ll be well-equipped to make informed decisions and achieve your real estate goals.
          </p>
          <p className="text-[17px] mb-[32px]">
          So, while I take pride in the diverse range of properties and districts I’ve transacted in, I don’t believe that prior experience in a specific condo should be the deciding factor.
          </p>
          </div>
      </div>
    );
  };
  
  export default MapSection;
  