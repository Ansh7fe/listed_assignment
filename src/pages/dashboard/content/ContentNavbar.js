import { InputBase } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../../styles/dashboard.module.css';
import BellIcon from '../../../assets/images/Vector-9.png';
import Image from 'next/image';
import ProfileIcon from '../../../assets/images/image 1-2.png'
const ContentNavbar = () => {
	return (
		<div className={styles.navbar}>
			<h2>Dashboard</h2>
			<div className={styles.navbar_utility}>
				<div className={styles.searchbar}>
					<InputBase placeholder='Search' sx={{
						paddingLeft: '15px'
					}} />
					<SearchIcon sx={{
						color: '#858585',
						marginRight: '10px'
					}} />
				</div>
				<Image src={BellIcon} alt='bell' />
				<Image src={ProfileIcon} className={styles.profile_image} alt='pro' />
			</div>

		</div>
	)
}

export default ContentNavbar