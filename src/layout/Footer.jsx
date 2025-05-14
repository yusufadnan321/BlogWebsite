import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

export const card = [
  {
    id:"1",
    image: '/image.png',
    para:'An exceedingly simple guide to keeping a journal',
    date:'December 15, 2016',
  },
  {
    id:'2',
    image: '/image.png',
    para:'App’s update reaches more customers',
    date:'December 15, 2016',
  },
  {
    id:'3',
    image: '/image.png',
    para:'Check out these beautiful hand lettered cards',
    date:'December 15, 2016',
  }
]
    


function Footer() {
  return (
    <footer className='bg-black text-white py-10 px-4 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10 '>
        <div>
          <p className='text-sm mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime aut, reiciendis id laborum quia eveniet quibusdam consequatur aperiam quam temporibus voluptates, fugit, similique debitis vel deserunt maiores aliquam adipisci.
          </p>
          <div className='flex space-x-4 text-lg'>
            <i><Facebook/></i>
            <i><Instagram/></i>
            <i><Twitter/></i>
          </div>
        </div>

        <div>
            <h4 className='text-sm font-semibold mb-4 uppercase'>Latest Posts</h4>
            <div className='space-y-4 text-sm'>
              {card.map((item)=>(
                <div key={item.id} className='flex item-start space-x-4'>
                    <img src={item.image} alt="" className='w-10 h-10 rounded-full object-cover' />
                    <div>
                        <p>{item.para}</p>
                        <p>{item.date}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div>
          <h4 className='text-sm font-semibold mb-4 uppercase'>Tags</h4>
          <div></div>
        </div>


        <div>
          <h4 className='text-sm font-semibold mb-4 uppercase'>Newsletter</h4>
          <p className='text-sm mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum, officia consectetur alias, quia nam dolor inventore quos esse, aliquam voluptates repellat repellendus deserunt beatae repudiandae earum accusamus numquam harum.
          </p>
          <div className='flex space-x-2'>
            <input type="email" placeholder='Your E-Mail' className='px-4 py-2 text-black rounded w-full bg-white' />
            <button className='bg-blue-600 text-white px-4 py-2 font-bold rounded hover:bg-green-600 transition-all ease-in-out duration-300'>Submit</button>
          </div>
        </div>


    </footer>
  )
}

export default Footer