
import Chats from '@/components/Testimonials/chat';
import DoImg from '@/components/do-singapore-leasehold-properties-make-money/DoImg';
import SimilarPosts from '@/components/do-singapore-leasehold-properties-make-money/similar';
import Link from 'next/link';
export default function DoSingapore() {


 

  return (
    <>
      <DoImg />
      <div className='max-w-[730px] mx-auto'>
     <Chats/>
     </div>
     <Link href="/Feature" >
     <div className=" mx-auto max-w-[730px] mb-[32px] mt-[32px] border-gray-400 rounded">
          <span className="text-sm px-2 py-1 rounded-md border max-w-[90px]   text-gray-600">#Featured</span>
        </div>
        </Link>
     <div className="flex items-center mb-[32px] justify-between py-4 mx-auto max-w-[730px]">
      <div className="flex items-center  space-x-4">
    
        <div className=''>
          <Link href="/previous-post" className="flex items-center  space-x-2 text-black hover:text-[#123774]">
              <span className="text-xl">←</span>
              <div className=' '>
                <span className="text-sm font-bold">PREVIOUS</span>
                <p className="text-lg mr-32">From Hostility To Hope</p>
              </div>
              <div className="border-l border-black h-6  "></div>
          </Link>
          
        </div>
      </div>
      
    </div>
    <SimilarPosts/>
    </>
  );
}
