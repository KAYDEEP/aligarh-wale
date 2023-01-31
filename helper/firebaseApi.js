import { collection, addDoc, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../config/firebase";



export const createPost = async(data) =>{
    try {
        const docRef = await addDoc(collection(db, "Blogs"), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
    // const res = await db.collection('Blogs').set(data);
   //  console.log("🚀 ~ file: firebaseApi.js:8 ~ createPost ~ res", res)
}


export const getPosts = async(data) =>{
    try {
        const querySnapshot = await getDocs(collection(db, "Blogs"));
        // console.log("🚀 ~ file: firebaseApi.js:22 ~ getPosts ~ querySnapshot", querySnapshot)
        let finalData = []
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`);
          finalData.push(doc.data())
        });
        return finalData;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
    // const res = await db.collection('Blogs').set(data);
   //  console.log("🚀 ~ file: firebaseApi.js:8 ~ createPost ~ res", res)
}

export const getPostsByCategory = async(name) =>{
    try {

      const q = query(collection(db, "Blogs"), where("category", "==", name));

const querySnapshot = await getDocs(q);
        // const querySnapshot = await getDocs(collection(db, "Blogs"));
        // console.log("🚀 ~ file: firebaseApi.js:22 ~ getPosts ~ querySnapshot", querySnapshot)
        // const q = query(citiesRef, where("state", "==", "CA"));
        let finalData = []
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`);
          finalData.push(doc.data())
        });
        return finalData;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
    // const res = await db.collection('Blogs').set(data);
   //  console.log("🚀 ~ file: firebaseApi.js:8 ~ createPost ~ res", res)
}

export const getPostsBySlug = async(slug) =>{
  try {

    const q = query(collection(db, "Blogs"), where("slug", "==", slug));

const querySnapshot = await getDocs(q);
      // const querySnapshot = await getDocs(collection(db, "Blogs"));
      // console.log("🚀 ~ file: firebaseApi.js:22 ~ getPosts ~ querySnapshot", querySnapshot)
      // const q = query(citiesRef, where("state", "==", "CA"));
      let finalData = []
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        finalData.push(doc.data())
      });
      return finalData;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  // const res = await db.collection('Blogs').set(data);
 //  console.log("🚀 ~ file: firebaseApi.js:8 ~ createPost ~ res", res)
}