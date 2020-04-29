import React,{useState,useEffect} from 'react';
import './index.css';
import DoctorResultImg from '../../img/doctor_result.svg';
import api from '../../services/api';


export default function ResultQA(props){
    const {id} = props.match.params;
    const [data,setData] = useState([{}]);

    useEffect(()=>{
        async function loadData(){
            const response = await api.post(`/result/${id}`);
            setData(response.data);
        }
        loadData();
    },[id])

    return(
        <div className='main-containerResultQA'>
            <div className='containerQA-box'>
                <div className='containerQA-header'>
                    <h3>Resultado</h3>
                </div>
                {data.diagnostic <=4.2 && <div className='containerQA-result'><span>SEM suspeita de infecção</span><p><span>Obrigado por se cuidar</span></p></div>}
                {data.diagnostic >=7 && <div className='containerQA-result'><span>ALTA suspeita de infecção</span><p><span>Procure a equipe COVID-19</span></p></div>}
                {((data.diagnostic > 4.2) && (data.diagnostic <= 6.9)) && <div className='containerQA-result'><span>BAIXA suspeita de infecção</span><p><span>Procure a equipe COVID-19</span></p></div>}
                <div className='containerQA-line'>
                    <img src={DoctorResultImg} alt=''/>
                    <a href='/'><button>VOLTAR</button></a>
                </div>
            </div>
        </div>
    )
}