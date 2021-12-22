
import React from "react";
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { Auth, CreateAd, Home, AdPage, CalendarPage } from './pages';


class App extends React.Component {
  render() {
    return(
      <>
        <Route exact path={[ '/login', '/register' ]} component={Auth} />
        <Route exact path={[ '/', '/home' ]} component={Home} />
        <Route exact path={[ '/createad']} component={CreateAd} />
        <Route  path={[ '/ad']} component={AdPage} />
        <Route exact path={[ '/calendar']} component={CalendarPage} />
      </>);
  }
}

export default hot(App);
