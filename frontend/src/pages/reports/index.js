import React, {Component} from 'react';
import BarChartCustom from '../../components/barChartCustom';
import Header from '../../components/header';
import PieChartCustom from '../../components/pieChartCustom';
import './index.css';

export default class Reports extends Component{
    render(){
        return(
           <div>
                <Header/>               
                <div className='charts'>
                    <BarChartCustom/>
                    <PieChartCustom/>
                </div>
           </div>
        )
    }
}