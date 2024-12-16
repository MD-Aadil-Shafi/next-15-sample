'use client'

const error = ({error}: {error: Error}) => {
  
    return (
    <div className='my-10 text-center'>
        <p className="text-xl text-red-500">Unable To Load Data</p>
    </div>
  )
}

export default error