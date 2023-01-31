
import { getPostsByCategory } from "../../../helper/firebaseApi"


export default async function get(req, res) {
console.log("🚀 ~ file: [category].js:6 ~ get ~ req", req.query)
const {name} = req.query;

  const response =  await getPostsByCategory(name)
    // console.log("🚀 ~ file: all.js:9 ~ get ~ data", data)
    res.status(200).json({ data: response})
  }