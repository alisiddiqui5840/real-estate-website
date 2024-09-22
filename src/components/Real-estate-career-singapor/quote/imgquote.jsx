import React from 'react';

const ImgQuote = () => {
  return (
    <div className="container max-w-[1300px] mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
        <div className="text-center md:col-span-6">
          <img
            src='/Assets/SingaporeRealEsate/taking-flight.webp'
            alt="Jack Sheo"
          />
        </div>
        <div className='md:col-span-6 my-auto'>
          <p className="text-[48px]  text-center mx-auto mb-[32px]">
          Sometimes the smallest step
in the right direction
ends up being the biggest
step of your life.
          </p>
          <p className="text-[48px] mb-[32px] mx-auto max-w-[495px] text-center">
          Tip top if you must,
          <span className='text-[#ffad27]'> but take the step. </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImgQuote;