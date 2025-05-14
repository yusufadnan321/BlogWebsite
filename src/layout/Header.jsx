import { Facebook, Instagram, Search,  Twitter } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-6  bg-white/80 backdrop-blur-sm  border-b-1 border-b-black border-double">
      <div className="text-2xl font-bold cursor-pointer">CONEY</div>
        <div className='flex items-center space-x-3'>
            <ul className="flex space-x-6 text-sm font-bold list-none cursor-pointer ml-[150px] [&>*]:hover:text-blue-500">
              <li><NavLink to="/" end> HOME</NavLink></li>
              <li>OPTIONS</li>
              <li>PAGES</li>
              <li>SHOP</li>
              <li>STORY</li>
              <li><NavLink to="/authorlogin" end> AUTHOR</NavLink></li>
              <li> <NavLink to="/adminlogin" end>ADMIN</NavLink></li>
            </ul>
        </div>
        <div className='flex'>
            <span className=' flex space-x-3'>
              <input className='border-2 border-black focus:outline-none rounded w-[200px] px-2 font-bold ' type="text" placeholder='Search'  />
              <i className='hover:text-blue-500'><Search/></i>
            </span>
            <span className="inline-flex space-x-3 ml-6 mr-5  ">
              <Facebook className="fill-black cursor-pointer hover:fill-blue-600 hover:text-blue-600" />
              <Twitter className="fill-black cursor-pointer hover:fill-blue-400 hover:text-blue-400" />
              <Instagram className=" cursor-pointer hover:text-red-600" />
            </span>
            </div>
    </div>
  )
}

export default Header