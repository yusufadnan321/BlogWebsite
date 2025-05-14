import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../schema/loginSchema'
import { NavLink } from 'react-router'

function Authorlogin() {

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues:{
      email:"",
      password:"",
    }
  })
  
  return (
    
    <form onSubmit={form.handleSubmit()}>
      <div className='flex justify-center bg-cover bg-center min-h-screen' style={{backgroundImage:"url('/image2.png')"}}>
        <div className='bg-transparent border-2 border-black backdrop-blur-md w-[400px] h-[500px] rounded mt-20 '>

            <h2 className='font-bold text-2xl text-center mt-4'>Log In To Your Account</h2>
            <h3 className='font-bold ml-10 mt-8 '>Enter Your Email</h3>
            <input className='ml-10 mt-2 rounded border-1 focus:outline-none  border-black p-2 w-[300px]' type="text" placeholder='Email ' {...form.register("email")} />
            <p className="text-red-600 mt-4 ml-10">{form.formState.errors.email?.message}</p>
            <h3 className='font-bold ml-10 mt-8 '>Enter Your Password</h3>
            <input className='ml-10 mt-2 rounded border-1 focus:outline-none border-black p-2 w-[300px]' type="password" placeholder='Password' {...form.register("password")} />
            <p className="text-red-600 mt-4 ml-10">{form.formState.errors.password?.message}</p>
            <div className='flex justify-center' >
                <button className='bg-white px-6 py-4 rounded-2xl hover:shadow-2xl hover:shadow-black mt-[20px] font-bold border border-white  hover:bg-black hover:text-white duration-300 transition-all ease-in-out' type='submit' >Log In</button>
            </div>

            <div className='flex justify-center space-x-6 mt-8 font-bold '>
                <button className='relative cursor-pointer group hover:text-white duration-300 transition-all ease-in-out'><NavLink to="/authorform" end>Create Account</NavLink> 
                  <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
                </button>
                <button className='relative cursor-pointer group hover:text-white duration-300 transition-all ease-in-out'>Forgot Password ?
                    <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full'></span>
                </button>
            
            </div>
        </div>
      </div>
    </form>
  )
}

export default Authorlogin