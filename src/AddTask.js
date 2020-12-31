import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Link, Route} from 'react-router-dom';

const styles = {
  input: {
    width: '93%',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '12px',
  },
  select: {
    width: '98%',
    margin: '8px 0',
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '12px',
  },
  report: {
    marginLeft: '-1px',
  },
};

function AddTask(props) {
  const [Task, SetTask] = useState({});
  const [FormHidden, SetFormHidden] = useState(true);
  const [OtherFieldsVisible, SetOtherFieldsVisible] = useState(true);
  const [IsEdit, SetIsEdit] = useState(null);

  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});

  // const textareaInput = useRef(null);

  useEffect(
      () => {
        if (props.edit) {
          SetFormHidden(false);
          SetTask(props.changeableTask);
          SetIsEdit(true);
        } else {
          SetIsEdit(false);
        }
      }, [props]);

  function press() {
    SetFormHidden(!FormHidden);
  };

  function handleInputChange(event, value) {
    const task = Task;
    const name = event.target.name;
    task[name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    SetTask(task);
  }

  function moreInfo(event) {
    SetOtherFieldsVisible(!OtherFieldsVisible);
  };

  const inputsValidation = () => {
    const task = Task ? {...Task} : {};
    const firstNameErr = {};
    const lastNameErr = {};
    const emailErr = {};
    const regex = /^\S+@\S+\.\S+$/;
    let isValid = true;

    if (!task.firstName) {
      firstNameErr.noFirstName = 'Enter your first name';
      isValid = false;
    }

    if (!task.lastName) {
      lastNameErr.noFirstName = 'Enter your last name';
      isValid = false;
    }

    if (!regex.test(task.email)) {
      emailErr.emailIncorrect = 'Incorrect email';
      isValid = false;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setEmailErr(emailErr);

    return isValid;
  };

  function addTaskOrEdit() {
    const isValid = inputsValidation();
    if (!isValid) return;
    props.addTaskOrEdit(Task);
    SetTask({
      id: Math.random(),
      firstName: '',
      lastName: '',
      email: '',
      fromDate: '',
      toDate: '',
      type: '',
      report: false,
      comment: '',
    });
    SetFormHidden(!FormHidden);
  };

  return (
    <div>
      <button className="mainBtn" onClick={press}>
        +
      </button>
      <div hidden={FormHidden} style={{border: IsEdit ? 'solid 1px red' : '', padding: 5, margin: 5}}>
        <label>
            First name:
          <input
            style={styles.input}
            type="text"
            name="firstName"
            value={Task.firstName}
            onChange={handleInputChange}
          />
        </label>
        {Object.keys(firstNameErr).map((key)=>{
          return <div style={{color: 'red'}}>{firstNameErr[key]}</div>;
        })}
        <label>
            Last name:
          <input
            style={styles.input}
            type="text"
            name="lastName"
            value={Task.lastName}
            onChange={handleInputChange}
          />
        </label>
        {Object.keys(lastNameErr).map((key)=>{
          return <div style={{color: 'red'}}>{lastNameErr[key]}</div>;
        })}
        <label>
            Email:
          <input
            style={styles.input}
            type="email"
            name="email"
            value={Task.email}
            onChange={handleInputChange}
          />
        </label>
        {Object.keys(emailErr).map((key)=>{
          return <div style={{color: 'red'}}>{emailErr[key]}</div>;
        })}
        <label>
            from:
          <input
            style={styles.input}
            type="date"
            name="fromDate"
            checked={Task.fromDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
            to:
          <input
            style={styles.input}
            type="date"
            name="toDate"
            value={Task.toDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
            type:&nbsp;
          <select
            style={styles.select}
            name="type"
            value={Task.type}
            onChange={handleInputChange}>
            <option defaultValue value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>

        <input type="button" value="more" onClick={moreInfo} />

        <div hidden={OtherFieldsVisible}>
          <div>
            <input style={styles.report}
              type="checkbox"
              name="report"
              value={Task.report}
              onClick={handleInputChange} />
                make report
          </div>
          <label>
              Comment:
            <textarea style={styles.input}
              // ref={textareaInput}
              name="comment"
              value={Task.comment}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <input type="button" onClick={addTaskOrEdit} value={IsEdit ? 'Save' : 'Add'} />
      </div>
    </div>
  );
}

AddTask.propTypes = {
  Task: PropTypes.object,
  task: PropTypes.object,
  edit: PropTypes.bool,
  changeableTask: PropTypes.object,
  addTaskOrEdit: PropTypes.func,
};

export default AddTask;
