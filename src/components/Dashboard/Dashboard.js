import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

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
                    <h4 className='mb-4'>Investment vs Revenue chart</h4>
                    <LineChart width={600} height={400} data={data}>
                        <Line type="monotone" dataKey={"investment"} stroke="#8884d8" />
                        <Line type="monotone" dataKey={"revenue"} stroke="#FF5964" />
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                    <h4 className='mb-4'>Investment vs Revenue chart</h4>
                    <LineChart width={600} height={400} data={data}>
                        <Line type="monotone" dataKey={"investment"} stroke="#8884d8" />
                        <Line type="monotone" dataKey={"revenue"} stroke="#FF5964" />
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
        </>
    );
};

export default Dashboard;