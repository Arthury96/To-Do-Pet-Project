import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import "../styles/TaskForm.css";

// This handle all states of new tasks and create new object based on user input

function AddTaskForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");
  const [done, setDone] = useState(false); // always false because already done new task is nonsense
  const [id, setId] = useState(Date.now());

  const handleSubmit = (e) => {
    e.preventDefault();

    props.AddTask(name, description, priority, done, id);
    setName("");
    setDescription("");
    setPriority("1");
    setDone(false);
    setId(Date.now());
  };

  return (
    <div className="AddTaskForm">
      <h2>Add New Task</h2>
      <TaskForm
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        priority={priority}
        setPriority={setPriority}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddTaskForm;
