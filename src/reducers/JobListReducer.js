export default function JobListReducer(state = [], action){
  switch (action.type) {
    case 'CREATE_JOBLIST':
    return [...state,
      Object.assign({}, action.JobList)
    ];
    default:
      return state;
  }
}
