import { Button, Form, ListGroup } from "react-bootstrap";
import useToDos from "../hooks/useToDo";

const TaskList = () => {
  const { toDos } = useToDos();

  return (
    <>
      <ListGroup as="ol" numbered>
        {toDos.map((todo) => (
          <ListGroup.Item as="li" key={todo.id}>
            <Form.Check
              inline
              label={todo.task}
              type="checkbox"
              id="inline-checkbox"
            />
            <Button variant="primary" size="sm">
              Edit
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default TaskList;
