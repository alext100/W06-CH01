import axios from "axios";
import {
  createToDoAction,
  deleteToDoAction,
  loadToDosAction,
  updateToDoAction,
} from "../actions/actionCreators";

//const url = process.env.REACT_APP_API_URL;
const url = "https://pokemon-api-aleksandr.herokuapp.com/pokemon/";

export const getToDosThunk = () => async (dispatch) => {
  const response = await fetch(url, {
    method: "GET",
  });
  if (response.ok) {
    const loadedToDos = await response.json();
    dispatch(loadToDosAction(loadedToDos));
  } else {
    throw new Error("Could not fetch inforation from the api");
  }
};

export const createToDoThunk = (toDo) => async (dispatch) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(toDo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const toDoToCreate = await response.json();
  dispatch(createToDoAction(toDoToCreate));
};

export const deleteToDoThunk = (id) => async (dispatch) => {
  const { status } = await axios.delete(`${url}/${id}`);
  if (status === 200) {
    dispatch(deleteToDoAction(id));
  }
};

/* export const updateToDoThunk = (toDo, id) => async (dispatch) => {
  const { toDo: modifiedToDo } = await axios.put(`${url}/${id}`, toDo);
  dispatch(updateToDoAction(modifiedToDo, id));
}; */

export const updateToDoThunk = (toDo) => async (dispatch) => {
  const response = await fetch(`${url}/${toDo.id}`, {
    method: "PUT",
    body: JSON.stringify(toDo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const updatedTask = await response.json();
  dispatch(updateToDoAction(updatedTask));
};
