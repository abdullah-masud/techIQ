import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

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
                    <h5 className='mb-4' style={{ color: "#49459b" }}>Month wise Sell</h5>
                    <AreaChart
                        width={700}
                        height={400}
                        data={data}
                    >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>

                </div>
                <div>
                    <h5 className='mb-4' style={{ color: "#49459b" }}>Investment vs Revenue</h5>
                    <BarChart width={700} height={400} data={data}>
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