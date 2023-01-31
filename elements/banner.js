import React from 'react'

const config = {
    "success": {
        bgCls: "bg-green-100",
        textCls: "text-green-700",
        title: "Success"
    },
    "error": {
        bgCls: "bg-red-100",
        textCls: "text-red-700",
        title: "Error"
    }
}

export default function Banner(props) {
console.log("🚀 ~ file: banner.js:17 ~ Banner ~ props", props)
const {banner} =props
const data = config[banner.key]

  return (
    <div class={`p-4 mb-4 text-sm ${data.textCls} ${data.bgCls} rounded-lg dark:bg-gray-800 dark:text-red-400`} role="alert">
    <span class="font-medium">{data.title}</span> :  {(banner.text).toUpperCase()}
  </div>
  )
}
