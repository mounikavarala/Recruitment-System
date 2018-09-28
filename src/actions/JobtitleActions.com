export function createJobtitle(Jobtitle){
  return { type: 'CREATE_JOBTITLE', Jobtitle};
}
