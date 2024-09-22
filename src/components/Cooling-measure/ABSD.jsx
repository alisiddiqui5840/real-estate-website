import React from 'react';

const ABSDSection = () => {
  return (
    <div className="container max-w-[1195px] mx-auto  ">
      <div className="font-poppins">
        <div className='text-left max-w-[650px] mx-auto'>
          <p className="text-[32px] font-bold font-brandon mb-[32px] pt-[32px]">
          Additional Buyer Stamp Duty (ABSD)

          </p>
          <div className='flex mb-[32px]'>
          <img src="/Assets/Coolingmeasure/building.svg" alt=""  className='w-[15px] mr-2'/>
          <p className="text-[17px] ">
          Last Revised: <span className='font-bold'> 27 Apr 2023</span>
          </p>
          </div>
          <p className="text-[17px] mb-[32px]">
          The Additional Buyer’s Stamp Duty (ABSD) is an additional tax payable in addition to the Buyer’s Stamp Duty (BSD) when purchasing a residential property in Singapore.
          </p>
          <p className="text-[17px] mb-[32px]">
          The ABSD applies to all buyers, including Singapore citizens, permanent residents, and foreigners. It is calculated based on the purchase price or market value of the property, whichever is higher.
          </p>
          <p className="text-[17px] mb-[32px]">
          The ABSD rates are higher for certain categories of buyers, such as foreigners, entities, and trusts, as well as for additional properties purchased by the same buyer. 
          </p>
          <p className="text-[17px] mb-[32px]">
          Buyers who are Singapore citizens and are purchasing their first property are not subject to the ABSD.
          </p>
          <p className="text-[17px] ">
          SC – Singapore Citizens
          </p>
          <p className="text-[17px] ">
          SPR – Singapore Permanent Residents
          </p>
          <p className="text-[17px] mb-[32px]">
          RP – Residential Property
          </p>
          <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-[#ffad27] text-black text-center">
          <tr>
            <th className="px-4 py-2 text-[17px] border border-gray-200">Profile of Buyer</th>
            <th className="px-4 py-2  text-[17px] border border-gray-200">ABSD Rates</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">SC buying first RP</td>
            <td className="px-4 py-2 border border-gray-200">N.A.</td>
          </tr>
          <tr className='bg-[#eee] text-center text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">SC buying second RP</td>
            <td className="px-4 py-2 border border-gray-200">20%</td>
          </tr>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">SC buying third & subsequent RP</td>
            <td className="px-4 py-2 border border-gray-200">30%</td>
          </tr>
          <tr className='bg-[#eee] text-center text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">SPR buying first RP</td>
            <td className="px-4 py-2 border border-gray-200">5%</td>
          </tr>
          <tr className="text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">SPR buying second RP</td>
            <td className="px-4 py-2 border border-gray-200">30%</td>
          </tr>
          <tr className='bg-[#eee] text-center text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">SPR buying third & subsequent RP</td>
            <td className="px-4 py-2 border border-gray-200">35%</td>
          </tr>
          <tr className=' text-center text-[17px]'>
            <td className="px-4 bg-[#ffeb3b] py-2 border border-gray-200">Foreigners buying any RP</td>
            <td className="px-4 py-2 border border-gray-200">60%</td>
          </tr>
          <tr className='bg-[#eee] text-center text-[17px]'>
            <td className="px-4 py-2 border border-gray-200">Entities buying any RP</td>
            <td className="px-4 py-2 border border-gray-200">65%</td>
          </tr>
          <tr className=" text-center text-[17px]">
            <td className="px-4 py-2 border border-gray-200">Housing Developers buying any RP</td>
            <td className="px-4 py-2 border border-gray-200">35% + 5% (non remittable)</td>
          </tr>
          <tr className=' text-center text-[17px]'>
            <td className="px-4 bg-[#ffeb3b] py-2 border border-gray-200">Trustee buying any RP</td>
            <td className="px-4 py-2 border border-gray-200">65%</td>
          </tr>
        </tbody>
      </table>
    </div>
          <p className="text-[17px] mb-[10px] font-bold pt-[30px]">
          Example:
          </p>
          <p className="text-[17px] mb-[32px]">
          A foreigner purchased a condo on 20 May 2023 at the market value of $5,000,000. ABSD payable is $3,000,000 (60% of $5,000,000).
          </p>
          <p className="text-[20px] mb-[10px] text-[#ff0000] font-bold pt-[30px]">
          NOTE:
          </p>
          <p className="text-[17px] mb-[32px] pt-[10px]">
          1) Under the<a href="https://sso.agc.gov.sg/SL/SDA1929-S214-2013?DocDate=20130410" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]"> respective FTAs</a>, Nationals or Permanent Residents (PRs) of the following countries will be accorded the same Stamp Duty treatment as Singapore Citizens when buying residential properties:
          </p>
          <ul className=' list-disc text-[17px] mb-[32px] max-w-[550px] mx-auto'>
            <li>Nationals & PRs of Iceland, Liechtenstein, Norway or Switzerland</li>
            <li>Nationals of the <a href="#" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">United States of America</a></li>
          </ul>
          <p className="text-[17px] mb-[32px] pt-[10px]">
          2) Remission of ABSD (Trustee purchase) is possible under <a href="https://www.iras.gov.sg/taxes/stamp-duty/for-property/appeals-refunds-reliefs-and-remissions/common-stamp-duty-remissions-and-reliefs-for-property/remission-of-absd-(trust)" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]"> certain conditions</a>.
          </p>
          <p className="text-[17px] mb-[32px] ">
          Visit the <a href="https://www.iras.gov.sg/" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">IRAS website</a> for the latest update on ABSD.
          </p>
        </div>
      </div>
        </div>
    )
    };

export default ABSDSection;