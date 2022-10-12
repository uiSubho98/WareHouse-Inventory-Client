import React from 'react';
import './RestockChart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';
import picture from '../../images/Our Consumer (1).png'
import Slide from 'react-reveal/Slide';


const RestockChart = () => {
    const data = [
        {
          name: 'Daal',
        restock: 5078,
          sold: 4405,
          amt: 2400,
        },
        {
          name: 'Wheat',
          restock: 4000,
          sold: 2398,
          amt: 2210,
        },
        {
          name: 'Basmati',
          restock: 6000,
          sold: 3550,
          amt: 2290,
        },
        {
          name: 'Rice',
          restock: 4980,
          sold: 3908,
          amt: 2000,
        },
        {
          name: 'Dawaat',
          restock: 3690,
          sold: 2498,
          amt: 2181,
        },
        {
          name: 'Maida',
        restock: 6390,
          sold: 5800,
          amt: 2500,
        },
        {
            name: 'Saffola Gold',
          restock: 4390,
            sold: 3300,
            amt: 2500,
          },
      ];

      

      

    return (
      
        <div className='restock-container d-flex container'>
          <Slide left>
        <div className="left-restock">
       <img className='consumer-img img-fluid ' src={picture} alt="" />
        </div>
        </Slide>
        <Slide right>
        <div className="right-restock">
        <LineChart className='linegraph'
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="restock" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sold" stroke="#82ca9d" />
        </LineChart>
        </div>
        </Slide>
        </div>
      
    );
};

export default RestockChart;