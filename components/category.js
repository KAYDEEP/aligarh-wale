
const categoryData = [{
    id:1,
    title: "Eduction",
    desc: "Ome shuigdi djhuigd dkhkui",
    img: "https://img.icons8.com/office/40/null/university.png",
    btnText: "start",
    colorCls: 'bg-slate-600',
    headerCls: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400',
},
{
    id:2,
    title: "Health",
    desc: "Ome shuigdi djhuigd dkhkui",
    img: "https://img.icons8.com/office/40/null/medical-doctor.png",
    btnText: "start",
    colorCls: 'bg-green-600',
    headerCls: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400',
},
{
    id:3,
    title: "Drink and Food",
    desc: "Ome shuigdi djhuigd dkhkui",
    img: "https://img.icons8.com/office/40/null/food-and-wine.png",
    btnText: "start",
    colorCls: 'bg-red-600',
    headerCls: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400',
},
{
    id:4,
    title: "Shopping",
    desc: "Ome shuigdi djhuigd dkhkui",
    img: "https://img.icons8.com/office/40/null/shopping-cart-loaded--v2.png",
    btnText: "start",
    colorCls: 'bg-yellow-600',
    headerCls: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400',
},
{
    id:5,
    title: "News & Update",
    desc: "Ome shuigdi djhuigd dkhkui",
    img: "https://img.icons8.com/office/40/null/news.png",
    btnText: "start",
    colorCls: 'bg-yellow-600',
    headerCls: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400',
},
{
    id:6,
    title: "Lifestyle",
    desc: "Ome shuigdi djhuigd dkhkui",
    img: "https://img.icons8.com/office/40/null/lifecycle--v1.png",
    btnText: "start",
    colorCls: 'bg-yellow-600',
    headerCls: 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400',
},
]

import Link from 'next/link'

import { category } from "../helper/constant";
export const Category = () => {
    return (
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 ">
          
     	{/* <h2 className=" mb-2 font-sans text-3xl font-bold leading-none tracking-tight text-gray-400 sm:text-4xl md:mx-auto">
								Category
							</h2>
                            <p className="text-start pb-4">Find out all blogs by category...</p> */}
        <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-6 ">
            {category.map((item=>{
        return <Link href={`${item.slug}`}>
        <div className="text-center transition-shadow  bg-gray-50 rounded-2xl py-4 shadow-sm">
                
    <div className="flex items-center justify-center w-40 h-40 mx-auto mb-4  sm:w-12 sm:h-12">
    <img src={item.img}/>
    </div>
   
    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
      {item.title}
    </h6>
  </div>
  </Link>
            }))}
        </div>
      </div>
    );
  };