import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
	{ name: 'Week 1', user: 400, guest: 240, amt: 240 },
	{ name: 'Week 2', user: 300, guest: 139, amt: 221 },
	{ name: 'Week 3', user: 200, guest: 980, amt: 229 },
	{ name: 'Week 4', user: 278, guest: 390, amt: 200 },
	{ name: 'Week 5', user: 189, guest: 480, amt: 218 },
];

function LineChartExample () {
	return (
		<LineChart width={1050} height={200} data={data}>
			<XAxis dataKey="name" />
			<YAxis />
			<CartesianGrid stroke="#eee" strokeDasharray="5 5" />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="user" stroke="#9BDD7C" />
			<Line type="monotone" dataKey="guest" stroke="#E9A0A0" />
		</LineChart>
	);
}

export default LineChartExample;
