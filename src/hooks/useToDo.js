import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToDosThunk } from "../redux/thunks/thunks";

const useToDos = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(({ toDos }) => toDos);
  const loadTasks = useCallback(() => {
    dispatch(getToDosThunk());
  }, [dispatch]);

  return { toDos, loadTasks };
};

export default useToDos;
