import React from 'react';

const QuoteTenant = () => {
  return (
    <>
    <div className="container max-w-[1170px] mx-auto px-4  py-[104px]  pt-[104px]">
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
        <div><svg className=' md:col-span-1 w-[30px] h-[22px] text-[#d3d3d3]' viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 0v6l3-3v-3h-3zm5 0v6l3-3v-3h-3z" transform="translate(0 1)"></path></svg></div>
        <div className='md:col-span-6'>
        <p className="text-[#1a202c] leading-[1.3]  font-semibold text-[32px] pb-[40px] max-w-[550px]">
        Jack is someone who is <span className='text-[#ffad27]'> professional</span> and<span className='text-[#ffad27]'> very efficient</span> in his real estate work.
            </p>
            <p className="text-[#1a202c] leading-[1.3]  font-semibold text-[32px] pb-[40px] max-w-[540px]">
            He is someone I can <span className='text-[#ffad27]'>safely rely on</span>  to handle my Singapore properties.
            </p>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center items-center">
          <h5 className="font-bold font-dj text-[38px] text-[#1a202c] mb-[17px]">Andrew Tey</h5>
          <p className="text-[#1a202c] text-sm">Director</p>
          <p className="text-[#1a202c] text-sm">Moody’s Analytics</p>
        </div>
      </div>
    </div>
 </>
  );
};

export default QuoteTenant;
