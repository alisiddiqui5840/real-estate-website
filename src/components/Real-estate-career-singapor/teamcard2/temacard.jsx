"use client";
import Image from 'next/image';
const Tiltimage = ({ imageSrc, title, tiltDirection, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative max-w-[440px] rounded overflow-hidden shadow-lg m-4 transform ${tiltDirection} transition-transform duration-300 `}
    >
      <div className="p-6 bg-white rounded-lg ">
        <div className="relative  w-auto h-[318px]  mx-auto">
          <Image className="object-contain " src={imageSrc} alt={title} layout="fill" />
        </div>
        <div className="   flex justify-center">
          <div className=" text-[15px] font-poppins text-center">{title}</div>
        </div>
      </div>
    </div>
  );
};

const TeamCards2= ({ cardData2 }) => {


  return (
    <>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   mx-auto">
      {cardData2.map((card, index) => {
        const rowIndex = Math.floor(index / 4);
        const tiltDirection = (rowIndex % 2 === 0 ? index % 2 === 0 : index % 2 !== 0) ? '-rotate-2' : 'rotate-2';
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
    <div className="font-poppins">
        <div className='text-left max-w-[730px] mx-auto'>
        <p className="text-[24px] font-bold pt-[32px] text-[#2d3748] mb-[12px]">
          INSPIRATION COMES IN ALL AGES
          </p>
          <p className="text-[17px] mb-[32px] ">
          Through the years, I’ve had people of all ages reach out to me to explore the idea of becoming a property agent.
          </p>
          <p className="text-[17px] mb-[32px]">
          Do you know the youngest ever to reach out to me? 
          </p>
          <p className="text-[17px] mb-[32px]">
          A 12-year-old boy named Javier.
          </p>
          <p className="text-[17px] mb-[32px]">
          It was a surreal moment. See our WhatsApp exchange below.
          </p>
          <img
            src='/Assets/SingaporeRealEsate/Young-RES-Javier-1.webp'
            alt="Jack Sheo"
            className=" mx-auto "
          />
          <p className="text-[15px] text-center max-w-[530px] mx-auto mb-[48px]">
          Young Javier reaches out
          </p>
          <img
            src='/Assets/SingaporeRealEsate/Young-RES-Javier-2.webp'
            alt="Jack Sheo"
            className=" mx-auto "
          />
          <p className="text-[15px] text-center max-w-[530px] mx-auto mb-[48px]">
          Javier wants to start his own agency
          </p>
          <img
            src='/Assets/SingaporeRealEsate/Young-RES-Javier-3.webp'
            alt="Jack Sheo"
            className=" mx-auto "
          />
          <p className="text-[15px] text-center max-w-[530px] mx-auto mb-[48px]">
          “Is the property agent exam easy?“
          </p>
          <img
            src='/Assets/SingaporeRealEsate/Young-RES-Javier-4.webp'
            alt="Jack Sheo"
            className=" mx-auto "
          />
          <p className="text-[15px] text-center max-w-[530px] mx-auto mb-[48px]">
          “Good luck with your PSLE!“
          </p>
          <p className="text-[17px] mb-[32px] ">
          Javier exhibited very rare determination and maturity, which is rare for someone so young.
          </p>
          <p className="text-[17px] mb-[32px] ">
          He took definitive steps to seek someone who could explain to him how he could become a property agent one day. And the results he needs.
          </p>
          <p className="text-[17px] mb-[32px] ">
          He possesses the right ingredients to do well in whatever he chooses. I’m inspired by him.
          </p>
          <p className="text-[17px] mb-[32px] ">
          What about you?
          </p>
          <p className="text-[17px] mb-[32px] ">
          You’ve taken the first step to becoming a property agent in Singapore.
          </p>
          <p className="text-[17px] mb-[32px] ">
          Are you going to continue moving forward?
          </p>
          </div>
          </div>
    </>
  );
};

export default TeamCards2;
