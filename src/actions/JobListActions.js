import * as types from './actionType';
import JobListApi from '../api/mockJobListApi';

export function loadJobsListSuccess(jobsList){
  return {type: types.LOAD_JOBS_LIST_SUCCESS, jobsList};
}
export function setFilterCriteria(filterCriteria){
  return {type: types.SET_FILTER_CRITERIA, filterCriteria};
}

export function filterJobs(jobsList, filterCriteria){
  return {type: types.FILTER_JOBS, jobsList, filterCriteria};
}

export function  loadJobsList() {
  return function(dispatch){
    return JobListApi.getAllJobsList().then(jobsList => {
      dispatch(loadJobsListSuccess(jobsList));
      dispatch(setFilterCriteria({}));
      dispatch(filterJobs(jobsList, {}));
    }).catch(error => {
      throw(error);
    });
  };
}

