
import React from "react";
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { Auth, Home } from './pages';


class App extends React.Component {
  render() {
    
    return(
      <>
        <Route exact path={[ '/login', '/register' ]} component={Auth} />
        <Route exact path={[ '/', '/home' ]} component={Home} />
      </>);
  }
}

export default hot(App);
