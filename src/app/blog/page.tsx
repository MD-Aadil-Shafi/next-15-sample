import Button from '@/components/utils/Button';
import Heading from '@/components/utils/Heading';
import { getSampleBlogs } from '@/sampleApiActions/sampleApiAction';
import Link from 'next/link';

type sampleData = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const page = async() => {

    await new Promise(resolve => setTimeout(resolve, 2000));
    const sampleData = await getSampleBlogs();
    console.log('s', sampleData)

  return (
    <div>
        <Heading title='API data of users'/>
        <ul className='space-y-4 p-4'>
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
                {sampleData?.map((item:sampleData)=>(
                <tr className='cursor-pointer'>
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