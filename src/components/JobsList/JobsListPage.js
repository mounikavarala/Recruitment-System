import React from 'react';
import {connect} from 'react-redux';
import * as JobListActions from '../../actions/JobListActions';
import * as PropTypes from "react/lib/ReactPropTypes";
import {bindActionCreators} from 'redux';
import JobsList from './ListPage';
import JobSearch from "./JobSearchComponent";
import * as toastr from "toastr";


class JobsListPage extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.state = {
      searching: false,
      errors: {}
    };




  }

  // JobInfoRow(jobInfo, index) {
  //   return <div key={index}>{jobInfo.title}</div>;
  // }
  filterJobs(){

  }
  onChange(){

  }

  render(){
    const {filteredJobs} = this.props;
    this.allStates = this.props.jobsList.map(function (jobInfo) {
      return {
        value:jobInfo.state,
        text : jobInfo.state
      };
    });

    

    this.allJobTypes = this.props.jobsList.map(function (jobInfo) {
      return {
        value:jobInfo.type,
        text : jobInfo.type
      };
    });

    return (
        <div>
          <JobSearch
            errors={this.state.errors}
            filterJobs={this.filterJobs}
            filterCriteria={this.props.filterCriteria}
            allStates = {this.allStates}
            allJobTypes={this.allJobTypes}
            searching={this.state.searching}
            onChange={this.onChange}
          />
          <JobsList jobsList={filteredJobs}/>
        </div>
    );
  }
}

JobsListPage.propTypes = {
  jobsList: PropTypes.array.isRequired,
  filteredJobs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  filterCriteria: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){

  return{
    jobsList: state.jobsList,
    filteredJobs: state.filteredJobsList,
    filterCriteria: state.filterCriteria
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(JobListActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(JobsListPage);


