
import { cardData } from "../helper/constant";


import BlogCard from "../elements/blogCard";
import axios from 'axios';
import { useEffect, useState } from "react";

const Blog = (props) => {
  const {blogs} = props;

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-8 py-12 mx-auto">
      <h2 class="mb-4 text-6xl md:text-7xl text-center font-bold font-heading font-heading tracking-px-n leading-tight"> Latest Articles</h2>
      <p class="mb-12 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">Discover the most outstanding articles in all topics of life....</p>
        {/* <h2 className=" mb-2  font-sans text-3xl font-bold leading-none tracking-tight text-gray-400 sm:text-4xl md:mx-auto">
          Latest Articles
        </h2>
        <p className="text-start pb-4 ">Discover the most outstanding articles in all topics of life....</p> */}

        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {blogs.map((product) => (
             <BlogCard {...product} />
        //    <div key={product.title} className="group relative max-w-sm mx-auto rounded overflow-hidden shadow-lg">
        //    <div className="max-h-40 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-full">
        //      <img
        //        src={product.img}
        //        alt="ndjd"
        //        // className="h-80  object-cover object-center lg:h-80 lg:w-full"
        //      />
        //    </div>
        //    <div class="px-4 py-4">
        //      <div class="font-bold text-xl mb-2 hover:text-red-500 hover:cursor-pointer">{product.title}</div>
        //      <p class="text-gray-700 text-sm line-clamp-3 ">
        //        {product.subTitle}
        //      </p>
        //    </div>
        //    <div className=" flex flex-row justify-between px-6 py-2 relative">
        //      <div class="">

        //        <a
        //          href="/"
        //          aria-label="Author"
        //          className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
        //        >
        //          Aligarh.com
        //        </a>
        //        <p className="text-sm font-medium leading-4 text-gray-600">
        //          Date:- 12,11,1999
        //        </p>
        //      </div>
        //      <div>
        //        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.category}</span>
        //      </div>
        //    </div>
        //  </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Blog;