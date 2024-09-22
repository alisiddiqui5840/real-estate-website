import React from 'react';

const QuoteCOontact = () => {
  return (
    <>
    <div className="container max-w-[1170px] mx-auto px-4  py-[24px] pt-[104px]">
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
        <div><svg className=' md:col-span-1 w-[30px] h-[22px] text-[#d3d3d3]' viewBox="0 0 8 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 0v6l3-3v-3h-3zm5 0v6l3-3v-3h-3z" transform="translate(0 1)"></path></svg></div>
        <div className='md:col-span-6'>
        <p className="text-[#1a202c] leading-[1.3]  font-semibold text-[32px] pb-[40px] max-w-[550px]">
        Jack’s typical  <span className='text-[#ffad27]'> calm & patient demeanour </span> was crucial for dealing with my aged parents. He’s very resourceful, prompt & hands on helpful too.
            </p>
            <p className="text-[#1a202c] leading-[1.3] font-semibold text-[32px] pb-[40px] max-w-[520px]">
            Greatly appreciate the <span className='text-[#ffad27]'> minimum hassle & timeliness</span> through the entire process of selling for my aged parents.
            </p>
        
        </div>
        <div className="md:col-span-5 flex flex-col justify-center items-center">
          <h5 className="font-bold font-dj text-[38px] text-[#1a202c] mb-[17px]">Felicia Fong</h5>
          <p className="text-[#1a202c] text-sm">Homemaker</p>
        </div>
      </div>

    </div>
        </>
  );
};

export default QuoteCOontact;
