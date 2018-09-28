import React from 'react';
import {Link} from 'react-router';

class JobInfoPage extends React.Component{

  render(){
    return(
      <div className="jumbotron">
        <h1> JobInfo </h1>
        <Link to= "Contactdetails" ClassName="btn btn-primary btn-lg"> Personal details</Link>

      </div>
    );
  }
}

export default JobInfoPage;

