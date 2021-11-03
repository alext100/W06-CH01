import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCurrentToDoAction,
  resetCurrentCurrentAction,
} from "../redux/actions/actionCreators";
import {
  createToDoThunk,
  deleteToDoThunk,
  getToDosThunk,
  updateToDoThunk,
} from "../redux/thunks/thunks";

const useToDos = () => {
  const dispatch = useDispatch();
  const { toDos, currentToDo } = useSelector(({ toDos, currentToDo }) => ({
    toDos,
    currentToDo,
  }));

  const loadTasks = useCallback(() => {
    dispatch(getToDosThunk());
  }, [dispatch]);

  const createTask = (task) => {
    dispatch(createToDoThunk(task));
  };

  const deleteTask = (id) => {
    dispatch(deleteToDoThunk(id));
  };

  const updateTask = (task) => {
    dispatch(updateToDoThunk(task));
  };

  const loadCurrentToDo = (toDo) => {
    dispatch(loadCurrentToDoAction(toDo));
  };

  const resetCurrentToDo = () => {
    dispatch(resetCurrentCurrentAction());
  };

  return {
    toDos,
    currentToDo,
    loadTasks,
    createTask,
    deleteTask,
    updateTask,
    loadCurrentToDo,
    resetCurrentToDo,
  };
};

export default useToDos;
