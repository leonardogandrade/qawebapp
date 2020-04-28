import React, {Component} from 'react';
import BarChartCustom from '../../components/barChartCustom';
import Header from '../../components/header';
import PieChartCustom from '../../components/pieChartCustom';
import DiagnosticClassBox from '../../components/DiagnosticClassBox';
import './index.css';

export default class Reports extends Component{
    render(){
        return(
           <div>
                <Header/> 
                <div className='charts-line'>
                    <DiagnosticClassBox titleValue='Sem Suspeita' queryValue='sem'/>
                    <DiagnosticClassBox titleValue='Baixa Suspeita' queryValue='baixa'/>
                    <DiagnosticClassBox titleValue='Alta Suspeita' queryValue='alta'/>
                </div>              
                <div className='charts-line'>                
                    <BarChartCustom/>
                    <PieChartCustom/>
                </div>
           </div>
        )
    }
}