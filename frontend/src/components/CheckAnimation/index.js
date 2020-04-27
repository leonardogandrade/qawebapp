import React,{Component} from 'react';
import Lottie from 'react-lottie';
import animationData from '../../img/check_green.json';
import './index.css';

export default class CheckAnimation extends Component{
    
    componentDidMount(){
        setTimeout(function(){
            this.props.history.push('/');
        }.bind(this),1400)
    }
    render(){
        const defaultOptions = {
            loop: false,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        return(
            <div className='main-container'>
                <Lottie options={defaultOptions}
                    isStopped={true}/>    
            </div>
        )
    }
}