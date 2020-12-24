import React from "react";

const styles = {
  form: {
    display: "none",
  },
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


function valideteEmail(regex, el){
    return regex.test(el);
}

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        id: Math.random(7),
        firstName: "",
        lastName: "",
        email: "",
        fromDate: new Date(),
        toDate: new Date(),
        type: "",
        report: false,
        comment: "",
      },
      formVisible: true,
      otherFields: true,
    };
  }

  componentWillReceiveProps(){
      console.log(this.props)

        if(this.props.edit){
          this.setState(state => {
              state.edit = this.props.edit;
              state.task = this.props.changeableTask;
              return state;
            });
        }
    }

  press = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  firstNameChange = (event) => {
    this.setState((state) => {
      let { task } = state;
      task.firstName = event.target.value;
      return task;
    });
  };

  lastNameChange = (event) => {
    this.setState((state) => {
      let { task } = state;
      task.lastName = event.target.value;
      return task;
    });
  };

  emailChange = (event) => {
    const patternEmail= "^[a-zA-Z0-9]{3,15}@[a-z]{2,}.(com|ru)$";
    this.setState((state) => {
      let { task } = state;
      task.email = event.target.value;
      return task;
    });
    const correct = valideteEmail(patternEmail, event.target.value);
    if(!correct) return;
  };

  fromDateChange = (event) => {
    this.setState((state) => {
      let { task } = state;
      task.fromDate = event.target.value;
      return task;
    });
  };

  toDateChange = (event) => {
    this.setState((state) => {
      let { task } = state;
      task.toDate = event.target.value;
      return task;
    });
  };

  typeChange = (value) => {
    this.setState((state) => {
      let { task } = state;
      task.type = value;
      return task;
    });
  };

  moreInfo = (event) => {
    this.setState({ otherFields: !this.state.otherFields });
  };

  reportChange = (event) => {
    this.setState((state) => {
        let { task } = state;
        task.report = !event.target.value;
        return task;
      });
  }

  commentChange = (event) => {
    this.setState((state) => {
      let { task } = state;
      task.comment = event.target.value;
      return task;
    });
  };

  addTask = () => {
    this.props.addNewTask(this.state.task);
    this.setState((state) => {
      state.task = {
        id: Math.random(7),
        firstName: "",
        lastName: "",
        email: "",
        fromDate: new Date(),
        toDate: new Date(),
        type: "",
        report: false,
        comment: "",
      };
      state.formVisible = !state.formVisible;
    });
  };

  render() {
    return (
      <div>
        <button className="mainBtn" onClick={this.press}>
          +
        </button>
        <div hidden={this.state.formVisible}>
          <label>
            First name:
            <input
              style={styles.input}
              type="text"
              value={this.state.task.firstName}
              onChange={this.firstNameChange}
              required
            />
          </label>
          <label>
            Last name:
            <input
              style={styles.input}
              type="text"
              value={this.state.task.lastName}
              onChange={this.lastNameChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              style={styles.input}
              type="email"
              value={this.state.task.email}
              onChange={this.emailChange}
              required
            />
          </label>
          <label>
            from:
            <input
              style={styles.input}
              type="date"
              value={this.state.task.fromDate}
              onChange={this.fromDateChange}
            />
          </label>
          <label>
            to:
            <input
              style={styles.input}
              type="date"
              value={this.state.task.toDate}
              onChange={this.toDateChange}
            />
          </label>
          <label>
            type:&nbsp;
            <select style={styles.select} value={this.state.task.type} onChange={this.typeChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>

          <input type="button" value="more" onClick={this.moreInfo} />

          <div hidden={this.state.otherFields}>
            <div>
              <input style={styles.report} 
                value={this.state.report}
                type="checkbox" 
                onClick={this.reportChange} />
              make report
            </div>
            <label>
              Comment:
              <textarea style={styles.input}
                value={this.state.comment}
                onChange={this.commentChange}
              />
            </label>
          </div>
          <input type="button" onClick={this.addTask} value="Add" />
        </div>
      </div>
    );
  }
}

export default AddTask;
