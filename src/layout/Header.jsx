import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-sm">
      <div className="text-2xl font-bold">CONEY</div>
      <ul className="flex space-x-6 text-sm font-medium list-none">
        <li>HOME</li>
        <li>OPTIONS</li>
        <li>PAGES</li>
        <li>SHOP</li>
        <li>STORY</li>
        <li>AUTHOR</li>
        <li>
          <span className="inline-flex space-x-3 ml-6">
            <i><Facebook/></i>
            <i><Instagram/></i>
            <i><Twitter/></i>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Header