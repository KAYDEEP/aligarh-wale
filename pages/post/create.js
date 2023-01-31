import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { CKEditor } from 'ckeditor4-react';

import { storage } from '../../config/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Upload from '../../elements/upload';
import CopyBtnDemo from '../../elements/clipboard';
import { category } from '../../helper/constant';
import axios from 'axios';
import Banner from '../../elements/banner';

export default function CreatePost() {



  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  console.log("🚀 ~ file: create.js:17 ~ CreatePost ~ progresspercent", progresspercent)

  const [page, setPage] = useState({})
  const [banner, setBanner] = useState({
    key: "",
    text: ""
  })
  console.log("🚀 ~ file: create.js:26 ~ CreatePost ~ banner", banner)
  const [isUpload, setIsUpload] = useState(true)
  const [form, setForm] = useState({
    title: "",
    author: "",
    slug: "",
    subTitle: "",
    description: "<h1>Rise of Tailwind - A Utility First CSS Framework</h1><p>January 18, 2021 &mdash; Written by Praveen Juge</p><p>Share this article</p><p><img src=`https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg` /></p><p>What if there is an easy way to achieve responsive UI without using any UI kit? Can we create new and fresh designs for every project with a CSS framework? Enter Tailwind CSS, will this be the perfect CSS framework, well let&rsquo;s find out.</p><p>&nbsp;</p>",
    img: [],
    category: ''
  })
  console.log("🚀 ~ file: create.js:31 ~ CreatePost ~ form", form)
  // console.log("🚀 ~ file: create.js:19 ~ CreatePost ~ form", form.description)
  useEffect(() => {
    //  if (!isAddMode) {
    //    const fields = ['categoryId', 'title', 'author', 'slug', 'description', 'tags', 'metaTitle', 'metaDescription', 'metaTags', 'position', 'status'];
    //    fields.forEach(field => setForm((prev) => ({ ...prev, [field]: page[field] })));
    //    // if (form && form.description) {
    //    //   editor.setData('your data');
    //    // }
    //  }
  }, [page]);


  const handleSubmit = (file) => {
    // e.preventDefault()
    // const file = e.target[0]?.files[0]
    // console.log("🚀 ~ file: create.js:37 ~ handleSubmit ~ file", file)
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    console.log("🚀 ~ file: create.js:41 ~ handleSubmit ~ storageRef", storageRef)
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log("🚀 ~ file: create.js:42 ~ handleSubmit ~ uploadTask", uploadTask)

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("🚀 ~ file: create.js:55 ~ getDownloadURL ~ downloadURL", downloadURL)
          setIsUpload(false)
          setImgUrl(downloadURL)
          handleChange([...form.img, ...[downloadURL]],"img")
        });
      }
    );
  }


  const handleOnChange = (event) => {
    // console.log("🚀 ~ file: create.js:31 ~ handleOnChange ~ editor", event)
    const dataRes = event.editor.getData();
    // console.log("🚀 ~ file: create.js:33 ~ handleOnChange ~ dataRes", dataRes)
     setForm((prev) => ({ ...prev, description: dataRes }))
  }

  //    useEffect(() => {
  //      if(!isAddMode){
  //        getPageByID()
  //      }
  //    }, [isAddMode])

  const validate =(data) =>{
    for(let key in data) {
      console.log("🚀 ~ file: create.js:97 ~ validate ~ key", key, data[key].length)
      if(key==='img' && data[key].length<1) {
        setBanner({key: "error",text: `Atleast upload one image inside blog editor.` })
        break;
      } else if(!data[key]) {
  setBanner({key: "error",text: `${key} is required.` })
  break;

}
      
    }
//  validateData.map((key)=>{
//   console.log("🚀 ~ file: create.js:97 ~ validateData.forEach ~ data[key]", data[key])
//   if(!data[key]) {
//     console.log('-----------here the key--------', key);
//     setBanner({key: "error",text: `${key} is required.` })
//     return;
//   }
// })

  }

  const handleButton = async () => {

    form.slug =  form.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    form.author = 'admin'
    console.log("🚀 ~ file: create.js:111 ~ handleButton ~ form", form)
    const config = {
      method: 'post',
      url: 'http://localhost:3000/api/post/create',
      data: form
    }

    // const isValid = Object.values(form).some(e => Boolean(e))
    // console.log("🚀 ~ file: create.js:117 ~ handleButton ~ isValid", isValid)
    validate(form)
 
    

    console.log("🚀 ~ file: create.js:97 ~ handleButton ~ config", config)

    axios(config).then((res)=>{
console.log('res----', res);
if(res) {
  setBanner({key:"success", text:"Post created successfully."})
}
    }).catch((err)=>{
      console.log('error', err);
    })

 
  }

  const getPageByID = () => {
    API.financeApiCall('Page', {}, 'GET', { id }, {}, {}).then(res => {
      if (res) {
        setPage(res)
      }
    }).catch(error => {
      console.error(error);
      return;
    })
  }

  const handleChange = (value, field) => {
    setBanner({key:"", text:""})

    setForm({ ...form, [field]: value })
    // console.log("🚀 ~ file: create.js:74 ~ handleChange ~ value", image)
    //  if (field === "status") {
    //    setForm({ ...form, [field]: !form.status })
    //  } else {
    //  }
  };

  const handleFile = (e) => {
    let file = e.target.files[0];

    const fileType = file['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (validImageTypes.includes(fileType)) {
      console.log('--------here in file---', file);

      handleSubmit(file)
    } else {
      //  setMessage("only images accepted");
    }
  };
  return (
    <Layout>
      <div className="px-2 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-4">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div class="flex flex-wrap  mb-6 ">
          {banner.key ? <Banner banner={banner}/>: null}
              <div class="w-full py-2">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Select Category
                </label>
                <div class="relative">
                  <select 
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="grid-state"
                  name='hello'
                  value={form.category} 
                  onChange={(e)=>{handleChange(e.target.value, "category")}}
                  >
                    {category.map((item=>(

                    <option value={item.name}>{item.title}</option>
                    )))}
                  </select>
                </div>
              </div>
              <div class="w-full py-2 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Title
                </label>
                <input 
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="grid-password" 
                placeholder="Enter Blog Title" 
                value={form.title} 
                onChange={(e)=>{handleChange(e.target.value, "title")}}
                />
              </div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Description
                </label>
                <input 
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="grid-password" 
                placeholder="Enter Small description"
                value={form.subTitle} 
                onChange={(e)=>{handleChange(e.target.value, "subTitle")}}
                />
            </div>
     


          <div class="my-6">
            <details class="group [&_summary::-webkit-details-marker]:hidden" open>
              <summary
                class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
              >
                <h2 class="font-medium text-gray-900">
                  How to upload image in blog?
                </h2>

                <svg
                  class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                  
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p class="px-4 mt-4 leading-relaxed text-gray-700"> 1. Click on picture icon in editor , its shows a popup which requried image url. </p>
              <p class="px-4 mt-4 leading-relaxed text-gray-700"> 2. Create image url :- click in upload image and select the image and submit , it will show image url.</p>
              <p class="px-4 mt-4 leading-relaxed text-gray-700">3. Click on copy url button and paste into popup image url section.</p>
              <p class="px-4 mt-4 leading-relaxed text-gray-700">  Done !!!</p>
            </details>
            
          </div>
            {isUpload ?
            <div class="flex items-center justify-center bg-grey-lighter py-4">
              <label class="w-64 flex flex-col items-center px-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span class="mt-2 text-base leading-normal">Upload Image</span>
                <input type='file' class="hidden" onChange={handleFile} />
              </label>
            </div>
          : <CopyBtnDemo textToCopy={imgUrl} setIsUpload={setIsUpload} />}

        

<div className='py-4'>

          <CKEditor
            initData={<div dangerouslySetInnerHTML={{ __html: form.description }} />}
            type="classic"
            onChange={(e) => { handleOnChange(e) }}
            // style={ { borderColor: 'blue' , height: 800} }
          // onInstanceReady={(e) => { handleInstanceReady(e) }}
          // onReady={ (event,editor) =>
          //   {
          //   // You can store the "editor" and use when it is needed.
          //   console.log( 'Editor is ready to use!==================>>>>>>>', event );
          //   } }
          //   onChange={ ( event, editor ) => {
          //   const data = event.editor.getData();
          //   console.log( { event, editor, data } );
          //   } }
          //   onBlur={ ( event, editor ) => {
          //   console.log( 'Blur.', editor );
          //   } }
          //   onFocus={ ( event, editor ) => {
          //   console.log( 'Focus.', editor );
          //   } }
          />
</div>



<div className='flex items-center justify-center py-4'>

<button
  class="inline-block rounded bg-gray-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-gray-600"
  disabled={banner.key}
onClick={()=>{handleButton()}}
>
  Save
</button>
</div>


        </div>
      </div>


    </Layout>
  )
}
