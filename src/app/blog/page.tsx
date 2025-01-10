import Button from '@/components/utils/Button';
import Heading from '@/components/utils/Heading';
import SEOHeader from '@/components/utils/SEOHeader';
import { getSampleBlogs } from '@/sampleApiActions/sampleApiAction';
import { describe } from 'node:test';
// import useMetadata from '@/components/utils/seoHooks';

type sampleData = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export const metadata = {
    title: 'Blog in next js 15',
    description: 'Sample blog section for next js 15',
    keywords: 'blog, next js, api in next js, ssr in next js'
  };

const page = async() => {

    await new Promise(resolve => setTimeout(resolve, 2000));
    const sampleData = await getSampleBlogs();
    console.log('s', sampleData)
    // useMetadata('Blog in next js 15', 'Sample blog section for next js 15')

  return (
    <div>
        {/* <SEOHeader title='Blog in next js 15'
        desc='Sample blog section for next js 15'
        keyword='blog, next js, api in next js, ssr in next js'/> */}
        <Heading title='API data of users'/>
        <ul className='space-y-4 p-4 text-slate-600'>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>User&nbsp;Id</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {sampleData?.map((item:sampleData, index:number)=>(
                <tr className='cursor-pointer' key={index}>
                    <td>{item?.id}</td>
                    <td>{item?.userId}</td>
                    <td>{item?.title}</td>
                    <td>{item?.body}</td>
                    <td><Button title='View' link={`/blog/${item?.id}`}/></td>
                </tr>
                ))}
                </tbody>
            </table>
        </ul>
    </div>
  )
}

export default page