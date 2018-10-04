import React from 'react';
import {connect} from 'react-redux';
import * as JobListActions from '../../actions/JobListActions';
import * as PropTypes from "react/lib/ReactPropTypes";

class JobListPage extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.state = {
      JobList: {title: ""}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event) {
    const JobList = this.state.JobList;
    JobList.title = event.target.value;
    this.setState({JobList: JobList});
  }

  onClickSave() {
    this.props.createJobList(this.state.joblist);
  }
  JobListRow(JobList, index) {
    return <div key={index}>{JobList.title}</div>;
  }

  render(){
    return(
        <div>
          <p>Please search by title, city, state or type:</p>
          {this.props.JobLists.map(this.JobListRow)}
          <input type="text" onChange={this.onTitleChange} value={this.state.JobList.title}/>
          <input type="submit" onClick={this.onClickSave} value="Apply to selected jobs" />
        </div>

    );
  }
}

JobListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  createJobList: PropTypes.func.isRequired,
  JobLists: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps){
  return{
    JobLists: state.JobLists
  };
}

function mapDispatchToProps(dispatch) {
  return{
    createJobList: JobList => dispatch(JobListActions.createJobList(JobList))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(JobListPage);


