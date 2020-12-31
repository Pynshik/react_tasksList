import React, {useState} from 'react';
import {Switch, Route, Link, Router} from 'react-router-dom';
import AddTask from './AddTask';
import TasksList from './Tasks/TasksList';

function App() {
  const [TaskList, SetTaskList] = useState(null);
  const [IsEdit, SetIsEdit] = useState(null);
  const [ChangeableTask, SetChangeableTask] = useState(null);

  function addTaskOrEdit(newTask) {
    const tasks = TaskList ? [...TaskList] : [];

    const existTask = tasks.find((task) => task.id === newTask.id);
    if (existTask) {
      const existIndex = tasks.indexOf(existTask);
      tasks[existIndex] = newTask;
      SetTaskList(tasks);
      SetIsEdit(false);
    } else {
      tasks.push(newTask);
      SetTaskList(tasks);
    }
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
      <Switch>
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
        <Route path='/add'>
          <h1>Add task</h1>
          <AddTask
            edit={IsEdit}
            changeableTask={ChangeableTask}
            addTaskOrEdit={addTaskOrEdit}
          />
          <h2><Link to='/taskslist'>Tasks list</Link></h2>
          <h2><Link to='/'> Home page</Link></h2>
        </Route>
        <Route path='/taskslist'>
          <h1>Tasks list</h1>
          {TaskList ?
          <TasksList
            edit={handleEditBtnClick}
            delete={deleteTask}
            tasks={TaskList}
          /> :
          <h2>
            There is no tasks yet.
            <Link to='/add'> Add your first task</Link>
          </h2>}
          <Link to='/'>Home page</Link>
        </Route>
        <Route path='/edit'>
          <h1>Edit task</h1>
          <Link to='/'>Home page</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
