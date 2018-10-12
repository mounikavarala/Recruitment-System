import * as types from '../actions/actionType';

export default function JobListReducer(state = [], action){
  switch (action.type) {
    case types.LOAD_JOBS_LIST_SUCCESS:
      return action.jobsList;

    default:
      return state;
  }
}


export function setFilterCriteriaReducer( state={}, action) {
  switch (action.type) {
    case types.SET_FILTER_CRITERIA:
      return (action.filterCriteria || {});
    default :
      return state;
  }
}

export function filterJobsReducer(state=[], action) {
  switch (action.type) {
    case types.FILTER_JOBS:
      return filterJobs(action.jobsList, action.filterCriteria);
    default :
      return state;
  }
}

function filterJobs(jobsList=[], filterCriteria={}) {

  let filteredJobList = jobsList.filter((job) => {
    return (!filterCriteria.type || filterCriteria.type === job.type) && (!filterCriteria.title || job.title.indexOf(filterCriteria.title) > -1) && job;
  });

  return filteredJobList;
}


