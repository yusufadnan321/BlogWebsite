import React from 'react'

function Banner() {
  return (
    <div className='h-[500px] w-full relative '>
         <img src="/image.png " alt="" className='absolute insert-0 w-full z-0 object-cover h-[450px]' /> 
       <div className=" relative z-10 flex flex-col items-center justify-center text-center pt-48">
        <h1 className="text-7xl font-extrabold tracking-tight ">SUBLIME</h1>
        <p className="text-lg mt-4 font-semibold">YOUR WORDS COME FIRST</p>
      </div>
    </div>
  )
}

export default Banner