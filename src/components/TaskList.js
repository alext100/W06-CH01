import { useEffect } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import useToDos from "../hooks/useToDo";

const TaskList = () => {
  const { toDos, loadTasks } = useToDos();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <>
      <ListGroup as="ol" numbered>
        {toDos.map((task) => (
          <ListGroup.Item as="li" key={task.id}>
            <Form.Check
              inline
              label={task.task}
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
