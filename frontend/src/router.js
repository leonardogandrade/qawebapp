import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QAForm from './pages/qaForm';
import CheckAnimation from './components/CheckAnimation';
import Reports from './pages/reports';
import SignIn from './pages/signIn';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={QAForm}/>
            <Route path='/checkAnimation' component={CheckAnimation}/>
            <Route path='/reports' component={Reports}/>
            <Route path='/login' component={SignIn}/>
        </Switch>
    )
}
