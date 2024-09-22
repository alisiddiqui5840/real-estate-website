import React from 'react';

const BSD = () => {
  return (
    <div className="container max-w-[1195px] mx-auto  ">
      <div className="font-poppins">
        <div className='text-left max-w-[650px] mx-auto'>
          <p className="text-[32px] font-bold font-brandon mb-[32px] pt-[32px]">
          Buyer Stamp Duty (BSD)

          </p>
          <div className='flex mb-[32px]'>
          <img src="/Assets/Coolingmeasure/building.svg" alt=""  className='w-[15px] mr-2'/>
          <p className="text-[17px] ">
          Last Revised: <span className='font-bold'>15 Feb 2023</span>
          </p>
          </div>
          <p className="text-[17px] mb-[32px]">
          Buyer’s Stamp Duty (BSD) is a tax payable by buyers of properties in Singapore. The amount of BSD payable depends on the purchase price of the property or the market value of the property, whichever is higher.
          </p>
          <p className="text-[17px] mb-[32px]">
          The rate payable is the same for every buyer, regardless of nationality.
          </p>
          <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-[#123774] text-white text-center">
          <tr>
            <th className="px-4 py-2 w-[200px] text-[17px] border border-gray-200">Purchase price or market value of the property</th>
            <th className="px-4 py-2 w-[250px] text-[17px] border border-gray-200">BSD rates for residential properties</th>
            <th className="px-4 py-2 w-[220px] text-[17px] border border-gray-200">BSD rates for non-residential properties</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">First $180,000</td>
            <td className="px-4 py-2 border border-gray-200">1%</td>
            <td className="px-4 py-2 border border-gray-200">1%</td>
          </tr>
          <tr className=' bg-[#eee] text-center text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">Next $180,000</td>
            <td className="px-4 py-2 border border-gray-200">2%</td>
            <td className="px-4 py-2 border border-gray-200">2%</td>
          </tr>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">Next $640,000</td>
            <td className="px-4 py-2 border border-gray-200">3%</td>
            <td className="px-4 py-2 border border-gray-200">3%</td>
          </tr>
          <tr className='bg-[#eee] text-center text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">Next $500,000</td>
            <td className="px-4 py-2 border border-gray-200">4%</td>
            <td className="px-4 py-2 border border-gray-200">4%</td>
          </tr>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">Next $1,500,000</td>
            <td className="px-4 py-2 border border-gray-200">5%</td>
            <td className="px-4 py-2 border border-gray-200">5%</td>
          </tr>
          <tr className='bg-[#eee] text-center text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">Remaining amount</td>
            <td className="px-4 py-2 border border-gray-200">6%</td>
            <td className="px-4 py-2 border border-gray-200">-</td>
          </tr>
        </tbody>
      </table>
    </div>
          <p className="text-[17px] mb-[10px] font-bold pt-[30px]">
          Example:
          </p>
          <p className="text-[17px] mb-[32px]">
          A condo was purchased on 20 February 2023 at $5,000,000 which is the actual market value.
          </p>
          <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-[#123774] text-white text-center">
          <tr>
            <th className="px-4 py-2 border max-w-[200px] border-gray-200">Market Value of the Property</th>
            <th className="px-4 py-2 border border-gray-200">BSD Rate</th>
            <th className="px-4 py-2 border border-gray-200">Calculation</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">First $180,000</td>
            <td className="px-4 py-2 border border-gray-200">1%</td>
            <td className="px-4 py-2 border border-gray-200">= $1,800 (1% x $180,000)</td>
          </tr>
          <tr className='text-center bg-[#eee] text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">Next $180,000</td>
            <td className="px-4 py-2 border border-gray-200">2%</td>
            <td className="px-4 py-2 border border-gray-200">= $3,600 (2% x $180,000)</td>
          </tr>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">Next $640,000</td>
            <td className="px-4 py-2 border border-gray-200">3%</td>
            <td className="px-4 py-2 border border-gray-200">= $19,200 (3% x $640,000)</td>
          </tr>
          <tr className='text-center bg-[#eee] text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">Next $500,000</td>
            <td className="px-4 py-2 border border-gray-200">4%</td>
            <td className="px-4 py-2 border border-gray-200">= $20,000 (4% x $500,000)</td>
          </tr>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">Next $1,500,000</td>
            <td className="px-4 py-2 border border-gray-200">5%</td>
            <td className="px-4 py-2 border border-gray-200">= $75,000 (5% x $1,500,000)</td>
          </tr>
          <tr className='text-center bg-[#eee] text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">Remaining $2,000,000</td>
            <td className="px-4 py-2 border border-gray-200">6%</td>
            <td className="px-4 py-2 border border-gray-200">= $120,000 (6% x $2,000,000)</td>
          </tr>
        </tbody>
        <tfoot className=" text-center text-[17px]">
          <tr>
            <td className="px-4 py-2 border border-gray-200 font-bold" colSpan="2">BSD Payable</td>
            <td className="px-4 py-2 border border-gray-200 font-bold">= $239,600</td>
          </tr>
        </tfoot>
      </table>
    </div>
          <p className="text-[17px] mb-[32px] pt-[10px]">
          Visit the <a href="https://www.iras.gov.sg/" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">IRAS website</a> for the latest update on BSD.
          </p>
          
        </div>
      </div>
        </div>
    )
    };

export default BSD;