import React, { useState } from "react";
import "./App.css";
import AddTaskForm from "./container/AddTaskForm";
import ComplitedBox from "./container/ComplitedBox";
import CurrentTask from "./container/CurrentTask";

// Set new task state hook with test obects

function App() {
  const [task, setTask] = useState([
    {
      name: "Doctor visit",
      description: "18.00 Skolas 5",
      priority: "1",
      done: false,
      id: 10,
    },
    {
      name: "Grocery List",
      description: "Milk, Bread, Veggies",
      priority: "2",
      done: false,
      id: 11,
    },
    {
      name: "Barbershop",
      description: "13.00",
      priority: "3",
      done: false,
      id: 12,
    },
  ]);

  // Add new task function, that keep all previous state objects
  const AddTask = (name, description, priority, done, id) => {
    setTask((prevArray) => [
      ...prevArray,
      {
        name,
        description,
        priority,
        done,
        id,
      },
    ]);
  };

  // Updater change and refresh state, its needed for cases when states cant update without refresh or change another state.
  // maybe not the best solution but i dont find out how ti figure this out in another way

  const [updater, setUpdater] = useState("false");

  return (
    <div>
      <h1 className="title">To Do List</h1>
      <div className="App">
        <AddTaskForm className="AddtaskForm" task={task} AddTask={AddTask} />
        <ComplitedBox task={task} />
      </div>
      <div className="current">
        <CurrentTask
          task={task}
          updater={updater}
          setUpdater={setUpdater}
          setTask={setTask}
        />
      </div>
    </div>
  );
}

export default App;
