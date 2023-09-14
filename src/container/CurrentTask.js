import { React } from "react";
import Task from "../components/Task";
import "../styles/CurrentTask.css";

function CurrentTask(props) {
  // sorting by priority below. 0 - weakest(represent done value), 3 - strongest.
  // Its helps to most value tasks on top, and low priority stay on bottom
  // As task is done its moves to bottom

  props.task.sort((a, b) => {
    return b.priority - a.priority;
  });

  // remove necessary element

  const removeElement = (id) => {
    console.log(id);
    props.setTask(props.task.filter((ele) => ele.id !== id));
  };

  // map every element below and connect with task element

  let list = props.task.map((info) => (
    <Task
      info={info}
      key={info.id}
      updater={props.updater}
      setUpdater={props.setUpdater}
      removeElement={removeElement}
      setTask={props.setTask}
    />
  ));

  return (
    <div>
      <h2 className="current-title">Current:</h2>
      <div className="CurrentTask">{list}</div>
    </div>
  );
}

export default CurrentTask;
