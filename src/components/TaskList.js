import { useEffect } from "react";
import { Button, ButtonGroup, Form, ListGroup } from "react-bootstrap";
import useToDos from "../hooks/useToDo";

const TaskList = () => {
  const { loadTasks, toDos } = useToDos();
  console.log("toDos: ", toDos);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <>
      <ListGroup as="ol" numbered>
        {toDos.map((task) => (
          <ListGroup.Item
            as="li"
            key={task.id}
            className="row justify-content-start col-md-4"
          >
            <Form.Check
              inline
              label={task.task}
              type="checkbox"
              id="inline-checkbox"
            />
            <ButtonGroup size="sm" className="gap-md-5">
              <Button variant="primary" size="sm">
                Edit
              </Button>
              <Button variant="primary" size="sm">
                Delete
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default TaskList;
