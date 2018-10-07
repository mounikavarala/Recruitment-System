import React from 'react';
import {connect} from 'react-redux';
import * as JobListActions from '../../actions/JobListActions';
import * as PropTypes from "react/lib/ReactPropTypes";
import {bindActionCreators} from 'redux';
import JobsList from './ListPage';
import JobSearch from "./JobSearchComponent";


class JobsListPage extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.state = {
      filterJobs: Object.assign({}, this.props.filterJobs),
      searching:false
    };
  }

  // JobInfoRow(jobInfo, index) {
  //   return <div key={index}>{jobInfo.title}</div>;
  // }
  savefilterJobs(event){
    event.preventDefault();

    this.setState({searching: true});
    this.props.actions.savefilterJobs(this.state.filterJobs)
      .then(() => this.redirect())
      .catch(errors => {
        this.setState({searching: false});
      });
  }
  render(){
    const {jobsList} = this.props;
    return(
        <div>
          <JobSearch/>
          <JobsList jobsList={jobsList}/>
          <JobSearch
            errors={this.state.errors}
            filterJobs={this.state.filterJobs}
            filterCriteria={this.state.filterCriteria}
          />
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


