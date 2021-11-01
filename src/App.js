import { useEffect } from "react";
import useToDos from "./hooks/useToDo";
import "./App.css";
import MainPage from "./components/MainPage";
import TaskList from "./components/TaskList";

function App() {
  const { loadTasks } = useToDos();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);
  return (
    <>
      <MainPage />
      <TaskList />
    </>
  );
}

export default App;
