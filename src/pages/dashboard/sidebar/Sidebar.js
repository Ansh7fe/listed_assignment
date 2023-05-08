import React from 'react'
import styles from '../../../styles/dashboard.module.css';
import SidebarItems from './SidebarItems';
import DashboardIcon from '../../../assets/images/dashboard_icon.png';
import TransactionIcon from '../../../assets/images/transaction_icon.png';
import ScheduleIcon from '../../../assets/images/schedule_icon.png';
import UserIcon from '../../../assets/images/user_icon.png';
import SettingIcon from '../../../assets/images/setting_icon.png'
const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<h1 className={styles.companyName}>Board.</h1>
			<div className={styles.sidebar_itemsList}>
				<div className={styles.sidebar_links}>
					<SidebarItems name='Dashboard' logo={DashboardIcon} />
					<SidebarItems name='Transactions' logo={TransactionIcon} />
					<SidebarItems name='Schedules' logo={ScheduleIcon} />
					<SidebarItems name='Users' logo={UserIcon} />
					<SidebarItems name='Settings' logo={SettingIcon} />
				</div>
				<div className={styles.sidebar_bottom}>
					<p className={styles.sidebar_bottomLink}>Help</p>
					<p className={styles.sidebar_bottomLink}>Contact Us</p>
				</div>
			</div>

		</div>
	)
}

export default Sidebar