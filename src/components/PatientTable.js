import styles from '../styles/PatientTable.module.css'

export default function PatientTable() {
  const patients = [
    {
      id: 1,
      name: 'Jens Brincker',
      doctor: 'Dr.Kenny Josh',
      date: '27/05/2016',
      disease: 'Pneumonia',
      room: '101',
    },
    {
      id: 2,
      name: 'Mark Hay',
      doctor: 'Dr. Mark',
      date: '26/05/2017',
      disease: 'Diabetes',
      room: '105',
    },
    // Add more patient data as needed
  ]

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableTitle}>Admit Patient List</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Assigned Doctor</th>
            <th>Date of Admit</th>
            <th>Disease</th>
            <th>Room No</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.doctor}</td>
              <td>{patient.date}</td>
              <td>
                <span className={styles.disease}>{patient.disease}</span>
              </td>
              <td>{patient.room}</td>
              <td>
                <button className={styles.editButton}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}