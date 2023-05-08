import React from 'react'
import Image from 'next/image';
import styles from '../../../styles/dashboard.module.css'
const SidebarItems = ({ name, logo }) => {
    return (
        <div className={styles.sidebar_item}>
            <Image src={logo} alt={name} />
            <p className={styles.sidebar_itemName}>{name}</p>
        </div>
    )
}

export default SidebarItems