import { useState } from 'react'
import Link from 'next/link'
import { 
  FaThLarge, 
  FaEnvelope, 
  FaCalendar, 
  FaUserMd, 
  FaUsers, 
  FaBed, 
  FaWallet 
} from 'react-icons/fa'
import styles from '../styles/sidebar.module.css'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: FaThLarge, label: 'Dashboard', link: '/dashboard' },
    { id: 'email', icon: FaEnvelope, label: 'Email', link: '/email' },
    { id: 'calendar', icon: FaCalendar, label: 'Calendar', link: '/calendar' },
    { id: 'doctors', icon: FaUserMd, label: 'Doctors', link: '/doctors' },
    { id: 'patients', icon: FaUsers, label: 'Patients', link: '/patients' },
    { id: 'rooms', icon: FaBed, label: 'Room Allotment', link: '/rooms' },
    { id: 'payments', icon: FaWallet, label: 'Payments', link: '/payments' },
  ]

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/medical-logo.png" alt="Medical Logo" />
        <span>Medical</span>
      </div>

      <div className={styles.profile}>
        <img src="/doctor-avatar.png" alt="Doctor Profile" className={styles.avatar} />
        <div className={styles.profileInfo}>
          <h3>Dr. Kiran Patel</h3>
          <p>Administrator</p>
        </div>
      </div>

      <nav className={styles.navigation}>
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link 
              href={item.link} 
              key={item.id}
              className={`${styles.navItem} ${activeItem === item.id ? styles.active : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <Icon className={styles.icon} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}