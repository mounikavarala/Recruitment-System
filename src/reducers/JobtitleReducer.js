export default function JobtitleReducer (state = [], action){
  switch(action.type){
    case 'CREATE_JOBTITLE':
      return [...state,
       Object.assign({}, action.Jobtitle)
      ];

    default:
      return state;
  }
}

