import { Line } from 'react-chartjs-2';
import Navbar from '../components/navbar'

export default function Dashboard() {
  return (
      <>
      <Navbar/>
      <div className="grid grid-cols-1 gap-4 items-start lg:flex lg:space-x-4">
      <div className="mt-4">
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
