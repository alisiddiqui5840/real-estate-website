"use client";
import Image from 'next/image';
const Tiltimage = ({ imageSrc, title, tiltDirection, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative max-w-[440px] rounded overflow-hidden shadow-lg m-4 transform ${tiltDirection} transition-transform duration-300 `}
    >
      <div className="p-6 bg-white rounded-lg ">
        <div className="relative  w-auto h-[333px]  mx-auto">
          <Image className="object-contain " src={imageSrc} alt={title} layout="fill" />
        </div>
        <div className="   flex justify-center">
          <div className="font-bold text-[15px] font-poppins text-center">{title}</div>
        </div>
      </div>
    </div>
  );
};

const TiltImages = ({ cardsData }) => {


  return (
    <>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
      {cardsData.map((card, index) => {
        const rowIndex = Math.floor(index / 4);
        const tiltDirection = (rowIndex % 2 === 0 ? index % 2 === 0 : index % 2 !== 0) ? 'rotate-2' : '-rotate-2';
        return (
          <Tiltimage
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            tiltDirection={tiltDirection}
          />
        );
      })}
    </div>
    </>
  );
};

export default TiltImages;
