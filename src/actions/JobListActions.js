import * as types from './actionType';
import JobListApi from '../api/mockJobListApi';

export function loadJobsListSuccess(jobsList){
  return {type: types.LOAD_JOBS_LIST_SUCCESS, jobsList};
}

export function  loadJobsList() {
  return function(dispatch){
    return JobListApi.getAllJobsList().then(jobsList => {
      dispatch(loadJobsListSuccess(jobsList));
    }).catch(error => {
      throw(error);
    });
  };
}
