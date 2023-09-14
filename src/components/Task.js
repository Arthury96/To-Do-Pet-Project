import React, { useState, useRef } from "react";

import "../styles/CurrentTask.css";

function Task(props) {
  const ListProps = props.info;

  // using useRef to remember priority before its done
  const rememberPriority = useRef(props.info.priority);

  // id task done its mark to 0 priority and moved to bottom, using useRef function its possible to return prev value by reset done value
  const [taskDone, setTaskDone] = useState(false);

  const handleChange = () => {
    if (taskDone === false) {
      setTaskDone(
        () => true,
        ((props.info.done = true), (props.info.priority = "0"))
      );

      props.setUpdater(!props.updater);
    } else if (taskDone === true) {
      setTaskDone(
        () => false,
        ((props.info.done = false),
        (props.info.priority = rememberPriority.current))
      );

      props.setUpdater(!props.updater);
    }
  };

  // based on priority css check for necessary color
  const pritority = (arg) => {
    if (arg === "3") {
      return "Task Red";
    } else if (arg === "2") {
      return "Task Orange";
    } else if (arg === "1") {
      return "Task Blue";
    }
  };

  return (
    // if task done change color to Yellow
    <div className={taskDone ? "Task Yellow" : pritority(ListProps.priority)}>
      <div>
        <p>{ListProps.name}</p>
        <p>{ListProps.description}</p>
      </div>

      <label className="container">
        <input
          type="checkbox"
          taskDone={props.updater}
          onChange={handleChange}
        ></input>
        <span className="checkmark"></span>
      </label>
      <button onClick={() => props.removeElement(ListProps.id)}>X</button>
    </div>
  );
}

export default Task;
