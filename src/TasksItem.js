import PropTypes from 'prop-types';
import {useState} from 'react';

function TaskItem({edit, deleteTask, index, task}) {
  const date = new Date();
  const today = `${date.getFullYear()}-${(date.getMonth() + 1)<=9 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1)}-${(date.getDate())<=9 ? '0'+(date.getDate()) : (date.getDate())}`;

  const [OtherFieldsVisible, SetOtherFieldsVisible] = useState(true);

  function moreInfo(event) {
    SetOtherFieldsVisible(!OtherFieldsVisible);
  };

  return (
    <li className="item" key={task.id}>
      <strong>{index + 1} {task.name} {task.surname}</strong>
      <div>{task.email}</div>
          &nbsp;
      <input type="button" value="More info" onClick={moreInfo} />

      <div hidden={OtherFieldsVisible}>

        <div>From: <i>{ task.from ? task.from.toJSON().substring(0, 10) : today}</i></div>
        <div>To: <i>{task.to ? task.to : today}</i></div>
        <div>Type: <i>{task.type ? task.type : 1}</i></div>
        <div>Make report: <i>{task.report ? task.report.toString() : 'false'}</i></div>
        <div>Comment: <i>{task.comment ? task.comment : 'no comment'}</i></div>
      </div>

      <input type="button" onClick={() => edit(task.id)} value="Edit" />
      <input className="rm" type="button" onClick={() => deleteTask(task.id)} value="&times;" />
    </li>
  );
}

export default TaskItem;

TaskItem.propTypes = {
  edit: PropTypes.func,
  deleteTask: PropTypes.func,
  index: PropTypes.number,
  task: PropTypes.object,
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
  report: PropTypes.string,
  comment: PropTypes.string,
};
