import { loadToDosAction } from "../actions/actionCreators";

const url = process.env.REACT_APP_API_URL;

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
