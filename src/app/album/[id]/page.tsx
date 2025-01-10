import Heading from '@/components/utils/Heading';
import { getAlbum } from '@/sampleApiActions/sampleApiAction';

type albumDataType = {
  userId: number,
  id: number,
  title: string
}

const page = async({params}:{params: {id: string}}) => {
  const {id} = await params;
  const albumData:albumDataType = await getAlbum(id);
  console.log('album data',albumData)
  return (
    <section className='text-slate-600'>
      <Heading title='Sample Album'/>
      <p>Album Id: <span className='font-bold'>{albumData?.id}</span></p>
      <p>Album Title: <span className='font-bold'>{albumData?.title}</span></p>
    </section>
  )
}

export default page