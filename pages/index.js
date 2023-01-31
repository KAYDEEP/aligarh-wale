import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

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

const bannerData = [{
  id:1,
  title: "Eduction",
  desc: "Ome shuigdi djhuigd dkhkui",
  img: "",
  btnText: "start",
  colorCls: 'bg-slate-600'
},
{
  id:2,
  title: "Health",
  desc: "Ome shuigdi djhuigd dkhkui",
  img: "",
  btnText: "start",
  colorCls: 'bg-green-600'
},
{
  id:3,
  title: "Drink and Food",
  desc: "Ome shuigdi djhuigd dkhkui",
  img: "",
  btnText: "start",
  colorCls: 'bg-red-600'
},
{
  id:4,
  title: "Shopping",
  desc: "Ome shuigdi djhuigd dkhkui",
  img: "",
  btnText: "start",
  colorCls: 'bg-yellow-600'
},
]

export default function Home() {

  const [blogs, setBlogs] = useState([])
  console.log("🚀 ~ file: blogs.js:13 ~ Blog ~ blogs", blogs)

  useEffect(() => {
    if (blogs.length < 1) {
      getBlogs()
    }
  }, [blogs])

  const getBlogs = () => {
    const config = {
      method: 'get',
      url: 'http://localhost:3000/api/post/all',
    }

    axios(config).then((res) => {
      console.log('res----', res);

      if (res) {
        setBlogs(res.data.data)
        // setBanner({key:"success", text:"Post created successfully."})
      }
    }).catch((err) => {
      console.log('error', err);
    })

  }
  return (
    <>
  <Layout>
    <Hero />
    <Category />
  <Slider name="banner" list={category} heading="Trending posts" subHeading="Discover the most outstanding articles in all topics of life...."/>
{blogs.length && <Blog blogs={blogs}/>}
    {/* <Banner /> */}
<ExtraBlogs blogs={blogs}/>
<LatestBlog blogs={blogs}/>
  </Layout>
    </>
  )
}
