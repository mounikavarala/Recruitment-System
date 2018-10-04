import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/Home/HomePage';
import JobListPage from './components/JobList/JobListPage';
import jobInfoPage from './components/jobInfo/jobInfoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="JobListPage" component={JobListPage}/>
    <Route path="jobInfoPage" component={jobInfoPage}/>
  </Route>
);

document.getElementById('App');

