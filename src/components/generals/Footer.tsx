import React from 'react'

const Footer = () => {
  return (
    <div className='p-5 text-center bg-zinc-800'>
        <p>&copy; {new Date().getFullYear()} Sample Site</p>
    </div>
  )
}

export default Footer