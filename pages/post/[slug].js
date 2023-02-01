import React, {useEffect, useState} from 'react'
import Layout from '../../components/layout'
import axios from 'axios';
import { useRouter } from 'next/router'
import Shimmer from '../../elements/shimmer';


import { server } from '../../helper/server'

export async function getServerSideProps({ query }) {
	const { slug } = query;
	const obj = {
		method: 'get',
		url: `${server}api/post/${slug}`,
	}

	const { status, data } = await axios(obj);
	console.log("🚀 ~ file: [category].js:25 ~ getServerSideProps ~ status", status)
	if (status === 200) {
		return {
			props: { data }
		}
	}
}



export default function SinglePost({data}) {

  const blog = data.data[0];


  if(!blog) {
    return <Shimmer />
  }

  return (
    <Layout >


<article class="px-4 py-24 mx-auto max-w-full" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
  <div class="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-2/3">
    <div class="pb-6 mb-6 border-b border-gray-200">
      <h1 class="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl" itemprop="headline" title={blog.title}>
        {blog.title}
      </h1>
      <p class="text-base text-gray-500">January 18, 2021 — Written by {blog.author}</p>

      <div dangerouslySetInnerHTML={{ __html: blog.description }} />

    </div>
</div>


  
</article>




</Layout>
  )
}
