"use client";
import Link from 'next/link';
import { Menu } from '@headlessui/react'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
const PromoComponent = () => {
  return (
    <>
    <div className="p-[32px] max-w-[800px] mx-auto bg-[#eee] ">
        <Link href="/event" >
        <p className='text-[15px] font-poppins text-[#123774] font-bold cursor-pointer'>« All Events</p>
        </Link>
      <h1 className="text-[25px] font-brandon font-black mb-4">I can fly with PropNex 2024</h1>
      <p className=" text-[21px] font-brandon mb-8">January 11 – December 12</p>
      <img 
                className='mx-auto '
                src='/Assets/DoSingapore/air-tickets-prizes.webp'
                alt="thankyou"
                
            />

      <p className="text-lg text-center font-poppins text-[15px] mb-[17px]">10 tickets to be won monthly!</p>
      <p className="text-[17px] font-poppins mb-[32px]">
      Lo and Behold! 
      </p>
      <p className="text-[17px] font-poppins mb-[32px]">
        PropNex Friends are in for a ride in 2024! And we mean it when we say “ride” because PropNex is giving 100 air tickets to lucky friends at our events from March 2024 to December 2024!
      </p>
      <p className=" text-[17px] font-poppins mb-[32px]">
        You can stand a chance to win air tickets to Osaka, Seoul, Tokyo, Melbourne and even Paris at Zero registration cost below. What are the odds? Test your luck by participating now!
      </p>
      <Link href="https://icanfly.propnex.com/" target='blank'>
        <div className='flex  justify-center'>
      <button className="bg-[#123774] hover:bg-black text-white text-[16px]  font-bold h-[52px] w-[181px] focus:outline-none focus:shadow-outline">
      LET’S FLY!
                        </button>
                        </div>
      </Link>

      <p className="mt-[16px] mb-[32px] text-[17px] font-poppins">
        P.S Mega boost your chance to win the air tickets by taking part in any financial literacy courses held by PropNex!
      </p>
      <p className=" text-[17px] font-poppins mb-[32px]"><span className=" font-bold mr-2 ">Free</span> FREE TO JOIN!</p>
      <div className='flex '>
    <Menu as="div" className="relative inline-block  ">
      <Menu.Button className="inline-flex justify-center w-full rounded-md border border-[#123774] shadow-sm px-4 py-2 bg-white text-[14px] font-medium text-[#123774] hover:bg-[#123774] hover:text-white focus:outline-none ">
        Add to calendar
        <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </Menu.Button>
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="">
          {['Google Calendar', 'iCalendar', 'Outlook 365', 'Outlook Live'].map((item, idx) => (
            <Menu.Item key={idx}>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } block px-4 py-2 text-sm`}
                >
                  {item}
                </a>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
    </div>
    <div className=" mt-[32px] ">
      <div className="bg-gray-200 p-6 shadow-md ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-[18px] font-poppins font-bold mb-2">Details</h2>
            <p>
              <span className="font-bold text-[16px] font-poppins mb-[16px]">Start:</span> 
            </p>
            <p className="text-[16px] font-poppins mb-[8px]">January 11</p>
            <p>
              <span className="font-bold text-[16px] font-poppins mb-[16px]">End:</span> 
            </p>
            <p className="text-[16px] font-poppins mb-[8px]">December 12</p>
            <p>
              <span className="font-bold text-[16px] font-poppins mb-[16px]">Cost:</span> 
            </p>
            <p className="text-[16px] font-poppins mb-[8px]">Free</p>
            <p>
              <span className="font-bold text-[16px] font-poppins mb-[16px]">Event Category:</span> 
            </p>
            <Link href='/event'>
            <p className="text-[16px] font-poppins mb-[8px] cursor-pointer hover:text-black text-[#123774]">Lucky Draw</p>
            </Link>
            <p>
              <span className="font-bold text-[16px] font-poppins mb-[16px]">Website:</span> <a href="https://icanfly.propnex.com/register" target='blank' className="hover:text-black text-[#123774]">https://icanfly.propnex.com/register</a>
            </p>
          </div>
          <div>
            <h2 className="text-[18px] font-poppins font-bold mb-2">Organiser</h2>
            <p className="text-[16px] font-poppins mb-[8px]">PropNex Singapore</p>
            <p>
              <span className="font-bold">Phone:</span> 
            </p>
            <p className="text-[16px] font-poppins mb-[8px]">93378483</p>
            <p>
              <span className="font-bold">Email:</span> 
            </p>
            <p className="text-[16px] font-poppins mb-[8px]">jack.sheo@gmail.com</p>
            <p>
              <span className="font-bold">Website:</span> 
            </p>
            <a href="https://www.propnex.com/"  className="hover:text-black text-[#123774]">View Organiser Website</a>
          </div>
        </div>
      </div>
      <div className='border-b-2    pb-4  mx-auto'></div>

      <div className="">
        <p className="font-bold text-[16px] font-brandon mt-[32px]">PropNex Singapore</p>
        <p className="text-[16px] font-poppins my-[8px]">93378483</p>
        <p>
          <a href="https://www.propnex.com/" className="hover:text-black text-[#123774] ">View Organiser Website</a>
        </p>
          <p  className="text-[16px] font-poppins my-[8px]">jack.sheo@gmail.com</p>
      </div>
    </div>
    <div className="max-w-[600px] mt-[32px]">
      <div className="bg-white p-6 shadow-md  flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <h2 className="text-[14px] font-brandon font-black mb-2">PropNex Singapore</h2>
          <p className="text-[14px] font-poppins mb-2">480 Lorong 6 Toa Payoh #18-01 Other</p>
          <p className="text-[14px] font-poppins mb-2">310480</p>
          <p className="text-[14px] font-poppins mb-2">Singapore</p>
          <p className="text-blue-600 mb-2">
            <a href="https://www.google.com/maps?f=q&source=s_q&hl=en&geocode&q=480+Lorong+6+Toa+Payoh+%2318-01+Other+310480+Singapore" className="text-[14px] text-[#123774] font-poppins mb-2" target="_blank" rel="noopener noreferrer">+ Google Map</a>
          </p>
          <p className="text-[14px] font-poppins mb-2">93378483</p>
        </div>
        <div className="md:w-1/2">
          <iframe
            className="w-full h-48"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.4386209171473!2d100.53615101531887!3d13.762902690358305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ec60b5d7b6f%3A0xb7c1e4453e9de842!2sPropNex%20Realty%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1623762396000!5m2!1sen!2ssg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
    </div>
    <div className='border-b-2      mx-auto'></div>
    <div className="text-right mt-6">
        <a href="#" className='text-[15px] font-poppins text-[#123774] font-bold cursor-pointer'>PWS Masterclass 2024 »</a>
      </div>
    </div>
 
   </>
  );
};

export default PromoComponent;
