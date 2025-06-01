import React from 'react'

function Commentsinput() {
  return (
    <div className="mt-6 flex gap-4 bg-white p-4 rounded-lg shadow-sm">
      <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" alt="user avatar" />
      <textarea
        className="w-[500px] border rounded-md p-1 text-sm resize-none focus:outline-none focus:shadow-lg focus:shadow-black"
        placeholder="Add a comment..."
      />
      <button className="bg-white px-6 py-4 rounded-2xl hover:shadow-2xl hover:shadow-black
       font-bold border border-white  hover:bg-black hover:text-white duration-300 transition-all ease-in-out">
        SEND
      </button>
    </div>
  )
}

export default Commentsinput