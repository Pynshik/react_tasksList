import React from 'react';
import TasksItem from './TasksItem';
import PropTypes from 'prop-types';

const styles = {
  ul: {
    listStyle: 'none',
    margi: 0,
    padding: 0,
  },
};

function TasksList(props) {
  return (
    <div>
      <ul style={styles.ul}>
        {props.tasks ?
        props.tasks.map((task, index) => {
          return (
            <TasksItem
              task={task}
              key={task.id}
              index={index}
              edit={props.edit}
              delete={props.delete}
            />
          );
        }) :
        <h2>There is no tasks yet</h2>}
      </ul>
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.array,
  edit: PropTypes.func,
  delete: PropTypes.func,
};

export default TasksList;
