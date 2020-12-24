import React from "react";
import TasksItem from "./TasksItem";

const styles = {
  ul: {
    listStyle: "none",
    margi: 0,
    padding: 0,
  },
};

class TasksList extends React.Component {
  render() {
    console.log(this.props.tasks);
    return (
      <div>
        <ul style={styles.ul}>
          {this.props.tasks.map((task, index) => {
            return (
              <TasksItem
                task={task}
                key={task.id}
                index={index}
                edit={this.props.edit}
                delete={this.props.delete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TasksList;
