'use client'
import Link from 'next/link'
import React from 'react'
import { useGlobalState } from '@/context/GlobalContext'

const Navbar = () => {
    const {user, handleLogout} = useGlobalState();
  return (
    <div className='flex items-center justify-between p-5 bg-zinc-800'>
        <Link href={"/"} className='text-sky-200 text-lg'>Sample Site</Link>

        {user?.email ?
        <div className='flex gap-2 items-center'>
        <button className='bg-neutral-300 p-2 px-4 rounded-md text-neutral-900'
        onClick={handleLogout}
        >Logout</button>
        </div>
        :
        <div className='flex gap-3 items-center'>
        <Link href="/login" className='text-xs'>Login</Link>
        <Link href="/register" className='text-xs'>Register</Link>
        </div>
        }
    </div>
  )
}

export default Navbar