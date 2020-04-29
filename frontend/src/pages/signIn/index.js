import React,{Component} from 'react';
import './index.css';
import api from '../../services/api';
import {FaUserCircle} from 'react-icons/fa';

export default class SignIn extends Component{
    state = {
        user : '',
        password : '',
        auth : [],
        token : ''
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const response = await api.post('/auth',{
            user : this.state.user,
            password : this.state.password
        });

        // this.setState({auth : response.data});
        this.setState({token : response.data});
        
        if(response.data.length != null){
            localStorage.setItem('@qawebapp/token',response.data);
            this.props.history.push('/reports');
        }
    }

    handleOnChange = event =>{
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        return(
            <div className='main-containerSignIn'>
                <form onSubmit={this.handleSubmit}>
                    <FaUserCircle color='#9a9ca8' size={90}/>
                    <input type='text'
                            placeholder='usuário'
                            name='user'
                            value={this.state.user}
                            onChange={this.handleOnChange}
                            />
                    <input type='password'
                            placeholder='senha'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleOnChange}
                            />
                            
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}