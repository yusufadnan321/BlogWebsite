import React from 'react'
import { NavLink } from 'react-router'

function Authorsidebar() {
  return (
    <div className="w-64 bg-white p-6 border-r border-gray-300 min-h-screen">

      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2 text-lg font-semibold ">
      <li className="hover:text-blue-500 cursor-pointer"> <NavLink to="/author" end> Create your post </NavLink></li>
        <li className="hover:text-blue-500 cursor-pointer"> <NavLink to="/imageup" end> Image Upload </NavLink></li>
        <li className="hover:text-blue-500 cursor-pointer"><NavLink to="/QR" end >QR</NavLink></li>
        <li className="hover:text-blue-500 cursor-pointer">Settings</li>
      </ul>

    </div>
  )
}

export default Authorsidebar