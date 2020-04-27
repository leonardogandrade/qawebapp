import React,{Component} from 'react';
import {PieChart, Pie, Cell} from 'recharts';
import api from '../../services/api';
import './index.css';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class PieChartCustom extends Component{
    state = {
        data : []
    }

    async componentDidMount(){
        const response = await api.get('/');
        this.setState({data : response.data});
    }

    render(){
        return(
            <div className='main-pie-container'>
                <span>Total de indivíduos por grupo de risco</span>
                <PieChart width={400} height={500}>
                    <Pie
                    data={data}
                    cx={200}
                    cy={150}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                    </Pie>
                </PieChart>
            </div>
        )
    }
}






