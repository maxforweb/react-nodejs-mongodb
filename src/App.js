
import React from "react";
import { hot } from 'react-hot-loader/root';
import { Auth } from './pages';

class App extends React.Component {
  render() {
    
    return(
      <>
        <Auth />
      </>);
  }
}

export default hot(App);
