import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const JobInfoRow = ({jobInfo}) => {
  return(
    <tr>
      {/*<td><a href={jobInfo.watchHref} target={"_blank"}>Watch</a></td>*/}
      <td><Link to={'/jobs-list/' + jobInfo.id}>{jobInfo.title}</Link></td>
      <td>{jobInfo.city}</td>
      <td>{jobInfo.state}</td>
      <td>{jobInfo.category}</td>
      <td>{jobInfo.type}</td>
    </tr>
  );
};

JobInfoRow.propTypes = {
  jobInfo: PropTypes.object.isRequired
};

export default JobInfoRow;
