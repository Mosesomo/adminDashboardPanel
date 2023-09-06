
import {BiLogoProductHunt, BiCategory} from 'react-icons/bi'
import {BsPeopleFill} from 'react-icons/bs'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const Home = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <div className="w-full text-white p-7">
        <h1 className='font-bold text-xl'>DASHBOARD</h1>
        <div className='grid md:grid-cols-4 gap-3 w-full mt-8'>
            <div className='bg-green-400 p-6 md:p-3 py-6 flex flex-col gap-8 rounded cursor-pointer hover:scale-90 duration-300'>
                <h2 className='flex gap-2 font-bold'>PRODUCTS<BiLogoProductHunt size={25}/></h2>
                <h1 className='font-bold text-xl'>700</h1>
            </div>
            <div className='bg-sky-600 p-6 md:p-1 py-6 flex flex-col gap-8 rounded cursor-pointer hover:scale-90 duration-300'>
                <h2 className='flex gap-2 font-bold'>CUSTOMERS<BsPeopleFill size={25}/></h2>
                <h1 className='font-bold text-xl'>67</h1>
            </div>
            <div className='bg-red-600 p-6 md:p-3 py-6 flex flex-col gap-8 rounded cursor-pointer hover:scale-90 duration-300'>
                <h2 className='flex gap-2 font-bold'>ALERTS<MdOutlineNotificationsActive size={25}/></h2>
                <h1 className='font-bold text-xl'>54</h1>
            </div>
            <div className='bg-orange-400 p-6 md:p-1 py-6 flex flex-col gap-8 rounded cursor-pointer hover:scale-90 duration-300'>
                <h2 className='flex gap-2 font-bold'>CATEGORIES<BiCategory size={25}/></h2>
                <h1 className='font-bold text-xl'>34</h1>
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-6 mt-9 md:mt-20 '>
            <ResponsiveContainer width="100%" aspect={1}>
                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" aspect={1}>
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Home
