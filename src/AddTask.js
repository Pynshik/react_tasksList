import PropTypes from 'prop-types';
import {useState} from 'react';

const AddTask = ({createTask}) => {
  const [OtherFieldsVisible, SetOtherFieldsVisible] = useState(true);

  function HandleAddBtn(event) {
    event.preventDefault();
    const task =
      {
        id: Date.now().toString(),
        name: event.target['name'].value,
        surname: event.target['surname'].value,
        email: event.target['email'].value,
        from: new Date(event.target['from'].value),
        to: event.target['to'].value,
        type: event.target['type'].value,
        report: event.target['report'].checked,
        comment: event.target['comment'].value,
      };
    createTask(task);
  };

  function moreInfo(event) {
    SetOtherFieldsVisible(!OtherFieldsVisible);
  };

  return (
    <div>
      <form className="form-1" onSubmit={HandleAddBtn}>
        <label>First name:
          <input name="name" required></input>
        </label>
        <label>Last name:
          <input name="surname" required></input>
        </label>
        <label>Email:
          <input type="email" name="email" required />
        </label>
        <label>from:
          <input defaultValue={new Date().toISOString().split('T')[0]} type="date" name="from" />
        </label>
        <label>to:
          <input defaultValue={new Date().toISOString().split('T')[0]} type="date" name="to" />
        </label>
        <label>type:&nbsp;
          <select name="type">
            <option defaultValue value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>

        <input className="inputBtn" type="button" value="more info" onClick={moreInfo} />

        <div hidden={OtherFieldsVisible}>
          <label className="checkbox">
            <input type="checkbox" name="report" />
            <div className="checkbox__text">make report</div>
          </label>
          <label>Comment:
            <textarea name="comment" />
          </label>
        </div>
        <input className="inputBtn" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTask;

AddTask.propTypes = {
  createTask: PropTypes.func,
};
