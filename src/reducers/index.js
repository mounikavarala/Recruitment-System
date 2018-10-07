import {combineReducers} from 'redux';

import {default as jobsList,
  filterJobsReducer as filteredJobsList,
  setFilterCriteriaReducer as filterCriteria} from "./JobListReducer";


const rootReducer = combineReducers({
  jobsList,
  filteredJobsList,
  filterCriteria
});

export default rootReducer;
