import React, {PropTypes} from 'react';
import JobInfoRow from './JobInfoRow';

const JobsList = ({jobsList}) => {
  // const jobsList = filteredJobs;
  return(
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Job Title</th>
        <th>City</th>
        <th>State</th>
        <th>Category</th>
        <th>Type</th>
      </tr>
      </thead>
      <tbody>
      {jobsList.map((jobInfo, idx) =>  <JobInfoRow key={jobInfo.id +"-" + idx} jobInfo={jobInfo}/>
      )}
      </tbody>
    </table>
  );
};

JobsList.propTypes = {
  jobsList: PropTypes.array.isRequired
};

export default JobsList;
