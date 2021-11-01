import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import useToDos from "../hooks/useToDo";

const MainPage = ({ toDo }) => {
  const { createTask } = useToDos();
  const initialTask = {
    task: "",
  };

  const [task, setTask] = useState(initialTask);

  const changeData = (event) => {
    setTask({
      ...task,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (task.task !== "") {
      createTask(task);
      setTask(initialTask);
    }
  };

  return (
    <>
      <h1>ToDo List</h1>
      <Form className="form-create" autoComplete="off" onSubmit={submitForm}>
        <Form.Group className="col-md-4" controlId="task">
          <Form.Label>New task to do:</Form.Label>
          <FloatingLabel
            controlId="task"
            label="Buy some cookies"
            className="mb-3"
          >
            <Form.Control
              placeholder="Buy some cookies"
              type="text"
              value={task.task}
              onChange={changeData}
            />
          </FloatingLabel>
        </Form.Group>
      </Form>
    </>
  );
};
export default MainPage;
