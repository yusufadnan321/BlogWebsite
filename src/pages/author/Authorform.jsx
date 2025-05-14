import React from 'react'
import { useForm } from 'react-hook-form'
import {  formSchema } from '../../schema/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import Layout from '../../layout'

function Authorform() {

  const form = useForm ({
    resolver:zodResolver(formSchema),
    defaultValues:{
      firstName:"",
      lastName:"",
      email:"",
      number:"",
      password:"",
    }
  })

  return (

    <Layout>
    <form onSubmit={form.handleSubmit()}>
      <div className=' flex justify-center bg-cover bg-center min-h-screen bg-gray-200' >
        <div className='text-black font-bold space-y-5 mt-10 ml-20 space-x-5 '>
          <h1 className='text-2xl' > Name </h1>
          <input {...form.register("firstName")} type="text"
           placeholder='Frist name'
           
           className='rounded border-1 focus:outline-none  focus:shadow-lg focus:shadow-black text-black border-black p-3 w-[500px]' />
           {form.formState.errors.firstName &&(
             <p className="text-red-500 ">{form.formState.errors.firstName.message}</p>
            )}
          <input {...form.register("lastName")} type="text"
           placeholder='Last name'
           
           className='rounded border-1 focus:outline-none focus:shadow-lg focus:shadow-black text-black border-black p-3 w-[500px]' />
            {form.formState.errors.lastName &&(
              <p className="text-red-500">{form.formState.errors.lastName.message}</p>
            )}
          <h1 className='text-2xl'>Email</h1>
          <input {...form.register("email")} type="email"
           placeholder='Email'
           
           className='rounded border-1 focus:outline-none focus:shadow-lg focus:shadow-black text-black border-black p-3 w-[1030px]'  />
            {form.formState.errors.email &&(
              <p className="text-red-500">{form.formState.errors.email.message}</p>
            )}
          <h1 className='text-2xl'>Password</h1>
          <input {...form.register("password")} type="password"
           placeholder='Enter Password'
           
           className='rounded border-1 focus:outline-none focus:shadow-lg focus:shadow-black text-black border-black p-3 w-[500px]'  />
           {form.formState.errors.password &&(
             <p className="text-red-500">{form.formState.errors.password.message}</p>
            )}
          <h1 className='text-2xl'>Contact Number</h1>
          <input {...form.register("number")} type="text"
           placeholder='Enter Contect Number'
           
           className='rounded border-1 focus:outline-none focus:shadow-lg focus:shadow-black text-black border-black p-3 w-[1050px]'  />
           {form.formState.errors.number &&(
             <p className="text-red-500">{form.formState.errors.number.message}</p>
            )}
           
          <h1 className='text-2xl'>Date Of Birth</h1>
          <input {...form.register("dateofBirth")} type="date"

          className='rounded border-1 text-black border-black p-3 w-[500px]'  />
          <div className='flex justify-center'>
            <button type="submit" className=" mb-[30px] mt-[30px] bg-white hover:shadow-2xl hover:shadow-black
             font-bold text-2xl w-[300px] h-14 rounded hover:bg-black hover:text-white
             duration-300 transition-all ease-in-out ">Submit</button>
          </div>
        </div>
      </div>
    </form>

    </Layout>
  )
}

export default Authorform