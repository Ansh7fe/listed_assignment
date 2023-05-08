import React from 'react';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';
import styles from '../../../styles/dashboard.module.css'
const data = [
	{ name: 'Basics Tee', value: 55, color: '#98D89E' },
	{ name: 'Custom Short Pants', value: 31, color: '#EE8484' },
	{ name: 'Super Hoodies', value: 14, color: '#F7DC7D' },
];

const COLORS = ['#98D89E', '#EE8484', '#F7DC7D'];

function PieChartExample () {
	return (
		<div className={styles.piechart_card}>
			<div className={styles.pieCardHeader}>
				<h4>Today’s schedule</h4>
				<p className={styles.fontLight}>See All</p>
			</div>
			<div className={styles.piechart_content} >
				<PieChart width={200} height={205} style={{
					position: 'relative',
					top: '-25px'
				}}>
					<Pie
						data={data}
						cx={100}
						cy={120}
						innerRadius={0}
						outerRadius={80}

						fill="#8884d8"
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${ index }`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
				</PieChart>
				<div>
					{data.map((item) =>
					(
						<div key={item.value}>
							<div className={styles.piecard_heading}>
								<div className={styles.colors} style={{ background: item.color }}>
								</div>
								<p className={styles.fontBold}>{item.name}</p>
							</div>
							<p className={styles.fontLight} style={{ marginLeft: '20px' }}>{item.value}</p>
						</div>
					)
					)}
				</div>
			</div>
		</div>

	);
}

export default PieChartExample;
