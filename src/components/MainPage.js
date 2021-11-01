import { useEffect } from "react";
import useToDos from "../hooks/useToDo";

const MainPage = ({ toDo }) => {
  const { loadTasks } = useToDos();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return <h1>ToDo List</h1>;
};
export default MainPage;
