import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import "./styles.scss";


var mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store = {store}>
        <Router >
            <App />
        </Router> 
    </Provider>
, mountNode);