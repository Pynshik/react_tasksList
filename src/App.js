import React from "react";
import AddTask from "./AddTask";
import TasksList from "./Tasks/TasksList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: [],
      edit: false,
      changeableTask: {},
    };
  }

  addNewTask = (newTask) => {
    this.setState((state) => {
      state.taskList.push(newTask);
      return state;
    });
  };

  deleteTask = (id) => {
    const taskIndex = this.state.taskList.map((task) => task.id).indexOf(id);
    const assurance = window.confirm('Do yoy want to delete this task?');
    if(!assurance) return;
    this.setState((state) => {
      delete state.taskList[taskIndex];
      return state;
    });
  };

  editTask = (id) => {
    console.log(id);
    const taskIndex = this.state.taskList.map((task) => task.id).indexOf(id);
    console.log(taskIndex)
    this.setState(state => {
      state.edit = true;
      state.changeableTask = state.taskList[taskIndex];
      return state;
    });
    console.log(this.state);
  };

  render() {
    console.log(this.state.edit)
    console.log(this.state.changeableTask)
    return (
      <div className="wrapper">
        <h1>Tasks list</h1>
        <AddTask
          edit={this.state.edit}
          changeableTask={this.state.changeableTask}
          addNewTask={this.addNewTask}
        />
        <TasksList
          edit={this.editTask}
          delete={this.deleteTask}
          tasks={this.state.taskList}
        />
      </div>
    );
  }
}

export default App;
