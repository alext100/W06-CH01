import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createToDoThunk,
  deleteToDoThunk,
  getToDosThunk,
} from "../redux/thunks/thunks";

const useToDos = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(({ toDos }) => toDos);

  const loadTasks = useCallback(() => {
    dispatch(getToDosThunk());
  }, [dispatch]);

  const createTask = (task) => {
    dispatch(createToDoThunk(task));
  };

  const deleteTask = (id) => {
    dispatch(deleteToDoThunk(id));
  };

  return { toDos, loadTasks, createTask, deleteTask };
};

export default useToDos;
