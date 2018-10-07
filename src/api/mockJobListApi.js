import delay from './delay';


const jobsList = [
  {
    id: "validation-engineer",
    title: "Validation Engineer",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    city: "Santa Clara",
    state: "California",
    category: "Validation Engineer",
    type: "Full Time"
  },
  {
    id: "validation-analyst",
    title: "Validation Analyst",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    city: "Santa Clara",
    state: "California",
    category: "Analyst",
    type: "Full Time"
  },
  {
    id: "software-developer",
    title: "Software Developer",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    city: "Santa Clara",
    state: "Washington",
    category: "Developer",
    type: "Full Time"
  },
  {
    id: "validation-engineer",
    title: "Validation Engineer",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    city: "Santa Clara",
    state: "California",
    category: "Engineer",
    type: "Full Time"
  },
  {
    id: "validation-engineer",
    title: "Validation Engineer",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    city: "Santa Clara",
    state: "Texas",
    category: "Engineer",
    type: "Full Time"
  },
  {
    id: "program-analyst",
    title: "Program Analyst",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    city: "Santa Clara",
    state: "Hawaiin",
    category: "Analyst",
    type: "Full Time"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (JobList) => {
  return replaceAll(JobList.title, ' ', '-');
};

class JobListApi {
  static getAllJobsList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], jobsList));
      }, delay);
    });
  }

  static saveJobList(JobList) {
    JobList = Object.assign({}, JobList); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minJobListTitleLength = 1;
        if (JobList.title.length < minJobListTitleLength) {
          reject(`Title must be at least ${minJobListTitleLength} characters.`);
        }

        if (JobList.id) {
          const existingCourseIndex = jobsList.findIndex(a => a.id == JobList.id);
          jobsList.splice(existingCourseIndex, 1, JobList);
        } else {
          JobList.id = generateId(JobList);
          JobList.watchHref = `http://www.pluralsight.com/courses/${JobList.id}`;
          jobsList.push(JobList);
        }

        resolve(JobList);
      }, delay);
    });
  }

  static deleteJobsList(JobListId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfJobListToDelete = jobsList.findIndex(JobList => {
          JobList.id == JobListId;
        });
        jobsList.splice(indexOfJobListToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default JobListApi;
