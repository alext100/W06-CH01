import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createToDoThunk, getToDosThunk } from "../redux/thunks/thunks";

const useToDos = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(({ toDos }) => toDos);

  const loadTasks = useCallback(() => {
    dispatch(getToDosThunk());
  }, [dispatch]);

  const createTask = (task) => {
    dispatch(createToDoThunk(task));
  };

  return { toDos, loadTasks, createTask };
};

export default useToDos;
