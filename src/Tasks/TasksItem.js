import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const styles = {
  input: {
    marginRight: '1rem',
  },
};

function TasksItem(props) {
  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

  const [OtherFieldsVisible, SetOtherFieldsVisible] = useState(true);

  function moreInfo(event) {
    SetOtherFieldsVisible(!OtherFieldsVisible);
  };

  return (
    <li className="item" key={props.id}>
      <span>

        <strong>{props.index + 1} {props.task.firstName} {props.task.lastName}</strong>
        <p>{props.task.email}</p>

        <input type="button" value="More info" onClick={moreInfo} />

        <div hidden={OtherFieldsVisible}>
          <p>From date: <i>{props.task.fromDate ? props.task.fromDate : today}</i></p>
          <p>To date: <i>{props.task.toDate || today}</i></p>
          <p>Type: <i>{props.task.type || '1'}</i></p>
          <p>Make report: <i>{props.task.report ? props.task.report.toString() : 'false'}</i></p>
          <p>Comment: <i>{props.task.comment ? props.task.comment : 'no comment'}</i></p>
        </div>
          &nbsp;
        <Link to='/edit'>
          <input
            type="button"
            style={styles.input}
            value="Edit"
            onClick={() => props.edit(props.task.id)}
          />
        </Link>
      </span>

      <button
        className="rm"
        onClick={() => props.delete(props.task.id)}
      >
        &times;
      </button>
    </li>
  );
}

TasksItem.propTypes = {
  id: PropTypes.number,
  task: PropTypes.object,
  report: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
  type: PropTypes.string,
  comment: PropTypes.string,
  edit: PropTypes.func,
  delete: PropTypes.func,
  index: PropTypes.number,
};

export default TasksItem;
