"use client";
import { useState } from 'react';
import Image from 'next/image';
import Modal from './modal';

const Card = ({ imageSrc, title, tiltDirection, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative max-w-sm rounded overflow-hidden shadow-lg m-4 transform ${tiltDirection} transition-transform duration-300 cursor-pointer`}
    >
      <div className="p-6 bg-white rounded-lg ">
        <div className="relative w-[424px] h-[424px]  mx-auto">
          <Image className="object-contain" src={imageSrc} alt={title} layout="fill" />
        </div>
        <div className="  pt-4 flex justify-center">
          <div className="font-bold text-[15px] font-poppins text-center">{title}</div>
        </div>
      </div>
    </div>
  );
};

const Cards = ({ cardsData }) => {
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
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            tiltDirection={index % 2 === 0 ? 'rotate-2' : '-rotate-2'}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      <Modal
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

export default Cards;
