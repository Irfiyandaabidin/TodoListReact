import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([
    { id: 3, title: "Task 3", status: false },
    { id: 4, title: "Task 4", status: false },
    { id: 2, title: "Task 2", status: false },
    { id: 1, title: "Task 1", status: false },
  ]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task
  ///////////////////////////
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete task
  ///////////////////////////
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };

  // Mark task as done or completed task
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id == id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    //
  };

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    //
  };

  // Change task for update
  ///////////////////////////
  const updateTask = (e) => {
    //
  };
  return (
    <div className="App container">
      <br />
      <br />
      <h2>To Do List App (ReactJS)</h2>
      <br />
      <br />
      <div className="row">
        <div className="col-4">
          <input type="text" className="form-control form-control-lg" />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary me-3">Update</button>
          <button className="btn btn-warning">Cancel</button>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-6">
          <input type="text" className="form-control form-control-lg" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
      {toDo.length ? "" : "No Tasks.."}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span title="Complete" onClick={(e) => markDone(task.id)}>
                      <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    </span>

                    <span title="Edit">
                      <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    </span>

                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default App;
