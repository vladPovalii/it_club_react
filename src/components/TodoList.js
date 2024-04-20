import React, { useState, useEffect } from "react";
import "../modals/CreateTask.js";
import CreateTask from "../modals/CreateTask.js";
import Card from "./Card.js";

function TodoList() {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("taskList") !== null)
      setTasks(JSON.parse(localStorage.getItem("taskList")));
  }, []);

  const toggle = () => setModal(!modal);

  const saveTask = (taskObj) => {
    let tempList = tasks;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTasks(tempList);
  };

  return (
    <>
      <div className="container-fluid d-flex align-items-center px-5 py-5 bg-primary-subtle">
        <div className="container d-flex flex-column align-items-start m-0">
          <h3>Todo List</h3>
          <button className="btn btn-primary mt-2" onClick={toggle}>
            Create Task
          </button>
        </div>
      </div>
      <div className="container-fluid d-flex gap-5 p-5 bg-danger-subtle m-0 flex-wrap">
        {tasks.map((t, index) => (
          <Card title={t.title} description={t.description} index={index} />
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} saveTask={saveTask} />
    </>
  );
}

export default TodoList;
