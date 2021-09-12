import { Line } from 'react-chartjs-2';
import Navbar from '../components/navbar'
import Image from 'next/image';
import Scale from '../components/scale-1-10'
import DatePicker from '../components/datepicker';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <>
        <Navbar/>
        <div className='mt-10 flex items-center justify-center w-screen' >
          Pick A Date To Make An Entry For
        </div>
        <div className='mt-8 flex items-center justify-center w-screen' >
            <DatePicker/>
        </div>
        <div className='mt-10 flex items-center justify-center w-screen' >
          On a Scale Of 1-10, How Healthy Did You Eat On The Selected Date?
        </div>
        <div className='mt-10 flex items-center justify-center w-screen'>
            <Scale/>
        </div>
        <div className='mt-10 flex items-center justify-center w-screen' >
          On a Scale Of 1-10, Rate Your Well-being On The Selected Date
        </div>
        <div className='mt-10 flex items-center justify-center w-screen'>
            <Scale/>
        </div>
        <div className='mt-10 flex items-center justify-center w-screen' >
            <Link href={'/dashboard'} passHref>
            <button
                type="button"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit
            </button>
            </Link>
        </div>
        </>
    )
}
