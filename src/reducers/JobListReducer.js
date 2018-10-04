import * as types from '../actions/actionType';

export default function JobListReducer(state = [], action){
  switch (action.type) {
    case types.LOAD_JOBS_LIST_SUCCESS:
    return action.jobsList;

    default:
      return state;
  }
}
