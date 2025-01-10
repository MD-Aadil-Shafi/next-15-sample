import Button from '@/components/utils/Button';
import Heading from '@/components/utils/Heading';
import { getSingleBlog } from '@/sampleApiActions/sampleApiAction';

type blogDataType = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export async function generateMetadata({params}:{params: {id: string}}) {
  const {id} = await params;
  const blogData:blogDataType = await getSingleBlog(id);

  return {
    title: `${blogData.title}`,
    description: blogData.body,
  };
}
export async function getServerSideProps({ params }: { params: { id: string } }) {
  const blogData: blogDataType = await getSingleBlog(params.id);

  return {
    props: {
      blogData,
    },
  };
}


const page = async({params}:{params: {id: string}}) => {
  
    const {id} = await params;
  const blogData:blogDataType = await getSingleBlog(id);


  console.log('single post data',blogData)
  const style = 'font-bold mb-3'
  return (
    <>
    
    <section className='text-slate-600'>
      <Heading title="Blog Detail"/>
      <p className='text-lg'>Blog Id: <span className={style}>{blogData?.id}</span></p>
      <p className='text-lg'>Blog Title: <span className={style}>{blogData?.title}</span></p>
      <p className='text-lg mb-5'>Blog Description: <span className={style}>{blogData?.body}</span></p>

      <Button title='Back' link='/blog'/>
    </section>
    </>
  )
}

export default page