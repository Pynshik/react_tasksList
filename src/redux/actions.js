import {ADD_TASK, DELETE_TASK, EDIT_TASK} from './types';

export function addTask(newTask) {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export function editTask(task) {
  return {
    type: EDIT_TASK,
    payload: task,
  };
};
