import React from 'react'
import Authorsidebar from './Authorsidebar'
import Layout from '../../../layout'

function Author() {
  return (
    <Layout>
    <div className='flex'>
      <Authorsidebar/>
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Write Your Story </h1>

      <input
        type="text"
        placeholder="Enter Title"
        className="w-full p-3 border border-gray-400 rounded mb-5 focus:outline-none focus:shadow-md"
      />

      <textarea
        placeholder="Enter your Story here..."
        rows={10}
        className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:shadow-md"
      ></textarea>
      <div className='flex justify-center'>
      <button type="submit" className=" mb-[30px] mt-[30px] bg-white hover:shadow-2xl hover:shadow-black
              font-bold text-2xl w-[300px] h-14 rounded hover:bg-black hover:text-white
              duration-300 transition-all ease-in-out ">Submit</button>
      </div>
    </div>
    
    </div>
    </Layout>
  )
}

export default Author