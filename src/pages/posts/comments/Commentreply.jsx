import { Reply, Trash2 } from 'lucide-react'
import React from 'react'

function Commentreply() {
  return (
    <div className="mt-2 ml-15 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img  className="w-8 h-8 rounded-full " src="https://i.pravatar.cc/40" alt="avatar" />
            <span className="font-semibold">comments.userName</span>
            <span className="text-gray-400 text-sm">comments.date</span>
          </div>

            <div >
              <button  className="text-blue-500 flex items-center gap-1 text-sm font-semibold">
              <Reply /> Reply
              </button>
              <button className='mt-5 text-red-600'>
              <Trash2/>
              </button>
            </div>
        </div>
        <p className="text-gray-700 text-sm mt-2">comments.comment</p>
      </div>
  )
}

export default Commentreply