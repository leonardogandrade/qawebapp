import React,{useState,useEffect} from 'react';
import './index.css';
import api from '../../services/api';
import {FaSignal} from 'react-icons/fa';

export default function DiagnosticClassBox(props){
    const [data,setData] = useState([{}]);
    const titleValue = props.titleValue;
    const queryValue = props.queryValue;
    const [colorBox,setColorBox] = useState('');

    useEffect(()=>{
        switch(queryValue){
            case 'alta' : return setColorBox('#E8403C')
            case 'baixa' : return setColorBox('#FB9005')
            case 'sem' : return setColorBox('#00D2FC')
            default:
        }
    },[queryValue])

    useEffect(()=>{
        async function loadData(){
            const response = await api.get('/diagcat');
            setData(response.data);
        }
        loadData();
    },[]);

    return(
        <div className='main-diagnosticClassBox'>
                <div className='main-dignosticClassBoxImg'>
                    <h4>{titleValue}</h4>
                    <FaSignal size={60} color={colorBox}/>
                </div>
                <div className='main-dignosticClassBoxImg'>
                <h1>{(()=>{
                    switch(queryValue){
                        case 'baixa' : return data.baixaSuspeita
                        case 'sem' : return data.semSuspeita
                        case 'alta' : return data.altaSuspeita
                        default:
                    }
                })()}</h1>

                </div>
        </div>
    )
}