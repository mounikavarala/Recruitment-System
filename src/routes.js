import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/Home/HomePage';
import JobsListPage from './components/JobsList/JobsListPage';
import JobInfoPage from './components/JobInfo/JobInfoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="jobs-list" component={JobsListPage}/>
    <Route path="job-info" component={JobInfoPage}/>
  </Route>
);

