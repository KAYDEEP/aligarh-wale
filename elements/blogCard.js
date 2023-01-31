import React, { useEffect,useState } from "react";
import Router from 'next/router'
import Link from 'next/link'

export default function BlogCard(props) {

const handleSlug =(slug)=>{
  Router.push(slug, undefined, { shallow: true })
}

if(!props.img) {
return (

<div class="mx-auto bg-white shadow-lg w-96 rounded-2xl">
    <div class="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse">
    </div>
    <div class="p-3 h-">
        <div class="grid grid-cols-3 gap-4 mt-2">
            <div class="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="h-8 bg-gray-200 rounded  animate-pulse">
            </div>
            <div class="...">
            </div>
            <div class="col-span-2 ...">
            </div>
        </div>
    </div>
</div>

)
}


  return (

<div key={props.id} className="group relative max-w-sm mx-auto rounded overflow-hidden shadow-lg">
              <div className="max-h-40 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-full">
                <img
                  src={props.img}
                  alt="ndjd"
                  // className="h-80  object-cover object-center lg:h-80 lg:w-full"
                />
              </div>
              <div class="px-4 py-4">
                <div class="font-bold text-xl mb-2 hover:text-red-500 hover:cursor-pointer" >
                <Link href={`/post/${props.slug}`}>
                  {props.title}
                  </Link>
                  </div>
                <p class="text-gray-700 text-sm line-clamp-3 ">
                  {props.subTitle}
                </p>
              </div>
              <div className=" flex flex-row justify-between px-6 py-3 relative">
                <div class="">

                  <a
                    href="/"
                    aria-label="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Aligarh.com
                  </a>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Date:- 12,11,1999
                  </p>
                </div>
                <div>
                  <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700  mb-1">#{props.category}</span>
                </div>
              </div>
            </div>

//     <div class="rounded overflow-hidden shadow-lg">
//     <img class=" lg:h-48 md:h-36  object-cover object-center" src={detail.img} alt="Mountain" />
//     <div class="px-6 py-4">

//       <div class="font-bold text-xl mb-2">{detail.title}</div>
//       {/* <p class=" truncate hover:text-clip text-gray-700 text-base  text-ellipsis overflow-hidden ...">
//       {detail.subTitle}
//       </p> */}
//     </div>
//     {/* <div className="flex items-center"> */}
//       <div className=" flex flex-row justify-between px-6 py-2">
//         <div class ="">

//         <a
//           href="/"
//           aria-label="Author"
//           className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
//         >
//           Susie the Cat
//         </a>
       
//         <p className="text-sm font-medium leading-4 text-gray-600">
//         Date:- 12,11,1999
//         </p>
//         </div>
//         <div>

//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{detail.category}</span>
// </div>
//       {/* </div> */}
//     </div>
//   </div>


  //   <div class="p-6 md:w-1/3">
  //   <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  //     <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={detail.img} alt="blog" />
  //     <div className="p-5 border border-t-0">
  //     <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
  //       <a
  //         href="/"
  //         className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
  //         aria-label="Category"
  //         title="traveling"
  //       >
  //         {detail.category}
  //       </a>
  //       <span className="text-gray-600">— 12,11,1999</span>
  //     </p>
  //     <a
  //       href="/"
  //       aria-label="Category"
  //       title="Visit the East"
  //       className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
  //     >
  //       {detail.title}
  //     </a>
  //     <p className="truncate ... hover:text-clip mb-2 text-sm text-gray-700">
  //       {detail.subTitle}
  //     </p>
  //     <div className="flex items-center">
  //       <a href="/" aria-label="Author" className="mr-3">
  //         <img
  //           alt="avatar"
  //           src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
  //           className="object-cover w-10 h-10 rounded-full shadow-sm"
  //         />
  //       </a>
  //       <div>
  //         <a
  //           href="/"
  //           aria-label="Author"
  //           className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
  //         >
  //           Susie the Cat
  //         </a>
  //         <p className="text-sm font-medium leading-4 text-gray-600">
  //           Author
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   </div>
  // </div>
  //   <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
  //   <img src={props.img} className="object-cover w-full h-16 " alt="" />
  //   <div className="p-5 border border-t-0">
  //     <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
  //       <a
  //         href="/"
  //         className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
  //         aria-label="Category"
  //         title="traveling"
  //       >
  //         {props.category}
  //       </a>
  //       <span className="text-gray-600">— {props.date}</span>
  //     </p>
  //     <a
  //       href="/"
  //       aria-label="Category"
  //       title="Visit the East"
  //       className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
  //     >
  //       {props.title}
  //     </a>
  //     <p className="mb-2 text-sm text-gray-700">
  //       {props.subTitle}
  //     </p>
  //     <div className="flex items-center">
  //       <a href="/" aria-label="Author" className="mr-3">
  //         <img
  //           alt="avatar"
  //           src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
  //           className="object-cover w-10 h-10 rounded-full shadow-sm"
  //         />
  //       </a>
  //       <div>
  //         <a
  //           href="/"
  //           aria-label="Author"
  //           className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
  //         >
  //           Susie the Cat
  //         </a>
  //         <p className="text-sm font-medium leading-4 text-gray-600">
  //           Author
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}
