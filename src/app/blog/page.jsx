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
  export default function Blog () {
    return (
    <>
     <Property/>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
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


