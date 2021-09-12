import { Line } from 'react-chartjs-2';
import Navbar from '../components/navbar'
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  return (
      <>
      <Navbar/>
      <div className='content-center'>
        <div className="bg-gray-50 pt-12 sm:pt-8">
          <div className="mt-2 pb-8 bg-white sm:pb-8">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50" />
              <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-2">
                <div className="max-w-3xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-100 rounded-lg  p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          9
                        </span>
                      </dt>
                      <dd className="order-1 text-1xl font-extrabold text-indigo-600">Mood Rating Today</dd>
                    </div>
                    <div className="flex flex-col border-t border-b  border-gray-100  rounded-lg  p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          3
                        </span>
                      </dt>
                      <dd className="order-1 text-1xl font-extrabold text-indigo-600">Food Rating Today</dd>
                    </div>
                    <div className="bg-indigo-500 flex flex-col border-t border-gray-100 rounded-lg  p-6 text-center sm:border-0 sm:border-l">
                      <a href='entry'>
                        <button>
                          <dd className="order-1 text-1xl font-extrabold text-gray-100">
                            Add New Entry
                          </dd>
                          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                            <Image className="block lg:hidden w-auto"  src='/plus.png' width={20} height = {20} alt='plus'/>
                          </dt>
                        </button>
                      </a>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-lg justify-center bg-white shadow overflow-hidden mx-64 flex justify-center items-center w-3/5'>
          <Line
            data={{
              labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday', 'Saturday'],
              datasets: [
                {
                  label: 'Food Ratings',
                  backgroundColor: ['#6cc644'],
                  hoverBackgroundColor: ['#2BCC1C'],
                  data: [1,4,6,9,2,5,9],
                  spanGaps: true,
                },
                {
                  label: 'Mood Ratings',
                  backgroundColor: ['#4a5ae4'],
                  hoverBackgroundColor: ['#4a5ae4'],
                  data: [1,4,4,8,2,5,1],
                  spanGaps: true,
                },
              ],
            }}
          /> 
        </div>
      </div>
    </>
  )
}
