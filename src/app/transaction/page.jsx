import Chats from '@/components/Testimonials/chat';
import Bottomimages from '@/components/transaction/bottomimages';
import MapSection from '@/components/transaction/map';
import RealEstate from '@/components/transaction/realestate';
import TiltImages from '@/components/transaction/tiltimages';
import TransactionQuote from '@/components/transaction/transactionquote';

export default function About() {
  const cardsData = [
    {
        imageSrc: '/Assets/transaction/Ardmore-Park_600x450w.webp',
        title: 'ARDMORE PARK',
      },
      {
        imageSrc: '/Assets/transaction/Buckley-Classique_600x450w.webp',
        title: 'BUCKLEY CLASSIQUE',
      },
      {
        imageSrc: '/Assets/transaction/Carribean_600x450w.webp',
        title: 'CARIBBEAN AT KEPPEL BAY',
      },
      {
        imageSrc: '/Assets/transaction/JalanPelatok_600x450.webp',
        title: 'JALAN PELATOK LANDED',
      },
      {
        imageSrc: '/Assets/transaction/Morimasa-Gardens_600x450w.webp',
        title: 'MORIMASA GARDENS',
      },
      {
        imageSrc: '/Assets/transaction/Sea-Breeze-Road-600x450-1.webp',
        title: 'SEA BREEZE ROAD LANDED',
      },
      {
        imageSrc: '/Assets/transaction/Tua-Kong-600x450-1.webp',
        title: 'TUA KONG LANDED',
      },
      {
        imageSrc: '/Assets/transaction/Wilkie-Studio_600x450w.webp',
        title: 'WILKIE STUDIO',
      },
  ];
  const BottomcardsData = [
    {
        imageSrc: '/Assets/transaction/bottomimgs/28-Ghim-Moh-Link_600x450w.webp',
        title: '28 GHIM MOH LINK',
      },
      {
        imageSrc: '/Assets/transaction/bottomimgs/Balmoral-Gate_600x450w.webp',
        title: 'BALMORAL GATE',
      },
      {
        imageSrc: '/Assets/transaction/bottomimgs/Country-Park_600x450w.webp',
        title: 'COUNTRY PARK',
      },
      {
        imageSrc: '/Assets/transaction/bottomimgs/Butterfly-Avenue_600x450w.webp',
        title: 'BUTTERFLY AVENUE LANDED',
      },
      {
        imageSrc: '/Assets/transaction/bottomimgs/Gardenville_600x450w.webp',
        title: 'GARDENVILLE',
      },
      {
        imageSrc: '/Assets/transaction/bottomimgs/Rivergate_600x450w.webp',
        title: 'RIVERGATE',
      },
      {
        imageSrc: '/Assets/transaction/bottomimgs/Sunhaven_600x450.webp',
        title: 'SUNHAVEN',
      },
      {
        imageSrc: '/Assets/transaction/bottomimgs/Villa-Marina_600x450w.webp',
        title: 'VILLA MARINA',
      },
  ];


  return (
    <>
      <TiltImages cardsData={cardsData} />
      <RealEstate/>
      <TransactionQuote/>
      <MapSection/>
      <Chats/>
      <Bottomimages  BottomcardsData={BottomcardsData}/>
    </>
  );
}
