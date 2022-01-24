
import React, { useEffect } from "react";
import { Route, Redirect, Switch, useRouteMatch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { Auth, CreateAd, Home, AdPage, CalendarPage, UserPage } from './pages';
import { connect } from "react-redux";
import { userActions } from "./redux/actions";


const App = ({checkAuth, user}) => {
    
    useEffect(() => {
      if ( localStorage.getItem('token') ) {
        checkAuth();
      }
    }, [])
    
    return(
      <Switch >
        <Route exact path={[ '/login', '/register' ]} >{user.isAuthenticated ? <Redirect to="/posts" /> : <Auth />}</Route>
        <Route exact path={'/posts' } component={Home} />
        <Route exact path={[ '/createad']} component={CreateAd} />
        <Route exact path={"/post/:id"} component={AdPage} />
        <Route exact path={[ '/calendar']} component={CalendarPage} />
        <Route exact path={'/user'} > {!user.isAuthenticated ? <Redirect to="/login" /> : <UserPage />} </Route> 
      </Switch>
    );
   
}

export default hot(connect(
  ({user}) => ({user}),
  userActions
  )(App));
