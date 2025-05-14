import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'


function Posts() {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] bg-white text-center px-4">
      <p className="text-xs text-blue-600 font-semibold uppercase">Innovation, Web</p>
      <h1 className="text-3xl font-bold text-black mt-2">Elements of Living Lightly</h1>
      <p className="text-sm font-semibold text-black mt-2">December 16, 2016</p>
      <p className="text-gray-500 max-w-2xl mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo …
      </p>
      <button className="'bg-white px-6 py-4 rounded-2xl hover:shadow-2xl hover:shadow-black mt-[20px]
       font-bold border border-white  hover:bg-black hover:text-white duration-300 transition-all ease-in-out">
        Read More
      </button>
      <div className="flex gap-4 mt-6 text-black">
        <Facebook className="fill-black cursor-pointer hover:fill-blue-600 hover:text-blue-600" />
        <Twitter className="fill-black cursor-pointer hover:fill-blue-400 hover:text-blue-400" />
        <Instagram className=" cursor-pointer hover:text-red-600" />
      </div>
    </div>
  )
}

export default Posts