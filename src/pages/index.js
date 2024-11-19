import { useState } from 'react'
import Sidebar from '@/components/sidebar'
import MetricCard from '../components/MetricCard'
import PatientChart from '../components/PatientChart'
import HospitalSurvey from '../components/HospitalSurvey'
import PatientTable from '../components/PatientTable'
import styles from '../styles/Home.module.css'

export default function Dashboard() {
  const [currentLanguage, setCurrentLanguage] = useState('english')

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Dashboard</h1>
          <div className={styles.headerRight}>
            <select 
              value={currentLanguage} 
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className={styles.languageSelect}
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
            <div className={styles.userInfo}>Dr. Kiran</div>
          </div>
        </header>

        <div className={styles.metricsGrid}>
          <MetricCard
            title="New Patients"
            value="125"
            trend="up"
            color="green"
          />
          <MetricCard
            title="OPD Patients"
            value="218"
            trend="up"
            color="blue"
          />
          <MetricCard
            title="Today's Operations"
            value="25"
            trend="stable"
            color="purple"
          />
          <MetricCard
            title="Visitors"
            value="2,479"
            trend="up"
            color="orange"
          />
        </div>

        <div className={styles.chartsGrid}>
          <HospitalSurvey />
          <div className={styles.smallCharts}>
            <PatientChart 
              title="New Patient"
              data={{
                overall: "35.80%",
                monthly: "45.20%",
                daily: "5.50%"
              }}
            />
            <PatientChart 
              title="Heart Surgeries"
              data={{
                overall: "20.60%",
                monthly: "65.30%",
                daily: "4.90%"
              }}
            />
            <PatientChart 
              title="Medical Treatment"
              data={{
                overall: "38.40%",
                monthly: "52.49%",
                daily: "4.70%"
              }}
            />
          </div>
        </div>

        <PatientTable />
      </main>
    </div>
  )
}