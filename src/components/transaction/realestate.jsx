import React from 'react';

const RealEstate = () => {
  return (
    <div className="container max-w-[1170px] mx-auto px-4 py-16">
      <h1 className="text-[48px] p-[24px] font-black text-center font-brandon">MY REAL ESTATE TRANSACTIONS</h1>
      <div className="font-poppins">
        <div className='text-left max-w-[730px] mx-auto'>
          <p className="text-[20px] font-bold text-[#123774] mb-[32px]">
          MY FIRST 2 DEALS
          </p>
          <p className="text-[17px] mb-[32px]">
          I believe all property agents won’t ever forget their first few deals.
          </p>
          <p className="text-[17px] mb-[32px]">
          My first real estate transaction (three months after becoming an agent) involved an HDB 4-room HDB flat at 221 Simei Street 4. I represented the landlady (a third-degree connection) and found her a tenant. I’ll forever be grateful for the opportunity she gave this rookie.
          </p>
          <p className="text-[17px] mb-[32px]">
          This experience taught me the importance of building trust and delivering exceptional service, no matter the size of the transaction.
          </p>
          <img
            src='/Assets/transaction/221-Simei-living.webp'
            alt="Jack Sheo"
            className="w-[600px] h-[400px] mx-auto "
          />
          <p className="text-[15px] text-center max-w-[530px] mx-auto mb-[32px]">
          Throwback to my first ever real estate photo! 🙌📷 This living room photo of 221 Simei St 4 may not be Instagram-worthy, but it holds a special place in my heart as the starting point of my career. ❤️
          </p>
          <p className="text-[17px] mb-[32px]">
          Soon after, I sold a duplex penthouse at Sunrise Gardens with my coursemate (property agent course), Adeline Gan. She had secured the FSBO (for sale by owner) listing and roped me in to work on the case together.
          </p>
          <p className="text-[17px] mb-[32px]">
          This collaboration showed me the power of teamwork and the value of a strong network in the real estate industry.
          </p>
          <img
            src='/Assets/transaction/Sunrise-Gardens-study-room.webp'
            alt="Jack Sheo"
            className="w-[600px] h-[400px] mx-auto "
          />
          <p className="text-[15px] text-center max-w-[530px] mx-auto mb-[32px]">
          Sunrise Gardens, circa 2010: Where blurry photos were the norm and closing deals was a matter of enthusiasm over image quality! 🏠📷
          </p>
          <img
            src='/Assets/transaction/Adeline-Gan-collaboration.webp'
            alt="Jack Sheo"
            className="w-[600px] h-[400px] mx-auto "
          />
          <p className="text-[15px] text-center max-w-[530px] mx-auto mb-[32px]">
          A great pleasure to present Adeline with her Top Producer plaque on our off day! Congrats on your latest win! 🙌
          </p>
          <p className="text-[17px] mb-[32px]">
          Since then, I’ve transacted in many other districts and HDB estates, each memorable in its own way. Here’s one <a href="#" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]"> memorable moment </a> involving a Pulasan Road apartment.
          </p>
          <p className="text-[17px] mb-[32px]">
          Every transaction has provided unique insights into the property market and my client’s diverse needs. Maybe one day, I can publish a book detailing the story behind every single transaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;