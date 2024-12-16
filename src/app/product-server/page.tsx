import Heading from '@/components/utils/Heading';
import { getSampleUsers } from '@/sampleApiActions/sampleApiAction';

type sampleData = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const page = async() => {

    await new Promise(resolve => setTimeout(resolve, 2000));
    const sampleUsers = await getSampleUsers()

  return (
    <div>
        <Heading title='API data of users'/>
        <ul className='space-y-4 p-4'>
            {sampleUsers?.map((user:sampleData)=>(
                <li key={user.id}>
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    </div>
  )
}

export default page