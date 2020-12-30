import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link, Router} from 'react-router-dom';
import AddTask from './AddTask';
import TasksList from './Tasks/TasksList';

function App() {
  const [TaskList, SetTaskList] = useState(null);
  const [IsEdit, SetIsEdit] = useState(null);
  const [ChangeableTask, SetChangeableTask] = useState(null);

  function addTaskOrEdit(newTask) {
    console.log('AAAAAAAAAAAPP');
    console.log(newTask);
    const tasks = TaskList ? [...TaskList] : [];

    const existTask = tasks.find((task) => task.id === newTask.id);
    console.log('ExistTask');
    console.log(existTask);
    if (existTask) {
      const existIndex = tasks.indexOf(existTask);
      tasks[existIndex] = newTask;
      SetTaskList(tasks);
      SetIsEdit(false);
    } else {
      console.log('AAAAAAAAAAAPP else');
      console.log(newTask);
      tasks.push(newTask);
      console.log('AAAAAAAAAAAPP tasks');
      console.log(tasks);
      SetTaskList(tasks);
    }
    console.log(TaskList);
  }

  function deleteTask(id) {
    const taskIndex = TaskList.map((task) => task.id).indexOf(id);
    const assurance = window.confirm('Do yoy want to delete this task?');
    if (!assurance) return;
    const tasks = {...TaskList};
    delete tasks[taskIndex];
    SetTaskList(tasks);
  }

  const handleEditBtnClick = (id) => {
    const taskIndex = TaskList.map((task) => task.id).indexOf(id);
    const tasks = {...TaskList};
    SetChangeableTask(tasks[taskIndex]);
    SetIsEdit(true);
  };

  return (
    <div className="wrapper">
      <Route exact path='/'>
        <h1>Home page</h1>
        <Link to='/add'>
          <button type='button' className="mainBtn">
          +
          </button>
        </Link>
        {
          TaskList ?
          <Link to='/taskslist'>Tasks list</Link> :
          <h2>There is no <Link to='/taskslist'>tasks</Link> yet</h2>
        }
      </Route>
      <Route path='/taskslist'>
        <h1>Tasks list</h1>
        {TaskList ?
          <TasksList
            edit={handleEditBtnClick}
            delete={deleteTask}
            tasks={TaskList}
          /> :
          <h2>There is no tasks yet</h2>}
      </Route>
      <Route path='/add'>
        <h1>Add task</h1>
        <AddTask
          edit={IsEdit}
          changeableTask={ChangeableTask}
          addTaskOrEdit={addTaskOrEdit}
        />
      </Route>
      <Route path='/edit/:id'>
        <h1>Edit task</h1>
      </Route>
    </div>
  );
}

export default App;

// (
//   <TasksList
//     edit={handleEditBtnClick}
//     delete={deleteTask}
//     tasks={TaskList}
//   />
// )
