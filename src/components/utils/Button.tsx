import Link from 'next/link'
import React from 'react'

const Button = ({title, link}:{title: string, link:string}) => {
  return (
    <Link href={link} className='p-2 bg-indigo-500 rounded-md px-5 mb-3 text-white'>{title}</Link>
  )
}

export default Button