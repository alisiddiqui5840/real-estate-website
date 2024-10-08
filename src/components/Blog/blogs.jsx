import Image from 'next/image';
import Link from 'next/link';

const Blogs = ({ imageSrc, category, title, author, descriptions,link }) => {
  const categoryLink = category === 'ANALYSIS' ? '/analysis' : '/stories';

  return (
    <div className=" rounded-lg overflow-hidden ">
      <div className="relative w-full h-64 ">
        <Link href={link}>
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="cursor-pointer" />
        </Link>
      </div>
      <div >
        <Link href={categoryLink}>
          <div className="text-[12px] font-bold uppercase max-w-[63px] rounded-md p-1 my-2 text-[#123774] hover:text-[#000000] cursor-pointer">{category}</div>
        </Link>
        <h2 className="text-[32px] font-brandon font-black mb-2">{title}</h2>
        <p className="text-sm font-poppins text-gray-700 mb-4">By {author}</p>
        {descriptions.map((desc, index) => (
          <p key={index} className="text-gray-700 text-[17px] mb-2">{desc}</p>  
        ))}
        <a href={link} className="text-[#000000]  font-bold hover:text-[#123774]  transition duration-300 ease-in-out">
          Read more &rarr;
        </a>
      </div>
    </div>
  );
};

export default Blogs;
