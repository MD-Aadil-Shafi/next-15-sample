import Heading from '@/components/utils/Heading'
import Link from 'next/link'

const Page = async() => {

  return (
    <section className='text-slate-600'>
      <Heading title='Album Sample'/>
      <div className='my-20 text-center'>
        <Link href={'/album/2'}>View album no. 2</Link>
      </div>
    </section>
  )
}

export default Page