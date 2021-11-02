import { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import useToDos from "../hooks/useToDo";

const MainPage = () => {
  const { createTask } = useToDos();
  const initialTask = {
    task: "",
    isDone: false,
  };

  const [task, setTask] = useState(initialTask);

  const submitForm = (event) => {
    event.preventDefault();
    if (task.task !== "") {
      createTask(task);
      setTask(initialTask);
    }
  };
  const changeData = (event) => {
    setTask({
      ...task,
      [event.target.id]: event.target.value,
    });
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
        <Button variant="primary" size="sm" type="submit">
          Create
        </Button>
      </Form>
    </>
  );
};
export default MainPage;
