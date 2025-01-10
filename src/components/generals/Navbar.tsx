'use client'
import Link from 'next/link'
import { useGlobalState } from '@/context/GlobalContext'

const Navbar = () => {
    const {user, handleLogout} = useGlobalState();

    const LoginSection = () =>{
      if(!user.email || user?.email === "") return <div className='flex' suppressHydrationWarning >
      <Link href="/login" className='text-xs mr-4 text-slate-100'>Login</Link>
      </div>;
      return (
<button className='bg-neutral-300 p-2 px-4 rounded-md text-neutral-900'
        onClick={handleLogout}
        >Logout</button>
      )
    }

  return (
    <nav className='flex items-center justify-between p-5 bg-zinc-800'>
        <Link href={"/"} className='text-sky-200 text-lg'>Sample Site</Link>
        <div className='flex gap-2 items-center'>
        {user?.email !== "" ?
        <button className='bg-neutral-300 p-2 px-4 rounded-md text-neutral-900'
        onClick={handleLogout}
        >Logout</button>
        :
        <div className='flex' suppressHydrationWarning >
        <Link href="/login" className='text-xs mr-4 text-slate-100'>Login</Link>
        </div>
        }
        </div>
    </nav>
  )
}

export default Navbar