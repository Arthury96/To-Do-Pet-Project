import React from "react";

// Based on if all tasks done, or in progress, or didn't event setted complied box represent value
function Complited(props) {
  let render;

  if (props.doneResults === props.task.length && props.task.length !== 0) {
    render = "All done for today :)";
  } else if (props.doneResults !== props.task.length) {
    render = `${props.doneResults} / ${props.task.length}`;
  } else if (props.task.length === 0) {
    render = "No setted tasks ";
  }

  return (
    <div>
      <p>{render}</p>
    </div>
  );
}

export default Complited;
