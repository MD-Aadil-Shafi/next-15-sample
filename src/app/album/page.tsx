import Link from 'next/link'

const Page = () => {
  return (
    <section>
      <div className='my-20 text-center'>
        <Link href={'/album/2'}>View album no. 2</Link>
      </div>
    </section>
  )
}

export default Page