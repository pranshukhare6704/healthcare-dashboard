import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import styles from '../styles/HospitalSurvey.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function HospitalSurvey() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Hospital Survey',
        data: [30, 45, 35, 25, 40, 50, 35, 45, 30, 35, 25, 20],
        fill: false,
        borderColor: '#4a90e2',
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Hospital Survey',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 60,
      },
    },
  }

  return (
    <div className={styles.surveyCard}>
      <Line data={data} options={options} />
    </div>
  )
}