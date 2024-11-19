import { FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa'
import styles from '../styles/MetricCard.module.css'

export default function MetricCard({ title, value, trend, color }) {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <FaArrowUp className={styles.trendUp} />
      case 'down':
        return <FaArrowDown className={styles.trendDown} />
      default:
        return <FaMinus className={styles.trendStable} />
    }
  }

  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <span className={styles.value}>{value}</span>
        {getTrendIcon()}
      </div>
    </div>
  )
}