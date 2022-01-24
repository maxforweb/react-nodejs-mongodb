import React from 'react';
import { LoginForm, RegisterForm } from 'modules';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import './Auth.scss';

const Auth = (props) => {
    
    if ( props.isAuth ) {
        return (
            <Redirect to="/"></Redirect>
        )
    } else {
        return (
            <section className='auth'>
                <Switch >
                    <Route exact path={[ '/login' ]} component={LoginForm} />
                    <Route exact path='/register' component={RegisterForm} />
                </Switch>
            </section>
        )
    }
}

export default connect(
    ({ user }) => user
)(Auth);