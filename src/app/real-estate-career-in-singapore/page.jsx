
import ImgSection from '@/components/Real-estate-career-singapor/imgsection/imgsection'
import ImgQuote from '@/components/Real-estate-career-singapor/quote/imgquote';
import Rewards from '@/components/Real-estate-career-singapor/rewards/rewards'
import TeamCards from '@/components/Real-estate-career-singapor/team/team'
import TeamCards2 from '@/components/Real-estate-career-singapor/teamcard2/temacard';
import Chats from '@/components/Testimonials/chat';
import React from 'react'
const cardsData = [
    {
        imageSrc: '/Assets/singaporeRealEsate/MBS-awards-2024.webp',
        title: 'Awards Celebration',
      },
      {
        imageSrc: '/Assets/singaporeRealEsate/enbu-gathering.webp',
        title: 'Lunch Gathering',
      },
      {
        imageSrc: '/Assets/singaporeRealEsate/south-beach.webp',
        title: 'Lunch Gathering',
      },
      {
        imageSrc: '/Assets/singaporeRealEsate/JLD-awards-2023.webp',
        title: 'Awards Celebration',
      },
  ];
  const cardData2 = [
    {
        imageSrc: '/Assets/singaporeRealEsate/coastes-gathering.webp',
        title: 'Dinner Gathering',
      },
      {
        imageSrc: '/Assets/singaporeRealEsate/ritz-gathering.webp',
        title: 'Lunch Gathering',
      },
      {
        imageSrc: '/Assets/singaporeRealEsate/lucca-gathering.webp',
        title: 'Dinner Gathering',
      },
      {
        imageSrc: '/Assets/singaporeRealEsate/breakfast.webp',
        title: 'Breakfast Gathering',
      },
  ];
const Contact = () => {
  return (
    <>
        <ImgSection/>
        <Rewards/>
        <TeamCards cardsData={cardsData}/>
        <TeamCards2 cardData2={cardData2}/>
        <ImgQuote/>
        <Chats/>
    </>
  )
}

export default Contact
