import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import JobInfoPage from './components/Jobinfo/JobInfoPage';
import ContactDetailsPage from './components/Contactdetails/ContactDetailsPage';
import JobTitlePage from './components/Jobtitle/JobTitlePage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={JobInfoPage}/>
    <Route path="Jobtitle" component={JobTitlePage}/>
    <Route path="Contactdetails" component={ContactDetailsPage}/>
  </Route>
);

document.getElementById('App');
