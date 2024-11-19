import React from 'react'
import { Bar } from 'react-chartjs-2'
import { styled } from '@mui/system'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const ChartCard = styled('div')({
  background: 'white',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
})

const ChartTitle = styled('h3')({
  margin: '0 0 20px 0',
  fontSize: '18px',
  color: '#333',
})

const GrowthGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  marginTop: '20px',
})

const GrowthItem = styled('div')({
  textAlign: 'center',
})

const GrowthLabel = styled('p')({
  margin: '0',
  fontSize: '14px',
  color: '#666',
})

const GrowthValue = styled('p')({
  margin: '5px 0 0 0',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#333',
})

export default function PatientChart({ title, data }) {
  const chartData = {
    labels: ['Overall', 'Monthly', 'Daily'],
    datasets: [
      {
        data: [
          parseFloat(data.overall),
          parseFloat(data.monthly),
          parseFloat(data.daily)
        ],
        backgroundColor: ['#4a90e2', '#50e3c2', '#f5a623'],
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.y}%`
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + '%'
          }
        }
      }
    }
  }

  return (
    <ChartCard>
      <ChartTitle>{title}</ChartTitle>
      <Bar data={chartData} options={options} />
      <GrowthGrid>
        <GrowthItem>
          <GrowthLabel>Overall Growth</GrowthLabel>
          <GrowthValue>{data.overall}</GrowthValue>
        </GrowthItem>
        <GrowthItem>
          <GrowthLabel>Monthly</GrowthLabel>
          <GrowthValue>{data.monthly}</GrowthValue>
        </GrowthItem>
        <GrowthItem>
          <GrowthLabel>Daily</GrowthLabel>
          <GrowthValue>{data.daily}</GrowthValue>
        </GrowthItem>
      </GrowthGrid>
    </ChartCard>
  )
}