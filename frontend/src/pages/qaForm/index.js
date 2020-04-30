import React,{Component} from 'react';
import './index.css';
import ImgDoc from '../../img/doctor.png';
import api from '../../services/api';
import Header from '../../components/header';
import { isAuthenticated } from '../../services/auth';

export default class QAForm extends Component{
    state = {
        matricula : '',
        luvas : '',
        tosse : '',
        febre : '',
        mascara : '',
        respiracao : '',
        coords : {
            lat : '',
            lon : ''
        }
    }

    geoLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                this.setState({coords : {
                    lat : position.coords.latitude,
                    lon : position.coords.longitude,
                }})
            })
        }
    }
    
    componentDidMount(){
        this.geoLocation();
    }

    handleOnSubmit = async event => {
        event.preventDefault();
        const response = await api.post('/',{
            matricula : this.state.matricula,
            luvas : this.state.luvas,
            tosse : this.state.tosse,
            febre : this.state.febre,
            mascara : this.state.mascara,
            respiracao : this.state.respiracao,
            coords : this.state.coords
        })
        this.props.history.push(`/checkAnimation/${response.data._id}`);
    }

    handleOnChange = event =>{
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value})
    }

    render(){
        return(
            <div>
                {isAuthenticated() && <Header/>}
                <div className='main-container'>    
                    <div className='bg-container'>
                        <img src={ImgDoc} alt=''/>
                    </div>
                    <div className='box-container'>
                        <form onSubmit={this.handleOnSubmit}>
                            <div>
                                <div className='box-input'>
                                    <label>Matrícula</label>
                                    <input 
                                        type='text'
                                        placeholder='Número de matrícula'
                                        name='matricula'
                                        value={this.state.matricula}
                                        onChange={this.handleOnChange}/>
                                </div>
                            </div>
        
                            <div>
                                <div className='box-input'>
                                    <label>Está utilizando luvas?</label>
                                    <select
                                        type='text'
                                        name='luvas'
                                        value={this.state.luvas}
                                        onChange={this.handleOnChange}>
                                            <option></option>
                                            <option value={0}>SIM</option>
                                            <option value={1}>NÃO</option>
                                    </select>
                                </div>  
        
                                <div className='box-input'>
                                    <label>Está utilizando máscara?</label>
                                    <select
                                        type='text'
                                        name='mascara'
                                        value={this.state.mascara}
                                        onChange={this.handleOnChange}>
                                            <option></option>
                                            <option value={0}>SIM</option>
                                            <option value={1}>NÃO</option>
                                    </select>
                                </div>  
                                
                            </div>
        
                            <div>
                                <div className='box-input'>
                                    <label>Tosse?</label>
                                    <select
                                        name='tosse'
                                        value={this.state.tosse}
                                        onChange={this.handleOnChange}>
                                        <option></option>
                                        <option value={1}>SIM</option>
                                        <option value={0}>NÃO</option>
                                    </select>
                                </div>   
        
                                <div className='box-input'>
                                    <label>Dificuldades em respirar?</label>
                                    <select
                                        name='respiracao'
                                        value={this.state.respiracao}
                                        onChange={this.handleOnChange}>
                                        <option></option>
                                        <option value={1}>SIM</option>
                                        <option value={0}>NÃO</option>
                                    </select>
                                </div>           
                            </div>
        
                            <div>
                                <div className='box-input'>
                                    <label>Teve febre superior a 38.7 nas úlmias 48h?</label>
                                    <select
                                        name='febre'
                                        value={this.state.febre}
                                        onChange={this.handleOnChange}>
                                        <option></option>
                                        <option value={1}>SIM</option>
                                        <option value={0}>NÃO</option>
                                    </select>
                                </div>
                                <button type='submit'>ENVIAR</button>
                            </div>
                            
                            
        
                        </form>
                    </div>
                    <div id='main-form'>      
                    </div>
                </div>
            </div>
        )
    }
}