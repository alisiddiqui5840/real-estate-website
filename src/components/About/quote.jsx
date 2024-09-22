import React from 'react';

const Quote = () => {
  return (
    <div className="container max-w-[1170px] mx-auto px-4 py-16">
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
        <div><svg className=' md:col-span-1 w-[30px] h-[22px] text-[#d3d3d3]' viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 0v6l3-3v-3h-3zm5 0v6l3-3v-3h-3z" transform="translate(0 1)"></path></svg></div>
        <div className='md:col-span-6'>
        <p className="text-[#1a202c]  font-semibold text-[32px] pb-[40px] leading-none">
                Have engaged Jack for a couple of property transactions (both sale & rental). He has proven himself to be <span className='text-[#ffad27]'> extremely professional & reliable </span>.
            </p>
            <p className="text-[#1a202c] font-semibold text-[32px] leading-none">
            He goes above and beyond, and is <span className='text-[#ffad27]'>very responsive </span>. I feel confident entrusting my property matters to Jack, and I would not hesitate to recommend him 100%.
            </p>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center items-center">
          <h5 className="font-bold font-dj text-[38px] text-[#1a202c] mb-[17px]">Dr Ben Tan</h5>
          <p className="text-[#1a202c] text-sm">Senior Consultant</p>
          <p className="text-[#1a202c] text-sm">Singapore General Hospital</p>
        </div>
      </div>

    </div>
  );
};

export default Quote;
