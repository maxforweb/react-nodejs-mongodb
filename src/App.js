
import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { Auth, CreateAd, Home, AdPage, CalendarPage } from './pages';
import { connect } from "react-redux";
import { userActions } from "./redux/actions";


const App = ({checkAuth}) => {
    
    useEffect(() => {
      if ( localStorage.getItem('token') ) {
        checkAuth();
      }
    }, [])
    
    return(
      <>
        <Route exact path={[ '/login', '/register' ]} component={Auth} />
        <Route exact path={[ '/', '/home' ]} component={Home} />
        <Route exact path={[ '/createad']} component={CreateAd} />
        <Route  path={[ '/ad']} component={AdPage} />
        <Route exact path={[ '/calendar']} component={CalendarPage} />
      </>);
   
}

export default hot(connect(
  null,
  userActions
  )(App));
