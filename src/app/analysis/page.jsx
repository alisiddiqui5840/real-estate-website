import Property from '@/components/Blog/Property'
import Blogs from '@/components/Blog/blogs';
import React from 'react'
export const cards = [
    {
      id: 1,
      imageSrc: '/Assets/home/money-header.webp', 
      category: 'ANALYSIS',
      title: 'Do Singapore Leasehold Properties Make Money?',
      author: 'Jack Sheo',
      descriptions: [
        'Over the years, I’ve encountered many homebuyers & investors whose number one criterion for buying or investing in a private property is FREEHOLD.',
        'Regardless of the reason they wanted to buy a property, they weren’t interested at all if the property wasn’t freehold.',
      ],
      link: 'do-singapore-leasehold-properties-make-money',
    },


 
   
  ]
  export default function analysis () {
    return (
    <>
    <div className='bg-[#d3d3d3] mb-16  '>
      <h1 className="text-[48px] py-[60px]  font-black text-center font-brandon">Analysis</h1>
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


