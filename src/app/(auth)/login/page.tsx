'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useGlobalState } from '@/context/GlobalContext'

const page = () => {

    const {user, handleUser} = useGlobalState();
    const router = useRouter()

    useEffect(()=>{
        if(user?.email) router.push('/')
    },[user])

    const [data, setData] = useState({
        email: '',
        password:'',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = () =>{
        if(!data.email || !data.password) return alert("Email and Password is required.")
        handleUser({name:"Test", email:data.email})  
        router.push('/')
    }

  return (
    <div
  className="max-w-md mx-auto my-20 relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
>
  <h2 className="text-2xl font-bold text-white mb-6">Login</h2>

  <section>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-300" htmlFor="email"
        >Email Address</label>
      <input
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        name="email"
        onChange={handleChange}
        id="email"
        type="email"
        
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-300" htmlFor="name"
        >Password</label>
      <input
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        type="password"
        name='password'
        onChange={handleChange}
      />
    </div>

    <div className="flex justify-end">
      <button
        onClick={handleSubmit}
        className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
      >
        Login
      </button>
    </div>

  </section>
</div>
  )
}

export default page