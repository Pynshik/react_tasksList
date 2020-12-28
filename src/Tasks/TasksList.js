import React from "react";
import TasksItem from "./TasksItem";

const styles = {
  ul: {
    listStyle: "none",
    margi: 0,
    padding: 0,
  },
};

function TasksList(props) {
  return (
    <div>
      <ul style={styles.ul}>
        {props.tasks.map((task, index) => {
          return (
            <TasksItem
              task={task}
              key={task.id}
              index={index}
              edit={props.edit}
              delete={props.delete}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default TasksList;
