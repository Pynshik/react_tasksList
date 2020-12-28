import React, { useEffect, useState } from "react";

const styles = {
  input: {
    width: "93%",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "12px"
  },
  select: {
    width: "98%",
    margin: "8px 0",
    display: "block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "12px"
  },
  report: {
    marginLeft: "-1px"
  }
};

function AddTask(props) {
  const [Task, SetTask] = useState({});
  const [FormHidden, SetFormHidden] = useState(true);
  const [OtherFieldsVisible, SetOtherFieldsVisible] = useState(true);
  const [IsEdit, SetIsEdit] = useState(false);

  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});

  useEffect(
    () => {
      if (props.edit) {
        SetFormHidden(false)
        SetTask(props.changeableTask)
        SetIsEdit(true)
      }
      else {
        SetIsEdit(false)
      }
    }, [props])

  function press() {
    SetFormHidden(!FormHidden)
  };

  function firstNameChange(event) {
    let task = Object.assign({}, Task);
    task.firstName = event.target.value;
    SetTask(task);

    const isValid = inputsValidation();
  };

  function lastNameChange(event) {
    let task = Object.assign({}, Task);
    task.lastName = event.target.value;
    SetTask(task);

    const isValid = inputsValidation();
  };

  function emailChange(event) {
    let task = Object.assign({}, Task);
    task.email = event.target.value;
    SetTask(task);

    const isValid = inputsValidation();
  };

  function fromDateChange(event) {
    let task = Object.assign({}, Task);
    task.fromDate = event.target.value;
    SetTask(task);
  };

  function toDateChange(event) {
    let task = Object.assign({}, Task);
    task.toDate = event.target.value;
    SetTask(task);
  };

  function typeChange(value) {
    let task = Object.assign({}, Task);
    task.type = value.target.value;
    SetTask(task);
  };

  function moreInfo(event) {
    SetOtherFieldsVisible(!OtherFieldsVisible)
  };

  function reportChange(event) {
    let task = Object.assign({}, Task);
    task.report = !task.report;
    SetTask(task);
  }

  function commentChange(event) {
    let task = Object.assign({}, Task);
    task.comment = event.target.value;
    SetTask(task);
  };

  const inputsValidation = () => {
    let task = Object.assign({}, Task);
    const firstNameErr = {};
    const lastNameErr = {};
    const emailErr = {};
    const regex = /^\S+@\S+\.\S+$/;
    let isValid = true;

    if(!task.firstName) {
      firstNameErr.noFirstName = "Enter your first name";
      isValid = false;
    }

    if(!task.lastName) {
      lastNameErr.noFirstName = "Enter your last name";
      isValid = false;
    }

    if(!regex.test(task.email)) {
      emailErr.emailIncorrect = "Incorrect email";
      isValid = false;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setEmailErr(emailErr);

    return isValid;
  }

  function addTaskOrEdit() {
    const isValid = inputsValidation();
    if(!isValid) return;
    props.addTaskOrEdit(Task);
    SetTask({
      id: Math.random(),
      firstName: "",
      lastName: "",
      email: "",
      fromDate: new Date(),
      toDate: new Date(),
      type: "",
      report: false,
      comment: "",
    });
    SetFormHidden(!FormHidden);
  };

  return (
    <div>
      <button className="mainBtn" onClick={press}>
        +
      </button>
      <div hidden={FormHidden} style={{ border: IsEdit ? 'solid 1px red' : '', padding: 5, margin: 5 }}>
        <label>
          First name:
            <input
            style={styles.input}
            type="text"
            value={Task.firstName}
            onChange={firstNameChange}
          />
        </label>
        {Object.keys(firstNameErr).map(key=>{
          return <div style={{color: 'red'}}>{firstNameErr[key]}</div>
        })}
        <label>
          Last name:
            <input
            style={styles.input}
            type="text"
            value={Task.lastName}
            onChange={lastNameChange}
          />
        </label>
        {Object.keys(lastNameErr).map(key=>{
          return <div style={{color: 'red'}}>{lastNameErr[key]}</div>
        })}
        <label>
          Email:
            <input
            style={styles.input}
            type="email"
            value={Task.email}
            onChange={emailChange}
          />
        </label>
        {Object.keys(emailErr).map(key=>{
          return <div style={{color: 'red'}}>{emailErr[key]}</div>
        })}
        <label>
          from:
            <input
            style={styles.input}
            type="date"
            checked={Task.fromDate}
            onChange={fromDateChange}
          />
        </label>
        <label>
          to:
            <input
            style={styles.input}
            type="date"
            value={Task.toDate}
            onChange={toDateChange}
          />
        </label>
        <label>
          type:&nbsp;
            <select style={styles.select} value={Task.type} onChange={typeChange}>
            <option defaultValue>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>

        <input type="button" value="more" onClick={moreInfo} />

        <div hidden={OtherFieldsVisible}>
          <div>
            <input style={styles.report}
              type="checkbox"
              onClick={reportChange} />
              make report
          </div>
          <label>
            Comment:
              <textarea style={styles.input}
              value={Task.comment}
              onChange={commentChange}
            />
          </label>
        </div>
        <input type="button" onClick={addTaskOrEdit} value={IsEdit ? "Save" : "Add"} />
      </div>
    </div>
  );
}

export default AddTask;
