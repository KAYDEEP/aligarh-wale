import React from 'react'
import SwiperBlog from './swiper'




export default function Slider(props) {
  const {name, list, heading, subHeading} = props
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12'>
            <h2 class="mb-4 text-6xl md:text-7xl text-center font-bold font-heading font-heading tracking-px-n leading-tight">{heading}</h2>
      <p class="mb-12 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">{subHeading}</p>
    {/* <h2 className=" mb-2   font-sans text-3xl font-bold leading-none tracking-tight text-gray-400 sm:text-4xl md:mx-auto">
  {heading}
                 </h2>
   <p className="text-start pb-4 ">{subHeading}</p> */}
   <SwiperBlog keyName={name} data={list} />
   </div>
  )
}
