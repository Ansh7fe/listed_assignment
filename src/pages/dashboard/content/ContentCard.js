import React from 'react'
import styles from '../../../styles/dashboard.module.css'
import Image from 'next/image'
const ContentCard = ({ image, cardHeader, cardContent, bColor }) => {
	return (
		<div className={styles.card} style={{ backgroundColor: bColor }}>
			<div className={styles.cardLogo}>
				<Image src={image} />
			</div>
			<div className={styles.cardContent_container}>
				<p className={styles.cardContent_header}>{cardHeader}</p>
				<p className={styles.cardContent_value}>{cardContent}</p>
			</div>
		</div>
	)
}

export default ContentCard