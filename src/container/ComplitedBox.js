import React from "react";
import Complited from "../components/Complited";
import "../styles/ComplitedBox.css";

function ComplitedBox(props) {
  // Complited task box compare All tasks with completed

  const doneResults = (arg) => {
    let positive = 0;
    for (let i = 0; i < arg.length; i++) {
      if (arg[i].done === true) {
        positive++;
      }
    }
    return positive;
  };

  return (
    <div className="complited">
      <h3>Today Complited</h3>
      <Complited task={props.task} doneResults={doneResults(props.task)} />
    </div>
  );
}

export default ComplitedBox;
