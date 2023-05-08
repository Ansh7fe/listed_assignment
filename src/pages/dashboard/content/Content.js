import React from 'react'
import styles from '../../../styles/dashboard.module.css'
import ContentCard from './ContentCard';
import RevenueIcon from '../../../assets/images/card1.png'
import TransactionIcon from '../../../assets/images/card2.png';
import LikeIcon from '../../../assets/images/Vector-7.png';
import UserIcon from '../../../assets/images/Vector-8.png';
import LineChartExample from './LineChart';
import PieChartExample from './Piechart';
import Schedule from './Schedule';
import ContentNavbar from './ContentNavbar';
const Content = () => {
	return (
		<div>
			<div className={styles.content_container}>
				<ContentNavbar />
				<div className={styles.cards_container}>
					<ContentCard image={RevenueIcon} cardContent='$120000' cardHeader='Total Revenue' bColor='#DDEFE0' />
					<ContentCard image={TransactionIcon} cardContent='$120000' cardHeader='Total Transactions' bColor='#F4ECDD' />
					<ContentCard image={LikeIcon} cardContent='11,200' cardHeader='Total Likes' bColor='#EFDADA' />
					<ContentCard image={UserIcon} cardContent='1400' cardHeader='Total Users' bColor='#DEE0EF' />
				</div>
				<div className={styles.chart_container}>
					<p className={styles.chart_header}>Activities</p>
					{/* Date picker */}
					<p className={styles.chart_datePicker}>May - June 2021</p>
					<div className={styles.chart}>
						<LineChartExample />
					</div>
				</div>
				<div className={styles.dashboard_bottom}>
					<div className={styles.dashboardBottom_cards}>
						<PieChartExample />
					</div>
					<div className={styles.dashboardBottom_cards}>
						<Schedule />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Content