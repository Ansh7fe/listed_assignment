import React, { useEffect, useState } from 'react';
import styles from '../../../styles/dashboard.module.css'
import axios from 'axios';
const COLORS = ['#98D89E', '#EE8484', '#F7DC7D'];

function PieChartExample () {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData () {
			const response = await axios.get('/api/piechart-api');
			setData(response.data);
		}
		fetchData();
	}, []);
	const [recharts, setRecharts] = useState(null);

	useEffect(() => {
		import('recharts').then((recharts) => {
			setRecharts(recharts);
		});
	}, []);
	if (!recharts) {
		return <div>Loading...</div>;
	}

	const { PieChart, Pie, Cell } = recharts;
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
				}} key='pie-chart-1'>
					<Pie
						data={data}
						cx={100}
						cy={120}
						innerRadius={0}
						outerRadius={80}
						key='pie123'
						fill="#8884d8"
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${ index }`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
				</PieChart>
				<div>
					{data.map((item, index) =>
					(
						<div key={index}>
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
