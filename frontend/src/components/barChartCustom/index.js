import React,{Component} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './index.css';
import api from '../../services/api';

export default class BarChartCustom extends Component{   
    state = {
        data : [],
    }

    async componentDidMount(){
      const response = await api.get('/');
      this.setState({data : response.data});
    }

    render(){


        return(
            <div className='barChart-container'>
              <span>Total de pessoas por sintoma</span>
                <BarChart
                    width={900}
                    height={300}
                    data={this.state.data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="mascara" fill="#8884d8" />
                    <Bar dataKey="tosse" fill="#F9F871" />
                    <Bar dataKey="respiracao" fill="#D982CF" />
                    <Bar dataKey="febre" fill="#FFA388" />
                    <Bar dataKey="luvas" fill="#82ca9d" />
                </BarChart>
            </div>
        )
    }
}