import "./App.css";
import FormPage from "./components/FormPage";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="container">
        <FormPage className="col-md-6 offset-md-3" />
        <TaskList className="col-md-6 offset-md-3" />
      </div>
    </>
  );
}

export default App;
