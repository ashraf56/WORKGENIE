import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
const Statistics = () => {
  let assignments = [
    { name: "a1", mark: 60 },
    { name: "a2", mark: 60 },
    { name: "a3", mark: 60 },
    { name: "a4", mark: 54 },
    { name: "a5", mark: 28 },
    { name: "a6", mark: 58 },
    { name: "a7", mark: 55 },
    { name: "a8", mark: 60 }
  ];
  return (
    <div className='container'>
      <div className='text-center my-5  bg-opacity-75  '  >
        <h2 className='py-5 text-uppercase'>Statistics</h2>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={assignments}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey='mark' />
            <Tooltip />
            <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#f4a261" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Statistics;