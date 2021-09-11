import { Line } from 'react-chartjs-2';
import Navbar from '../components/navbar'

export default function Dashboard() {
  return (
      <>
      <Navbar/>
      <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="mt-2 pb-8 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Pepperoni</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">Mood</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">Food</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  <button>Daily Entry</button></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="rounded-lg bg-white shadow w-full 'mt-12 mb-12 mx-12 pr-20">
       <div className='mt-12 mb-12 mx-12'>
        <Line
          data={{
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday', 'Saturday'],
            datasets: [
              {
                label: 'title',
                backgroundColor: ['#6cc644'],
                hoverBackgroundColor: ['#2BCC1C'],
                data: [1,4,6,9,2,5,9],
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
