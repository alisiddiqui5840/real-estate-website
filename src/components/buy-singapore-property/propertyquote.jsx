import React from 'react';

const QuoteProperty = () => {
  return (
    <>
    <p className="text-[17px] mb-[32px] max-w-[730px] mx-auto">
    In the meantime, I invite you to explore <a href="/blog" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]"> other articles</a> and resources on my website that cover various aspects of the Singapore real estate market.
          </p>
          <p className="text-[17px] mb-[32px] max-w-[730px] mx-auto">
          If you’re looking to buy or invest in Singapore real estate, please don’t hesitate to <a href="/contact" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]"> contact me</a>. I’m here to help you achieve your property goals and guide you through the process.
          </p>
    <div className='bg-[#f7f7f7]'>
    <div className="container max-w-[1170px] mx-auto px-4  py-[104px]  pt-[104px]">
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
        <div><svg className=' md:col-span-1 w-[30px] h-[22px] text-[#d3d3d3]' viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 0v6l3-3v-3h-3zm5 0v6l3-3v-3h-3z" transform="translate(0 1)"></path></svg></div>
        <div className='md:col-span-6'>
        <p className="text-[#1a202c] leading-[1.3]  font-semibold text-[32px] pb-[40px] max-w-[500px]">
        Jack stood out because of his <span className='text-[#ffad27]'> attentiveness </span> & ability to<span className='text-[#ffad27]'> understand our needs</span>.
            </p>
            <p className="text-[#1a202c] leading-[1.3]  font-semibold text-[32px] pb-[40px] max-w-[520px]">
            Jack also gave us a <span className='text-[#ffad27]'>  comprehensive introduction</span>  to the Singapore housing market & helped us navigate it every step of the way.
            </p>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center items-center">
          <h5 className="font-bold text-[38px] font-dj text-[#1a202c] mb-[17px]">Dr Trin Dong</h5>
          <p className="text-[#1a202c] text-sm">Physician</p>
          <p className="text-[#1a202c] text-sm">New York, United States</p>
        </div>
      </div>
    </div>
    </div>
 </>
  );
};

export default QuoteProperty;
