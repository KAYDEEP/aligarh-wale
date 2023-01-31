import React from 'react'

export default function CategoryHero(props) {
  return (
              <section>
  <div class="px-4 py-2 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-4">
    <div class="flex flex-col w-full mb-12 text-center">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-blue-600 rounded-full bg-gray-50">
<img src={props.img} />
      </div>
      <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
        {props.title}
      </h1>

      <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-center text-gray-500">
          {props.desc}
      </p>
    </div>
  </div>
</section>
  )
}
