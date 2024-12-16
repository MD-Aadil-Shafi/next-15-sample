import React from 'react'

const Heading = ({title}:{title:string}) => {
  return (
    <h1 className='text-xl mb-3'>{title}</h1>
  )
}

export default Heading