import React from 'react';

const MSRSection = () => {
  return (
    <div className="container max-w-[1195px] mx-auto  ">
      <div className="font-poppins">
        <div className='text-left max-w-[650px] mx-auto'>
          <p className="text-[32px] font-bold font-brandon mb-[32px] pt-[32px]">
          Total Debt Servicing Ratio (TDSR)

          </p>
          <div className='flex mb-[32px]'>
          <img src="/Assets/Coolingmeasure/building.svg" alt=""  className='w-[15px] mr-2'/>
          <p className="text-[17px] ">
          Last Revised: <span className='font-bold'> 16 Dec 2021</span>
          </p>
          </div>
          <p className="text-[17px] mb-[32px]">
          Mortgage servicing ratio (MSR) refers to the portion of a borrower’s gross monthly income that goes towards repaying all property loans, including the loan being applied for.
          </p>
          <p className="text-[17px] mb-[32px]">
          MSR is <span className='font-bold'>capped at 30% </span>of a borrower’s gross monthly income.
          </p>
          <p className="text-[17px] mb-[32px]">
          It applies only to housing loans for the purchase of an <span className='font-bold'>HDB flat</span>, or an <span className='font-bold'>executive condominium</span> where the minimum occupation period of the executive condominium has not expired.
          </p>
          <p className="text-[17px] mb-[32px] ">
          Visit the <a href="https://www.mas.gov.sg/" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">MAS website</a> for the latest update on MSR.
          </p>
        </div>
      </div>
        </div>
    )
    };

export default MSRSection;