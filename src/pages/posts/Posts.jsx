import { Facebook, Instagram, Twitter } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Commentpopup from './comments/Commentpopup';
import axios from 'axios';



function Posts() {

   const [post, setPost] = useState ([]);
   const [popup, setPopup] = useState (false);


   useEffect(()=>{
        axios.get("http://localhost:3000/post").then(response=>setPost(response.data.data));
   },[])


   
  return (
    <>
    {post.map((posts)=>(
    <div className="flex flex-col items-center justify-center h-[500px] bg-white border-b-2 border-black  text-center px-4">
      <p className="text-xs text-blue-600 font-semibold uppercase">{posts.text}</p>
      <h1 className="text-3xl font-bold text-black mt-2">{posts.heading}</h1>
      <p className="text-sm font-semibold text-black mt-2">{posts.date}</p>
      <p className="text-gray-500 max-w-2xl mt-4">{posts.para}</p>
      <div className='space-x-2'>
      <button className="'bg-white px-6 py-4 rounded-2xl hover:shadow-2xl hover:shadow-black mt-[20px]
       font-bold border border-white  hover:bg-black hover:text-white duration-300 transition-all ease-in-out">
        Read More
      </button>
        <button onClick={()=>setPopup(true)} className="'bg-white px-6 py-4 rounded-2xl hover:shadow-2xl hover:shadow-black mt-[20px]
       font-bold border border-white  hover:bg-black hover:text-white duration-300 transition-all ease-in-out">
       Comments
      </button>
      {popup && <Commentpopup onClose={()=>setPopup(false)}/> }
    </div>
      <div className="flex gap-4 mt-6 text-black">
        <Facebook className="fill-black cursor-pointer hover:fill-blue-600 hover:text-blue-600" />
        <Twitter className="fill-black cursor-pointer hover:fill-blue-400 hover:text-blue-400" />
        <Instagram className=" cursor-pointer hover:text-red-600" />
      </div>
    </div>
      ))}
    </>
  )
}

export default Posts