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

export const updateToDoAction = (toDo, id) => ({
  type: actionTypes.updateToDo,
  toDo,
  id,
});
