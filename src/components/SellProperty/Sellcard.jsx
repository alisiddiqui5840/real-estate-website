"use client";
import { useState } from 'react';
import Image from 'next/image';
import SellModal from './Sellmodal';

const Card = ({ imageSrc, title, tiltDirection, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative lg:w-1/2 w-full p-[10px] transform ${tiltDirection} mb-[20px] transition-transform duration-300 cursor-pointer`}
    >
      <div className="p-[15px] bg-white rounded-lg shadow-lg">
        <div className="relative  h-[424px] mx-auto ">
          <Image className="object-cover" src={imageSrc} alt={title} layout="fill" />
        </div>
        <div className="pt-4 flex justify-center">
          <div className="font-bold text-[15px] font-poppins text-center">{title}</div>
        </div>
      </div>
    </div>
  );
};

const SellCards = ({ cardsData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <>
    <div className='max-w-[1200px] mx-auto'>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => {
          const isEvenRow = Math.floor(index / 2) % 2 === 0;
          const tiltDirection = index % 2 === 0 ? (isEvenRow ? 'rotate-2' : '-rotate-2') : (isEvenRow ? '-rotate-2' : 'rotate-2');

          return (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              tiltDirection={tiltDirection}
              onClick={() => openModal(index)}
            />
          );
        })}
      </div>

      </div>
      <div className='container max-w-[800px] mx-auto'> 
                
                  <div className=' bg-[#f7f7f7] max-w-[650px] p-[16px] rounded-xl mb-[32px]'>
                  <div className='flex pb-[30px]  items-center'>
                  <img src="/Assets/find-tenant/yellow.svg" className='w-[25px] h-[25px] text-[#ffad27] ' alt="" />
                  <p className="text-[17px]  ml-4  font-bold "> Sellers Like To Ask</p>
                  </div>
                  <div className=' border-l-4 border-[#2d3748]  '>
                  <p className=' italic text-[20px] font-poppins  mb-[16px] pl-[17px]'>Q3. How can I best prepare my property for the photo taking & viewing?</p>
                  <p className=' text-[13px] text-[#4a5568] font-poppins pl-[17px]'>Seller</p>
                  </div>
                  <p className="text-[17px] pt-[32px]"> When we first meet, I will pass you a copy of my curated seller’s guide. </p>
                  <p className="text-[17px] pt-[32px]"> I’ll guide you on presenting your property optimally and creating an excellent viewing experience for potential buyers.</p>
                  </div>
                  <h1 className="text-[32px] mb-[16px] font-bold font-brandon">4) WHAT’S IT LIKE TO WORK WITH JACK?</h1>
                  <p className="text-[17px] mb-[32px] max-w-[620px]">
                  I’m known for my friendly, easy-going nature and professionalism, as evidenced by the <a href="/testimonials" className="underline underline-offset-4 hover:no-underline transition duration-200 ease-in-out text-[#123774] hover:bg-[#123774] hover:text-[#ffffff] text-[17px]">testimonials</a> from my satisfied clients.
                  </p>
                  </div>
      <SellModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={cardsData[currentIndex]?.imageSrc}
        title={cardsData[currentIndex]?.title}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};

export default SellCards;
