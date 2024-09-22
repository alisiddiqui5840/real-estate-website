import React from 'react';

const Response = () => {
  return (
    <>
    <div className='bg-[#f7f7f7]'>
    <div className="container max-w-[1300px] mx-auto px-[24px] py-8">
          
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
      <div className="text-center md:col-span-4 justify-center items-center flex">
        <img
            className='w-[390px] h-[390px]'
            src='/Assets/contact/contact-Jack-.webp'
            alt="Jack Sheo"
            
          />
        </div>
        <div className='md:col-span-4'>
          <p className="text-[16px] text-[#123774] font-semibold  font-poppins  mb-[32px] ">MY RESPONSES</p>
          <p className="text-[17px]   font-poppins  mb-[32px] ">I aim to respond within 24 hours.</p>
          <p className="text-[17px] max-w-[350px] font-poppins  mb-[32px] ">It may be due to a technical issue if you haven’t received a response within 72 hours. In such cases, please use any of the alternative modes of contact provided on this page.</p>
          <p className="text-[17px] max-w-[350px] font-poppins  mb-[32px] ">Please understand that I may be unable to answer calls during client meetings or property viewings. Rest assured, I’ll return any missed calls as soon as possible.</p>
          <p className="text-[17px] max-w-[350px] font-poppins  mb-[32px] ">I’m looking forward to connecting with you soon!</p>
        </div>
        <div className="text-center md:col-span-4 justify-center items-center flex">
        <div className="max-w-md  bg-white p-[40px] rounded-lg shadow-md">
      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Name 名字"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Mobile 手机号"
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Email 电邮"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Subject 标题"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Your situation & questions? 你的疑问?"
            rows="4"
          ></textarea>
        </div>
        <div className='flex  mb-[40px]'>
        <button
              className="bg-[#123774] ml-auto hover:bg-black  text-white text-[16px] font-bold h-[52px] w-[181px]  focus:outline-none focus:shadow-outline"
            >
           SEND A MESSAGE
            </button>
            </div>
      </form>
    </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
    };

export default Response;