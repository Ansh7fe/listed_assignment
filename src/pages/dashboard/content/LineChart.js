import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
function LineChartExample () {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData () {
			const response = await axios.get('/api/weekly-data');
			setData(response.data);
		}
		fetchData();
	}, []);
	return (
		<>
			<LineChart width={1050} height={200} data={data} key='linechart-1'>
				<XAxis dataKey="name" />
				<YAxis />
				<CartesianGrid stroke="#eee" strokeDasharray="5 5" />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="user" stroke="#9BDD7C" />
				<Line type="monotone" dataKey="guest" stroke="#E9A0A0" />
			</LineChart>
		</>

	);
}

export default LineChartExample;
