import { Reply, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import Commentsinput from './Commentsinput'
import Commentreply from './Commentreply'
import { useEffect } from 'react'
import axios from 'axios'





function Comments() {

  const [comment, setComment] = useState ([]);
  const [reply, setReply] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:3000/comment").then(response=>setComment(response.data.data))
   

    
  },[])
  
  const commentdelete = async (id) =>{
  const response =   await axios.get(`http://localhost:3000/comment`);
    setComment(prev=>prev.filter(item=>item.id !==id));
    console.log(response)
  }

    
  return (
    <>
{Array.isArray(comment) && comment.map((comments)=>(
   <div key={comments.id}>
   <div className="flex mt-4  p-4 rounded-lg shadow-sm">

      <div className="flex flex-col items-center px-2 py-1 bg-gray-100 rounded-lg text-purple-600 font-bold text-sm">
        <button>+</button>
        <span className="my-1">{comments.like}</span>
        <button>-</button>
      </div>

     
      <div className="ml-4 flex-1  ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img  className="w-8 h-8 rounded-full " src="https://i.pravatar.cc/40" alt="avatar" />
            <span className="font-semibold">{comments.userName}</span>
            <span className="text-gray-400 text-sm">{comments.date}</span>
          </div>
            <div >
              <button onClick={()=>setReply(comments.id)} className="text-blue-500 flex items-center gap-1 text-sm font-semibold">
              <Reply /> Reply
              </button>
              <button onClick={()=>commentdelete(comments.id)} className='mt-5 text-red-600'>
              <Trash2/>
              </button>
            </div>
         
        </div>
        <p className="text-gray-700 text-sm mt-2">{comments.comment}</p>
      </div>
    </div>
     {reply === comments.id && <Commentreply/>}
     </div>
      ))}
    <Commentsinput/>
    </>
  )
}

export default Comments