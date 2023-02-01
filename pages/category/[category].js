import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { category, cardData } from '../../helper/constant'
import CategoryHero from '../../components/categoryHero'
import BlogCard from '../../elements/blogCard'
import { Category } from '../../components/category'
import axios from 'axios';
import Shimmer from '../../elements/shimmer'
import { config } from '../../config/config'
import { server } from '../../helper/server'

export async function getServerSideProps({ query }) {
	const { category } = query;
	const obj = {
		method: 'get',
		url: `${server}api/post/category/${category}`,
	}

	const { status, data } = await axios(obj);
	console.log("🚀 ~ file: [category].js:25 ~ getServerSideProps ~ status", status)
	if (status === 200) {
		return {
			props: { data }
		}
	}
}


export default function DrinkAndFood({ data }) {
	const {asPath} = useRouter()
	const catData = category.find(item => item.slug === asPath)
	const blogs = data.data;
	console.log("🚀 ~ file: [category].js:51 ~ DrinkAndFood ~ blogs", blogs)

	if (!blogs) {
		return <Shimmer />
	}

	return (
		<Layout>
			<CategoryHero {...catData} />
			<div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 test-center">
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{blogs.length && blogs.map((item) => (
						<BlogCard {...item} />
					)) ||
						<p>No data found</p>
					}
				</div>
			</div>
			<Category />
		</Layout>

	)
}
