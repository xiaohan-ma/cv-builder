import React from "react";

function WorkInfo(props) {
  return (
    <div className="workinfo-form">
      <h2>Work Experience</h2>
      <br />
      <input
        type="text"
        name="positionName"
        value={props.positionName}
        onChange={props.handleChange}
        placeholder="Title of Position"
      />
      <br />
      <input
        type="text"
        name="companyName"
        value={props.companyName}
        onChange={props.handleChange}
        placeholder="Name of Comapany"
      />
      <br />
      <input
        type="text"
        name="location"
        value={props.location}
        onChange={props.handleChange}
        placeholder="Location"
      />
      <br />
      <input
        type="text"
        name="taskDesc"
        value={props.taskDesc}
        onChange={props.handleChange}
        placeholder="Brief description of tasks"
      />
      <br />
      <input
        type="date"
        name="workDateFrom"
        value={props.workDateFrom}
        onChange={props.handleChange}
        placeholder="Start Date"
      />
      <input
        type="date"
        name="workDateTo"
        value={props.workDateTo}
        onChange={props.handleChange}
        placeholder="Finish Date"
      />
    </div>
  );
}

export default WorkInfo;
