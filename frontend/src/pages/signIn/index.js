import React,{Component} from 'react';
import './index.css';

export default class SignIn extends Component{
    state = {
        user : '',
        passwd : ''
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state.user,this.state.passwd);
    }

    handleOnChange = event =>{
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        return(
            <div className='main-containerSignIn'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text'
                            name='user'
                            value={this.state.user}
                            onChange={this.handleOnChange}
                            />
                    <input type='password'
                            name='passwd'
                            value={this.state.passwd}
                            onChange={this.handleOnChange}
                            />
                            
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}