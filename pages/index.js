
import Layout from '../components/layout'
import Blog from '../components/blogs'
import { LatestBlog } from '../components/latestBlogs'
import { Banner } from '../components/banner'
import { Category } from '../components/category'
import Slider from '../components/Slider'
import { Hero } from '../components/hero'
import axios from 'axios';
import { useEffect, useState } from "react";
import ExtraBlogs from '../components/extraBlogs'
import { category } from '../helper/constant'
import { config } from '../config/config'
import Shimmer from '../elements/shimmer'


import { server } from '../helper/server'

export async function getServerSideProps({ query }) {
	const { category } = query;
	const obj = {
		method: 'get',
		url: `${server}api/post`,
	}

	const { status, data, error } = await axios(obj);
	if (status === 200) {
		return {
			props: { data }
		}
	}
}



export default function Home({ data }) {

	const blogs = data.data;


	if (!blogs.length > 0) {
		return <Shimmer />
	}
	return (
		<>
			<Layout>
				<Hero />
				<Category />
				<Slider name="banner" list={category} heading="Trending posts" subHeading="Discover the most outstanding articles in all topics of life...." />
				{blogs.length && <Blog blogs={blogs} />}
				{/* <Banner /> */}
				<ExtraBlogs blogs={blogs} />
				<LatestBlog blogs={blogs} />
			</Layout>
		</>
	)
}
