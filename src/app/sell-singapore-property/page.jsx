import Sell from '@/components/SellProperty/Sell';
import SellQuote from '@/components/SellProperty/SellQuote';
import SellCards from '@/components/SellProperty/Sellcard';
import Chats from '@/components/Testimonials/chat';
import QuoteTenant from '@/components/find-a-tenant-in-singapore/tenantquote';


export default function SellProperty() {
    const cardsData = [
        {
            imageSrc: '/Assets/SellProperty/Binjai-Crest_600x450w.webp',
            title: 'BINJAI CREST LANDED',
          },
          {
            imageSrc: '/Assets/SellProperty/Casa-Merah_600x450w.webp',
            title: 'CASA MERAH',
          },
          {
            imageSrc: '/Assets/SellProperty/Jardin-600x450-1.webp',
            title: 'JARDIN',
          },
          {
            imageSrc: '/Assets/SellProperty/Park-Green-600x450-1.webp',
            title: 'PARK GREEN',
          },
      ];


  return (
    <>
      <Sell/>
      <SellCards cardsData={cardsData}/>
      <SellQuote/>
      <Chats/>
    </>
  );
}
