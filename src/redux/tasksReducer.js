import {ADD_TASK, DELETE_TASK, EDIT_TASK} from './types';

const initialState = {
  tasks: [
    {id: 1, name: 'Petr', surname: 'Petrov', email: 'petr@mail.ru'},
    {id: 2, name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru'},
    {id: 3, name: 'Sergei', surname: 'Sergeev', email: 'sergei@mail.ru'},
  ],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {...state, tasks: state.tasks.concat(action.payload)};
    case DELETE_TASK:
      const result = confirm('Do you want to delete this task?');
      if (result) {
        let newTaskList = [...state.tasks];
        newTaskList = newTaskList.filter((task) => task.id !== action.payload);
        return {...state, tasks: newTaskList};
      }
      return state;
    case EDIT_TASK:
      const taskList = [...state.tasks];
      const indexOfTask = state.tasks.findIndex((task) => task.id === action.payload.id);
      taskList[indexOfTask] = action.payload;
      return {...state, tasks: taskList};
    default: return state;
  }
};
