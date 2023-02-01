
import { getPosts } from "../../../helper/firebaseApi"


export default async function get(req, res) {

  const response =  await getPosts()
    // console.log("🚀 ~ file: all.js:9 ~ get ~ data", data)
    res.status(200).json({ data: response})
  }