import React from 'react'

export default function ExtraBlogs(props) {
  const {blogs} = props
  return (
    <section class="pt-12 pb-18 bg-white overflow-hidden">
    <div class="container px-4 mx-auto">
      <h2 class="mb-4 text-6xl md:text-7xl text-center font-bold font-heading font-heading tracking-px-n leading-tight">Latest from Blog</h2>
      <p class="mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.</p>
      <div class="flex flex-wrap -m-8">
        {blogs.map(blog=>(

        <div class="w-full md:w-1/2 p-8">
          <div class="flex flex-wrap lg:items-center -m-4">
            <div class="w-auto p-4">
              <div class="overflow-hidden rounded-xl">
                <img class="h-32 w-48 transform hover:scale-105 transition ease-in-out duration-1000" src={blog.img} alt=""/>
              </div>
            </div>
            <div class="flex-1 p-4">
              <div class="md:max-w-xs">
                <div class="flex flex-col justify-between h-full">
                  <div class="mb-6">
                    <p class="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">{blog.category}</p>
                    <a class="inline-block hover:text-gray-800 hover:underline" href={`post/${blog.slug}`}>
                      <h3 class="text-xl font-semibold leading-normal">{blog.title}</h3>
                    </a>
                  </div>
                  <div class="flex flex-wrap items-center -m-1">
                    <div class="w-auto p-1">
                      <img src="flaro-assets/images/blog/blog-avatar.png" alt=""/>
                    </div>
                    <div class="w-auto p-1">
                      <p class="text-sm font-semibold leading-relaxed">Aligarh.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}

      </div>
    </div>
  </section>
  )
}
