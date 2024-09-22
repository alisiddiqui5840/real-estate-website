import Blogs from '@/components/Blog/blogs';
import React from 'react'
export const cards = [
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
  export default function stories () {
    return (
    <>
    <div className='bg-[#d3d3d3] mb-16  '>
      <h1 className="text-[48px] py-[60px]  font-black text-center font-brandon">Stories</h1>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto ">
        {cards.map((card) => (
          <Blogs
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
    </>
  );
}


