import React from 'react';

const Property = () => {
  return (
    <>
    <h1 className="text-[48px] pb-4 font-black text-center font-brandon">SINGAPORE PROPERTY BLOG</h1>
    <div className="container max-w-[1200px] mx-auto px-[24px] py-8">
          
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-poppins">
      <div className="text-center md:col-span-4 justify-center items-center flex">
        <img
            className='w-[300px] h-[300px]'
            src='/Assets/Blog/jack-sheo-blog.webp'
            alt="Jack Sheo"
            
          />
        </div>
        <div className='md:col-span-8'>
          <p className="text-[20px]   font-poppins  mb-[32px] ">Welcome to my Singapore property blog!</p>
          <p className="text-[20px]  font-poppins  mb-[32px] ">Here, I share personal tales, client encounters, and market insights, all from the heart of Singapore’s property market.</p>
          <p className="text-[20px]  font-poppins  mb-[32px] ">Each post is a reflection of my journey.</p>
          <p className="text-[20px]  font-poppins  mb-[32px] ">I sincerely hope you find as much enjoyment in reading these stories as I do in writing them.</p>
          <p className="text-[20px]  font-poppins  mb-[32px] ">If you love what I’ve shared, drop me a message to let me know!</p>
        </div>
        </div>
        </div>
        </>
    )
    };

export default Property;