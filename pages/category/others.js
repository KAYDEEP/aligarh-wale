import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { category, cardData } from '../../helper/constant'
import CategoryHero from '../../components/categoryHero'
import BlogCard from '../../elements/blogCard'
import { Category } from '../../components/category'
import axios from 'axios';
import Shimmer from '../../elements/shimmer'


export default function Others(props) {
	const { pathname } = useRouter()
	const catData = category.find(item => item.slug === pathname)
	const { name } = catData;
	const [blogs, setBlogs] = useState([])
	const [loading, setLoading] = useState(true)
	console.log("🚀 ~ file: news-update.js:17 ~ NewsAndUpdate ~ loading", loading)

	useEffect(() => {
		if (blogs.length < 1) {
			getBlogs()
		}
	}, [blogs])

	const getBlogs = () => {
		const config = {
			method: 'get',
			url: `http://localhost:3000/api/post/category?name=${name}`,
		}

		axios(config).then((res) => {
			if (res) {
				setLoading(false)
				setBlogs(res.data.data)
				// setBanner({key:"success", text:"Post created successfully."})
			}
		}).catch((err) => {
			console.log('error', err);
		})
	}

	if(loading) {
	return 	<Shimmer />
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


