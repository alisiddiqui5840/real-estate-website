import React from 'react';

const SSDSection = () => {
  return (
    <div className="container max-w-[1195px] mx-auto  ">
      <div className="font-poppins">
        <div className='text-left max-w-[650px] mx-auto'>
          <p className="text-[32px] font-bold font-brandon mb-[32px] pt-[32px]">
          Seller Stamp Duty (SSD)

          </p>
          <div className='flex mb-[32px]'>
          <img src="/Assets/Coolingmeasure/building.svg" alt=""  className='w-[15px] mr-2'/>
          <p className="text-[17px] ">
          Last Revised: <span className='font-bold'> 11 Mar 2017</span>
          </p>
          </div>
          <p className="text-[17px] mb-[32px]">
          Seller’s Stamp Duty (SSD) is a tax that is payable by sellers of properties in Singapore. The SSD is calculated based on the sale price of the property or the market value of the property, whichever is higher.
          </p>
          <p className="text-[17px] mb-[32px]">
          The SSD is only applicable if the property is sold within a certain period of time from the date of purchase, known as the holding period.
          </p>
          <p className="text-[17px] mb-[32px]">
          The rate payable is the same for every seller, regardless of nationality.
          </p>
   
          <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-500 text-[17px] text-white">
          <tr>
            <th className="px-4 py-2 border max-w-[270px] border-gray-200">Date of purchase or date of change of zoning / use</th>
            <th className="px-4 py-2 border border-gray-200">Holding Period</th>
            <th className="px-4 py-2 border border-gray-200">SSD rate</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-[17px]'>
            <td className="px-4 py-2 border border-gray-200" rowSpan="4">On and after 11 March 2017</td>
            <td className="px-4 py-2 border border-gray-200 ">Up to 1 year</td>
            <td className="px-4 py-2 border border-gray-200 ">12%</td>
          </tr>
          <tr className='text-[17px]'>
            <td className="px-4 py-2 border border-gray-200 bg-gray-100">More than 1 year & up to 2 years</td>
            <td className="px-4 py-2 border border-gray-200 bg-gray-100" >8%</td>
          </tr>
          <tr className='text-[17px]'> 
            <td className="px-4 py-2 border border-gray-200 ">More than 2 years & up to 3 years</td>
            <td className="px-4 py-2 border border-gray-200 ">4%</td>
          </tr>
          <tr className='text-[17px]'>
            <td className="px-4 py-2 border border-gray-200 bg-gray-100">More than 3 years</td>
            <td className="px-4 py-2 border border-gray-200 bg-gray-100">No SSD payable</td>
          </tr>
        </tbody>
      </table>
    </div>
          <p className="text-[17px] mb-[10px] font-bold pt-[30px]">
          Example:
          </p>
          <p className="text-[17px] mb-[32px]">
          A condo was purchased on 17 March 2017 & sold on 1 February 2018 for $5,000,000.
          </p>
          <p className="text-[17px] mb-[32px]">
          The holding period is less than 1 year.
          </p>
          <p className="text-[17px] mb-[32px] pt-[10px]">
          SSD payable is $600,000 (12% x $5,000,000).
          </p>
          <p className="text-[17px] mb-[32px] ">
          Visit the <a href="https://www.iras.gov.sg/" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">IRAS website</a> for the latest update on SSD.
          </p>
        </div>
      </div>
        </div>
    )
    };

export default SSDSection;