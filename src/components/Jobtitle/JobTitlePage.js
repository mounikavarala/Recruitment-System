import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as JobtitleActions from '../../actions/JobtitleActions';

class JobTitlePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      Jobtitle: {title: ""}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const Jobtitle = this.state.Jobtitle;
    Jobtitle.title = event.target.value;
    this.setState({Jobtitle: Jobtitle});
  }

  onClickSave() {
    this.props.dispatch(JobtitleActions.createJobtitle(this.state.Jobtitle));
  }

  JobtitleRow(Jobtitle, index) {
    return <div key={index}>{Jobtitle.title}</div>;
  }

  render() {
    return (
      <div>
        <h1> Jobtitles </h1>
        {this.props.Jobtitle.map(this.JobtitleRow)}
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.Jobtitle.title}/>

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}
JobTitlePage.prototype = {
  dispatch: PropTypes.func.isRequired,
  Jobtitle: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    Jobtitles: state.Jobtitles
  };
}
function mapDispatchToProps(dispatch){
  return{
    createJobtitle: Jobtitle => dispatch(JobtitleActions.createJobtitle(Jobtitle))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(JobTitlePage);
