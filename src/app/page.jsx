import Blogcards from "@/components/Home/cards";
import Learn from "@/components/Home/learn";
import Proof from "@/components/Home/proof";
import QuoteHome from "@/components/Home/quote";
import Welcome from "@/components/Home/welcome";
import Link from "next/link";

export const cards = [
  {
    id: 1,
    imageSrc: '/Assets/home/money-header.webp', // Ensure the images are available in the public folder
    category: 'ANALYSIS',
    title: 'Do Singapore Leasehold Properties Make Money?',
    author: 'Jack Sheo',
    descriptions: [
      'Over the years, I’ve encountered many homebuyers & investors whose number one criterion for buying or investing in a private property is FREEHOLD.',
      'Regardless of the reason they wanted to buy a property, they weren’t interested at all if the property wasn’t freehold.',
    ],
    link: 'do-singapore-leasehold-properties-make-money',
  },
  {
    id: 2,
    imageSrc: '/Assets/home/new-hope.webp',
    category: 'STORIES',
    title: 'From Hostility To Hope',
    author: 'Jack Sheo',
    descriptions: [
      'That was probably the most aggressive and offensive moment I’ve experienced when meeting a seller for the first time to discuss the price.',
      'Me wasting their time?',
      'Seriously?',
    ],
    link: 'do-singapore-leasehold-properties-make-money',
    
  },
  {
    id: 3,
    imageSrc: '/Assets/home/real-estate.webp',
    category: 'STORIES',
    title: 'Back During My 1st Year In Real Estate',
    author: 'Jack Sheo',
    descriptions: [
      'As I stepped into the sprawling 2,500sqft condominium, my heart raced with a mix of excitement and nervousness.',
      'The year was 2010, and I was a rookie property agent struggling to find my footing in the industry.',
    ],
    link: 'do-singapore-leasehold-properties-make-money',
  },
]
export default function Home() {
  return (
   <>
   <Welcome/>
   <QuoteHome/>
   <Proof/>
   <Learn/>
   <div className="bg-[#f7f7f7]"> 
   <div className="container mx-auto px-4 pt-16 ">
      <h1 className="text-[48px] text-[#123774] font-brandon font-black text-center mb-12">BLOG HIGHLIGHTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {cards.map((card) => (
          <Blogcards
            key={card.id}
            imageSrc={card.imageSrc}
            category={card.category}
            title={card.title}
            author={card.author}
            descriptions={card.descriptions}
            link={card.link}
          />
        ))}
      </div>
    </div>
    <div className='flex  items-center pt-[24px] pb-16'>
      <button
            className="bg-[#123774] mx-auto hover:bg-black  text-white text-[16px] font-black h-[52px] w-[150px]  focus:outline-none focus:shadow-outline"
          >
          <Link className="link" href="/blog">MORE STORIES</Link>
          </button>
          </div>
          
    </div>
   </>
  );
}
