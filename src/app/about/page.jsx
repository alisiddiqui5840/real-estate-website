import Cards from '../../components/About/card';
import AboutJackSheo from '../../components/About/jacksheo';
import Quote from '../../components/About/quote';
import Contact from '../../components/About/contact';
export default function About() {
  const cardsData = [
    {
        imageSrc: '/Assets/about/associate.webp',
        title: 'Associate Nellie Law with her Platinum award',
      },
      {
        imageSrc: '/Assets/about/liverpool.webp',
        title: '#YNWA',
      },
      {
        imageSrc: '/Assets/about/Webmaster.webp',
        title: 'Having fun at GWC',
      },
      {
        imageSrc: '/Assets/about/LABC-Awards.webp',
        title: 'LABC Awards Ceremony',
      },
  ];

  return (
    <>
    <div className="flex flex-wrap justify-center p-[85px]">
      <Cards cardsData={cardsData} />
    </div>
    <AboutJackSheo/>
    <Quote/>
    <Contact/>
    </>
  );
}
