import Link from 'next/link';

const SimilarPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'Back During My 1st Year In Real Estate',
      author: 'Jack Shea',
      imageUrl: '/Assets/DoSingapore/first-year-in-real-estate (1).webp',
      link: 'do-singapore-leasehold-properties-make-money' 
    },
    {
      id: 2,
      title: 'How Much Is My Property Worth?',
      author: 'Jack Shea',
      imageUrl: '/Assets/DoSingapore/one-bedroom-case-study-header.webp',
      link: 'do-singapore-leasehold-properties-make-money' 
    },
    {
      id: 3,
      title: 'From Hostility To Hope',
      author: 'Jack Shea',
      imageUrl: '/Assets/DoSingapore/new-hope (1).webp',
      link: 'do-singapore-leasehold-properties-make-money' 
    }
  ];

  return (
    <div className="bg-[#d3d3d3] py-[55px]">
      <div className="container mx-auto max-w-[1000px] px-4">
        <h2 className="text-[32px] font-brandon font-black mb-4">Similar Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white shadow-md overflow-hidden">
              <Link href={post.link}>
                  <img src={post.imageUrl} alt={post.title} className="h-[216px] object-cover w-full" />
                  <div className="p-6">
                    <h3 className="text-[20px] font-brandon font-black mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-[14px] font-poppins">By {post.author}</p>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarPosts;