"use client";
import { useState } from 'react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import Monopoly from '../../../public/Assets/events/monopoly.webp';
import ICanFly from '../../../public/Assets/events/i-can-fly.webp';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { Menu } from '@headlessui/react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [startDate, setStartDate] = useState(new Date());


  const handleSubmit = () => {
    console.log('Search');
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="flex border border-gray-300 p-2">
            <input
              type="text"
              placeholder="Search for events"
              className="w-4/6 mr-2 "
            />
            <button
              type="submit"
              className=" ml-4 mr-2 px-3 py-3 text-[14px] bg-[#123774] hover:bg-black text-white rounded-md"
            >
              Find Events
            </button>
            <button
              type="submit"
              className=" ml-4  py-3 text-[14px] px-2 hover:bg-gray-300 hidden lg:block font-semibold border-b-2 border-black text-black "
            >
             List
            </button>
            <button
              type="submit"
              className=" ml-4  py-3 text-[14px] px-2 hover:bg-gray-300 hidden lg:block   text-black "
            >
             Month
            </button>
            <button
              type="submit"
              className=" ml-4  py-3 text-[14px] px-2  hover:bg-gray-300 hidden lg:block   text-black "
            >
             Day
            </button>
          </div>
        </form>
        </div>
        
        {showDropdown && (
          
          <div className="mb-6 relative max-w-[400px]">
            <div className="p-4 rounded-md absolute right-0 mt-[30px]">
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />
            </div>
          </div>
        )}
         <div className="flex  items-center  mb-6">
         
         <img
          src='/Assets/leftarrow.svg'
          alt="dropdown icon"
          className='ml-2 w-4 h-4 hidden lg:block cursor-pointer transition-transform duration-10'
        /> 
         <img
          src='/Assets/rightarrow.svg'
          alt="dropdown icon"
          className='ml-2 w-4 h-4 font-bold  text-[#123774] hidden lg:block transition-transform duration-10'
        />  
        <p className="text-gray-500 text-[12px] border p-2 rounded-md mx-3 hidden lg:block">Today</p>
        <h1 className="text-3xl ">Upcoming
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 bg-blue-500 text-[18px] text-black rounded-md"
          >
            {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </h1>
        </div>
        <div className="flex items-center my-8">
      <span className="text-black text-[16px] font-poppins mr-4">June 2024</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 flex-col lg:flex-row">
              <div className="flex space-x-6">
                <div className="text-center">
                  <p className="text-gray-500 text-[11px]">MON</p>
                  <span className="font-bold text-[24px]">10</span>
                </div>
                <div>
                  <p className="text-gray-500 text-[14px] pb-[8px]">January 11 - December 12</p>
            <Link href="/i-can-fly-with-propnex" >
                  <h2 className="font-black text-[24px] pb-[8px] hover:underline ">I can fly with PropNex 2024</h2>
       </Link>
                  <p className="text-black text-[14px] pb-[8px]"><span className='font-semibold'>PropNex Singapore</span> 480 Lorong 6 Toa Payoh #18-01, Other, Singapore</p>
                  <p className="mt-2  max-w-[650px] text-[14px] pb-[8px]">
                    PropNex Friends are in for a ride in 2024! And we mean it when we say "ride" because PropNex is giving 100 air tickets to lucky friends at our events from March 2024 to December 2024!
                  </p>
                  <span className="text-[#2D3748] text-xs ">Free</span>
                </div>
              </div>
              <div className="relative w-80 h-[240px] ml-4 flex-col lg:flex-row">
              <Link href="/i-can-fly-with-propnex" >
                <Image
                  src={ICanFly}
                  alt="I can fly with PropNex 2024"
                  fill
                  className="object-contain"
                />
       </Link>
              </div>
          </div>
          <div className="flex items-center justify-between p-4 flex-col lg:flex-row">
            <div className="flex space-x-6">
              <div className="text-center">
                <p className="text-gray-500 text-[11px]">MON</p>
                <span className="font-bold text-[24px]">10</span>
              </div>
              <div>
                <p className="text-gray-500 text-[14px] pb-[8px]">May 25 @ 10:00 am - September 22 @ 5:00 pm</p>
            <Link href="/i-can-fly-with-propnex" >
                <h2 className="font-black text-[24px] pb-[8px] hover:underline">PropNex Monopoly Championship 2024</h2>
       </Link>
                <p className="text-black text-[14px] pb-[8px]">NTUC Alumni Club Level 3 11 Slim Barracks Rise, Singapore, NA, Singapore</p>
                <p className="mt-2  max-w-[650px] text-[14px] pb-[8px]">
                Roll the dice and have a chance to win prizes worth up to $180,000 in our 2024 Monopoly Championship!
                </p>
                <span className="text-[#2D3748] text-xs ">$10</span>
              </div>
            </div>
            <div className="relative w-80 h-[240px] ml-4 flex-col lg:flex-row">
            <Link href="/i-can-fly-with-propnex" >
              <Image
                src={Monopoly}
                alt="Monoply"
                fill
                className="object-contain"
              />
       </Link>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-gray-300 py-4">
      <button  type="submit" className="flex items-center text-gray-600 hover:text-gray-800">
        <ChevronLeftIcon className="h-5 w-5 mr-1" />
        Previous Events
      </button>
      <button className="flex items-center pointer-events-none text-gray-400 hover:text-gray-800">
        Next Events
        <ChevronRightIcon className="h-5 w-5 ml-1" />
      </button>
      </div>
      <div className='flex justify-end'>
      <Menu as="div" className="relative inline-block  ">
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-[#123774] shadow-sm px-4 py-4 bg-white text-[14px] font-medium text-[#123774] hover:bg-[#123774] hover:text-white focus:outline-none ">
          Subscribe to calendar
          <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            {['Google Calendar', 'iCalendar', 'Outlook 365', 'Outlook Live', 'Export .ics file', 'Export Outlook .ics file'].map((item, idx) => (
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
        </div>
      </div>
    </div>
  );
}
