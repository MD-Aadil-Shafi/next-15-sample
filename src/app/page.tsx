'use client'
import Card from '@/components/home/Card';
import Heading from '@/components/utils/Heading'
import { useGlobalState } from '@/context/GlobalContext'
import { homeData } from '@/data/homeData';

const Home = () => {
  const {user} = useGlobalState();
  return (
    <section>
      <Heading title='Home'/>
      {user?.email ? 
      <div className='flex items-center gap-2 flex-wrap'>
      {homeData?.map((item, index)=>(
        <Card item={item}/>
      ))}
      </div>
      :
      <p className='text-center my-20'>Please Login in to continue.</p>
    }
    </section>
  )
}

export default Home