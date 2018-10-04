import React from 'react';
import {connect} from 'react-redux';
import * as JobListActions from '../../actions/JobListActions';
import * as PropTypes from "react/lib/ReactPropTypes";
import {bindActionCreators} from 'redux';
import JobsList from './ListPage';

class JobsListPage extends React.Component{

  constructor(props, context) {
    super(props, context);
  }

  // JobInfoRow(jobInfo, index) {
  //   return <div key={index}>{jobInfo.title}</div>;
  // }

  render(){
    const {jobsList} = this.props;

    console.log(`jobs are` ,jobsList);
    return(
        <div>
          <p>Search by title, city, state or type:</p>
          <JobsList jobsList={jobsList}/>
        </div>

    );
  }
}

JobsListPage.propTypes = {
  jobsList: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps){
  return{
    jobsList: state.jobsList
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(JobListActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(JobsListPage);


