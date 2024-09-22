import React from 'react';

const LTVSection = () => {
  return (
    <div className="container max-w-[1195px] mx-auto  ">
      <div className="font-poppins">
        <div className='text-left max-w-[650px] mx-auto'>
          <p className="text-[32px] font-bold font-brandon mb-[32px] pt-[32px]">
          Loan Tenure & Loan-to-Value Limits (LTV)
          </p>
          <div className='flex mb-[32px]'>
          <img src="/Assets/Coolingmeasure/building.svg" alt=""  className='w-[15px] mr-2'/>
          <p className="text-[17px] ">
          Last Revised: <span className='font-bold'>  6 Jul 2018</span>
          </p>
          </div>
          <p className="text-[17px] mb-[32px]">
          The maximum housing loan borrowers can take depends on their age, loan duration and property type, and whether they have existing housing loans. Joint borrowers are assessed using an income-weighted average age.
          </p>
          <p className="text-[17px] mb-[10px] font-bold pt-[30px]">
          Loan Tenure
          </p>
          <p className="text-[17px] mb-[32px]">
          The maximum loan tenure for housing loans is capped at:
          </p>
          <ul className=' list-disc text-[17px] mb-[32px] max-w-[550px] mx-auto'>
          <li className="text-[17px] ">
          30 years for HDB flats (25 years if it is an HDB loan)
          </li>
          <li className="text-[17px] mb-[32px] pt-[10px]">
          35 years for non-HDB properties
          </li>
          </ul>
          <p className="text-[17px] mb-[10px] font-bold pt-[30px]">
          Loan-to-Value Limits
          </p>
          <p className="text-[17px] mb-[32px]">
          The loan-to-value (LTV) limit determines the maximum amount an individual can borrow from a financial institution (FI) for a housing loan.
          </p>
          <p className="text-[17px] mb-[32px]">
          LTV refers to the loan amount as a percentage of the property’s value. For example, if an individual borrows $150,000 to purchase a property valued at $1,000,000, the LTV is 15%.
          </p>
          <p className="text-[17px] mb-[32px]">
          The LTV limits for individuals change depending on the number of outstanding housing loans a borrower has.
          </p>
          <p className="text-[17px] mb-[32px]">
          The following LTV limits apply for loans on residential properties:
          </p>
          <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-[#000000] text-white text-center">
          <tr>
            <th className="px-4 py-2 w-[220px] text-[17px] border border-gray-200">Outstanding housing loans</th>
            <th className="px-4 py-2 w-[200px] text-[17px] border border-gray-200">LTV limit</th>
            <th className="px-4 py-2 w-[250px] text-[17px] border border-gray-200">	Min. cash downpayment</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">None</td>
            <td className="px-4 py-2 border border-gray-200">75% or 55%</td>
            <td className="px-4 py-2 border border-gray-200">	5% (for LTV of 75%) or 10% (for LTV of 55%)</td>
          </tr>
          <tr className=' bg-[#eee] text-center text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">1</td>
            <td className="px-4 py-2 border border-gray-200">45% or 25%</td>
            <td className="px-4 py-2 border border-gray-200">25%</td>
          </tr>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">2 or more</td>
            <td className="px-4 py-2 border border-gray-200">35% or 15%</td>
            <td className="px-4 py-2 border border-gray-200">25%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-[17px] mb-[32px]  pt-[20px]">
    Apply the lower LTV limit if the loan tenure exceeds 30 years (or 25 years for HDB flats) or if the loan period extends beyond the borrower’s age of 65 years.
          </p>
          <p className="text-[17px] mb-[32px] ">
          Visit the <a href="https://www.mas.gov.sg/" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">MAS website</a> for the latest update on LTV.
          </p>
        </div>
      </div>
        </div>
    )
    };

export default LTVSection;