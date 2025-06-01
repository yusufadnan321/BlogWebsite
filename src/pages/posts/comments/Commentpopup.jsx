import { X } from 'lucide-react'
import React from 'react'
import Comments from './Comments'

function Commentpopup({onClose}) {


  
  return (
    <div className='fixed inset-0 flex justify-center items-center z-50'>
        <div className='absolute inset-0 bg-black opacity-30 backdrop-blur-sm'></div>
            <div className=' relative flex flex-col  rounded p-5 bg-white ' >
            <button onClick={onClose} className='place-self-end hover:text-red-600'><X size={30}/></button>
            <Comments/>
            </div>
            
    </div>
 
  )
}

export default Commentpopup