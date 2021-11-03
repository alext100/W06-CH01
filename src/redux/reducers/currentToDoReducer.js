import actionTypes from "../actions/actionTypes";

const currentToDoReducer = (currentToDo = { toDo: {} }, action) => {
  let newCurrentToDo;

  switch (action.type) {
    case actionTypes.loadCurrentToDo:
      newCurrentToDo = { toDo: action.toDo };
      break;

    case actionTypes.resetCurrentToDo:
      newCurrentToDo = { toDo: {} };
      break;

    default:
      newCurrentToDo = currentToDo;
      break;
  }

  return newCurrentToDo;
};

export default currentToDoReducer;
