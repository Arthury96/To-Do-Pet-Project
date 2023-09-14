import React from "react";
import "../styles/TaskForm.css";

function TaskForm({
  name,
  setName,
  description,
  setDescription,
  priority,
  setPriority,
  handleSubmit,
}) {
  return (
    <div className="TaskForm">
      <form className="form" onSubmit={handleSubmit}>
        <div className="name">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxlength="35"
            required
          ></input>
        </div>
        <div className="descript">
          <label>Description</label>
          <input
            type="text"
            value={description}
            className="description"
            onChange={(e) => setDescription(e.target.value)}
            maxlength="50"
          ></input>
        </div>
        <div className="select">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="1">Regular</option>
            <option value="2">High</option>
            <option value="3">Very High</option>
          </select>
          <input className="button" type="submit" value="Add"></input>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
