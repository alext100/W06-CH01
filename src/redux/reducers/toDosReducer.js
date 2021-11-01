import actionTypes from "../actions/actionTypes";

const toDosReducer = (toDos = [], action) => {
  let newToDo;

  switch (action.type) {
    case actionTypes.loadToDos:
      newToDo = [...action.toDos];
      break;

    case actionTypes.deleteToDo:
      newToDo = toDos.filter((toDo) => toDo.id !== action.id);
      break;

    case actionTypes.createToDo:
      newToDo = [...toDos, action.toDos];
      break;

    case actionTypes.updateToDo:
      newToDo = [...toDos, action.toDos];
      break;

    default:
      //  throw new Error("Error en el reducer");
      newToDo = [...toDos];
  }

  return newToDo;
};

export default toDosReducer;
