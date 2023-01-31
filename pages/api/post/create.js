
import { createPost } from "../../../helper/firebaseApi"


export default function create(req, res) {
  const data = req.body;
  console.log("🚀 ~ file: create.js:7 ~ create ~ data", data)
  createPost(data)
    res.status(200).json({ name: 'John Doe' })
  }