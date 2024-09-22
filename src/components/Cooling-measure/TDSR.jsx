import React from 'react';

const TDSRSection = () => {
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
          The Total Debt Servicing Ratio (TDSR) is a debt servicing framework first introduced by the MAS in 2013 to ensure that borrowers do not take on more debt than they can afford to repay, and to help prevent a housing market bubble.
          </p>
          <p className="text-[17px] mb-[32px]">
          It sets a limit on the amount of debt a borrower can take on based on their income and existing debts.
          </p>
          <p className="text-[17px] mb-[32px]">
          Under the TDSR framework, a borrower’s total monthly debt obligations, including mortgage payments, cannot exceed 55% of their monthly income.
          </p>
          <p className="text-[17px] mb-[32px]">
          For example, if a borrower has a monthly income of SGD 10,000, their total monthly debt obligations, including mortgage payments, cannot exceed SGD 5,500.
          </p>
          <p className="text-[17px] mb-[32px]">
          The TDSR framework applies to all housing loans, including loans for the purchase of residential properties, and refinancing loans. For refinancing loans, TDSR is only applicable for investment property loans.
          </p>
          <p className="text-[17px] mb-[32px] ">
          Visit the <a href="https://www.mas.gov.sg/" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">MAS website</a> for the latest update on  TDSR.
          </p>
        </div>
      </div>
        </div>
    )
    };

export default TDSRSection;