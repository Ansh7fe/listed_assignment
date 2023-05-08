import { style } from '@mui/system'
import React from 'react'
import styles from '../../../styles/dashboard.module.css'
const Schedule = () => {
    return (
        <div className={styles.schedule_card}>
            <div className={styles.cardHeader}>
                <h4>Today’s schedule</h4>
                <p className={styles.fontLight}>See All</p>
            </div>
            <div className={styles.meeting_container}>
                <div className={styles.meeting1}>
                    <p className={styles.fontBold}>Meeting with suppliers from Kuta Bali</p>
                    <p className={styles.fontLight}>14.00-15.00</p>
                    <p className={styles.fontLight}>at Sunset Road, Kuta, Bali </p>
                </div>
                <div className={styles.meeting2}>
                    <p className={styles.fontBold}>Check operation at Giga Factory 1</p>
                    <p className={styles.fontLight}>14.00-15.00</p>
                    <p className={styles.fontLight}>at Sunset Road, Kuta, Bali </p>
                </div>
            </div>
        </div>
    )
}

export default Schedule