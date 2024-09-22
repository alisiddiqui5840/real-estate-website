"use client";
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/20/solid';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 0) { // Show button when scrolling down
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-gray-800 text-white  shadow-lg hover:bg-gray-700"
        >
          <img src="/Assets/transaction/arrowup.svg" alt=""  className='text-white h-5 w-5'/>
          {/* <ArrowUpIcon className="h-5 w-5" /> */}
        </button>
      )}
    </div>
  );
};

export default BackToTop;