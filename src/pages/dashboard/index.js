
import React from 'react'
import styles from '../../styles/dashboard.module.css'
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
const Dashboard = () => {
	return (
		<div className={styles.dashboard_container}>
			<Sidebar />
			<Content />
		</div>
	)
}

export default Dashboard