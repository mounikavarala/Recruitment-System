import React, {PropTypes} from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import * as filterCriteria from "expect";

const JobSearchComponent = ({allJobTypes, allStates, filterJobs, searching, errors, onChange}) => {



  return (
    <div>
      <form>
        <p> Search by title, city, state or type</p>
        {/*<input*/}
        {/*type="text"*/}
        {/*placeholder="Job Title"*/}
        {/*/>*/}
        <TextInput
          name="title"
          label="Job Title"
          value={filterCriteria.title}
          onChange={onChange}
          error={errors.title}/>

        <SelectInput
          name="state"
          label="State"
          value={filterCriteria.state}
          defaultOption="Select State"
          options={allStates}
          onChange={onChange} error={errors.state}/>

        <SelectInput
          name="type"
          label="Job Type"
          value={filterCriteria.type}
          defaultOption="Select Job type"
          options={allJobTypes}
          onChange={onChange} error={errors.type}/>

        <input
          type="submit"
          disabled={searching}
          value={searching ? 'Searching...' : 'Search'}
          className="btn btn-primary"
          onClick={filterJobs}/>
      </form>
    </div>
  );
};



JobSearchComponent.propTypes = {
  filterCriteria: React.PropTypes.object.isRequired,
  allStates: React.PropTypes.array,
  allJobTypes: React.PropTypes.array,
  filterJobs: React.PropTypes.func.isRequired,
  searching:  React.PropTypes.bool,
  errors: React.PropTypes.object,
  onChange: React.PropTypes.func.isRequired
};

export default JobSearchComponent;
