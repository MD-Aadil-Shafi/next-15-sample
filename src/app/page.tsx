'use client'
import Card from '@/components/home/Card';
import Heading from '@/components/utils/Heading'
import SEOHeader from '@/components/utils/SEOHeader';
import { useGlobalState } from '@/context/GlobalContext'
import { homeData } from '@/data/homeData';
// import Head from 'next/head';

const Home = () => {
  const {user} = useGlobalState();
  return (
    <>
    <SEOHeader 
    title='Sample Next 15'
    desc='A sample next js 15 app'
    keyword='next js, sample app, context in next js, seo for next js, destm'
    />
    {/* <Head>
    <title>Sample Next 15</title>
        <meta
          name='description'
          content='A sample next js 15 app'
          key='desc'
        />
        <meta name="keywords" content='next js, sample app, context in next js, seo for next js, destm'></meta>
    </Head> */}
    <section>
      <Heading title='Home'/>
      {user?.email ? 
      <div className='flex items-center gap-2 flex-wrap'>
      {homeData?.map((item, index)=>(
        <Card item={item} key={index}/>
      ))}
      </div>
      :
      <p className='text-center my-20'>Please Login in to continue.</p>
    }
    </section>
    </>
  )
}

export default Home