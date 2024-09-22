"use client"; 
import { useState, useEffect } from 'react';
import  './style.scss';

export default function ScrollEffectComponent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="textContainer">
        {scrollY < 300 && <h1 className="text">Text 1</h1>}
        {scrollY >= 300 && scrollY < 600 && <h1 className="text">Text 2</h1>}
        {scrollY >= 600 && <h1 className="text">Text 3</h1>}
      </div>

      <div className="imageContainer">
        {scrollY < 300 && <img src="/image1.png" alt="Image 1" className="image" />}
        {scrollY >= 300 && scrollY < 600 && <img src="/image2.png" alt="Image 2" className="image"  />}
        {scrollY >= 600 && <img src="/image3.png" alt="Image 3" className="image"  />}
      </div>
    </div>
  );
}
