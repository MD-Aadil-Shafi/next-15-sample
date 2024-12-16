import React from 'react'
import Button from '../utils/Button'

type CardType = {
    item:{
        title: string,
    link: string,
    description?:string,
    disabled:boolean,
    }
}


const Card = ({item}:CardType) => {
  return (
    <div className='w-[320px] min-h-[160px] p-3 rounded-md bg-zinc-700' key={item?.title}>
        <p className='font-bold mb-3'>{item?.title}</p>
        {item?.disabled ? 
        <p className='mb-3 text-xs text-blue-400'>{item?.link}</p>
        :
        <Button title='View' link={item?.link}/>
        }
        <p className='mt-3'>{item?.description}</p>
    </div>
  )
}

export default Card