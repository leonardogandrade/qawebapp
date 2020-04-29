import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import QAForm from './pages/qaForm';
import CheckAnimation from './components/CheckAnimation';
import Reports from './pages/reports';
import SignIn from './pages/signIn';
import ResultQA from './pages/resultQA';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({component : Component, ...rest}) => (
    <Route 
    {...rest}
    render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/", state : {from : props.location}}} />
        )    
    }
    />
);

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={QAForm}/>
            <Route path='/checkAnimation/:id' component={CheckAnimation}/>
            <PrivateRoute path='/reports' component={Reports}/>
            <Route path='/login' component={SignIn}/>
            <Route path='/result/:id' component={ResultQA}/> 
        </Switch>
    )
}
