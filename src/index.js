
/*eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import { Router, browserHistory} from "react-router";
import routes from "./routes";
import "./styles/styles.css"; //webpack can import CSS Files too!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; //Bootstrap CSS
import configureStore  from './store/configureStore';
import {Provider} from 'react-redux';
import {loadJobsList} from './actions/JobListActions';

const store = configureStore();
store.dispatch(loadJobsList());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('App')
);


