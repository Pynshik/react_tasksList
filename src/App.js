import React, { useState } from "react";
import AddTask from "./AddTask";
import TasksList from "./Tasks/TasksList";

function App() {
  const [TaskList, SetTaskList] = useState([]);
  const [IsEdit, SetIsEdit] = useState(false);
  const [ChangeableTask, SetChangeableTask] = useState({});

  function addTaskOrEdit(newTask) {
    let tasks = Object.assign([], TaskList);
    let existTask = tasks.find(task => task.id === newTask.id);

    if (existTask) {
      let existIndex = tasks.indexOf(existTask);
      tasks[existIndex] = newTask;
      SetTaskList(tasks);
      SetIsEdit(false)
    }
    else {
      tasks.push(newTask);
      SetTaskList(tasks);
    }
  };

  function deleteTask(id) {
    const taskIndex = TaskList.map((task) => task.id).indexOf(id);
    const assurance = window.confirm('Do yoy want to delete this task?');
    if (!assurance) return;
    let tasks = Object.assign([], TaskList);
    delete tasks[taskIndex];
    SetTaskList(tasks);
  };

  const handleEditBtnClick = (id) => {
    const taskIndex = TaskList.map((task) => task.id).indexOf(id);
    let tasks = Object.assign([], TaskList);
    SetChangeableTask(tasks[taskIndex]);
    SetIsEdit(true);
  };

  return (
    <div className="wrapper">
      <h1>Tasks list</h1>
      <AddTask
        edit={IsEdit}
        changeableTask={ChangeableTask}
        addTaskOrEdit={addTaskOrEdit}
      />
      <TasksList
        edit={handleEditBtnClick}
        delete={deleteTask}
        tasks={TaskList}
      />
    </div>
  );
}

export default App;
