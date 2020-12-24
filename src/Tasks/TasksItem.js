import React from "react";

const styles = {
  input: {
    marginRight: "1rem",
  },
};

class TasksItem extends React.Component {
  render() {
    return (
      <li className="item">
        <span>
          <strong>{this.props.index + 1}</strong>
          &nbsp;
          {this.props.task.firstName}
          &nbsp;
          <input
            type="button"
            style={styles.input}
            value="Edit"
            onClick={() => this.props.edit(this.props.task.id)}
          />
        </span>

        <button
          className="rm"
          onClick={() => this.props.delete(this.props.task.id)}
        >
          &times;
        </button>
      </li>
    );
  }
}

export default TasksItem;
