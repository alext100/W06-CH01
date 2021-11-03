import actionTypes from "./actionTypes";

export const loadToDosAction = (toDos) => ({
  type: actionTypes.loadToDos,
  toDos,
});

export const createToDoAction = (toDo) => ({
  type: actionTypes.createToDo,
  toDo,
});

export const deleteToDoAction = (id) => ({
  type: actionTypes.deleteToDo,
  id,
});

export const updateToDoAction = (toDo) => ({
  type: actionTypes.updateToDo,
  toDo,
});

export const loadCurrentToDoAction = (toDo) => ({
  type: actionTypes.loadCurrentToDo,
  toDo,
});

export const resetCurrentCurrentAction = () => ({
  type: actionTypes.resetCurrentToDo,
});
