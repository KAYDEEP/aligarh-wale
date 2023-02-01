
import { getPostsByCategory } from "../../../../helper/firebaseApi"


export default async function get(req, res) {
// console.log("🚀 ~ file: [category].js:6 ~ get ~ req", req)

const {category} = req.query;

  const response =  await getPostsByCategory(category)
    // console.log("🚀 ~ file: all.js:9 ~ get ~ data", data)
    res.status(200).json({ data: response})
  }