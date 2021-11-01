import { useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import useToDos from "../hooks/useToDo";

const MainPage = ({ toDo }) => {
  const { loadTasks } = useToDos();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const createTask = () => {};

  return (
    <>
      <h1>ToDo List</h1>
      <Form className="form-create" autoComplete="off" onSubmit={createTask}>
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
              /*    value={taskDataToUpdate.task}
              onChange={changeData} */
            />
          </FloatingLabel>
        </Form.Group>
      </Form>
    </>
  );
};
export default MainPage;
