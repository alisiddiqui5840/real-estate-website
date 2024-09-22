"use client";
import { useEffect } from 'react';
import Image from 'next/image';

const SellModal = ({ isOpen, onClose, imageSrc, title, onNext, onPrev }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-[40px] px-[30px] z-50"
      >
        <img className="absolute left-4 top-1/2 transform -translate-y-1/2  text-white bg-black bg-opacity-70  py-[10px] px-[10px]   z-50" src="/Assets/Left.svg" alt="" />
      </button>
      <button onClick={onClose} className="absolute top-2 right-[1%] bg-blackbg-opacity-70 text-white text-[25px] px-[20px] z-50">
      <img className="absolute bg-black top-2 right-[2%] bg-opacity-70  py-[10px]   z-50 px-[10px]  text-white" src="/Assets/Close.svg" alt="" />
        </button>
      <div className="relative  rounded-lg overflow-hidden p-4">
        
        <div className="relative w-[600px] h-[600px]">
          <Image className="object-cover" src={imageSrc} alt={title} layout="fill" />
        </div>
        <div className="px-6 pb-2 pt-4 flex ">
          <div className="font-bold text-[15px] font-poppins text-left text-white">{title}</div>
        </div>
      </div>
      <button
        onClick={onNext}
        className="absolute bg-black right-4 top-1/2 transform -translate-y-1/2 bg-opacity-70  text-white text-[40px] px-[30px]  z-50"
      >
        <img className="absolute bg-black right-4 top-1/2 bg-opacity-70 transform py-[10px]  -translate-y-1/2 z-50 px-[10px]  text-white" src="/Assets/Right.svg" alt="" />
      </button>
    </div>
  );
};

export default SellModal;
