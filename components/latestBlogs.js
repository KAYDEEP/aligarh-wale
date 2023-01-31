export const LatestBlog = (props) => {
  const {blogs} = props;
    return (
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <h2 class="mb-2 text-6xl md:text-7xl text-center font-bold font-heading font-heading tracking-px-n leading-tight"> Latest Articles</h2>
      <p class="mb-12 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">Discover the most outstanding articles in all topics of life....</p>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {blogs.map(blog=>(
   <div className="flex">
   <div className="pt-1 mr-6 text-center">
     <div className="px-2 pb-1 mb-1 border-b border-gray-400">
       <p className="text-sm text-blue-gray-700">Jul</p>
     </div>
     <div className="px-2">
       <p className="text-lg font-bold">18</p>
     </div>
   </div>
   <div>
     <div className="mb-2">
       <a
         href="/"
         className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
         aria-label="Category"
         title="Delevopment"
       >
         {blog.category}
       </a>
     </div>
     <div className="mb-2">
       <a
         href={`post/${blog.slug}`}
         aria-label="Article"
         className="inline-block text-xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 line-clamp-3"
       >
         {blog.title}
       </a>
     </div>
     <p className="mb-4 text-gray-500 text-xs line-clamp-3">
       {blog.subTitle}
     </p>
     <div className="flex items-center">
       <a href="/" aria-label="Author" title="Author" className="mr-3">
         <img
           src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
           alt="avatar"
           className="object-cover w-10 h-10 rounded-full shadow-sm"
         />
       </a>
       <div>
         <a
           href="/"
           aria-label="Author"
           title="Author"
           className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
         >
           Petru Vîrtos
         </a>
         <p className="text-sm font-medium leading-4 text-gray-600">
           Author
         </p>
       </div>
     </div>
   </div>
 </div>
        ))}
     

      </div>
    </div>
    );
  };