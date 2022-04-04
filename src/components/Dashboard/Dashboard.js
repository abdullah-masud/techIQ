import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <div className='dashboard-container d-flex justify-content-around mt-4'>
                <div>
                    <h4 className='mb-4'>Sell Vs Month</h4>
                    <LineChart width={600} height={400} data={data}>
                        <Line type="monotone" dataKey={"sell"} stroke="#8884d8" />
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </div>
                <div>
                    <h4 className='mb-4'>Investment & Revenue VS Month</h4>
                    <BarChart width={600} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </>
    );
};

export default Dashboard;