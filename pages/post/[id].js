import React, {useEffect, useState} from 'react'
import Layout from '../../components/layout'
import axios from 'axios';
import { useRouter } from 'next/router'
import Shimmer from '../../elements/shimmer';



export default function SinglePost() {
  const router = useRouter()
  console.log("🚀 ~ file: [id].js:10 ~ SinglePost ~ pathname", router.query)
  const {id } = router.query;

  const [blogs, setBlogs] = useState(null)
  console.log("🚀 ~ file: blogs.js:13 ~ Blog ~ blogs", blogs)

  useEffect(() => {
    if (!blogs) {
      getBlogs()
    }
  }, [blogs])

  const getBlogs = () => {
    const config = {
      method: 'get',
      url: `http://localhost:3000/api/post/slug?slug=${id}`,
    }

    axios(config).then((res) => {
      console.log('res----', res);

      if (res) {
        setBlogs(res.data.data[0])
        // setBanner({key:"success", text:"Post created successfully."})
      }
    }).catch((err) => {
      console.log('error', err);
    })

  }

  if(!blogs) {
    return <Shimmer />
  }

  return (
    <Layout >


<article class="px-4 py-24 mx-auto max-w-full" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
  <div class="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-2/3">
    <div class="pb-6 mb-6 border-b border-gray-200">
      <h1 class="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl" itemprop="headline" title="Rise of Tailwind - A Utility First CSS Framework">
        {blogs.title}
      </h1>
      <p class="text-base text-gray-500">January 18, 2021 — Written by {blogs.author}</p>

      <div dangerouslySetInnerHTML={{ __html: blogs.description }} />

    </div>
</div>


  
</article>




</Layout>
  )
}
