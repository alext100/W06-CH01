import { useEffect } from "react";
import { Button, ButtonGroup, Form, ListGroup } from "react-bootstrap";
import useToDos from "../hooks/useToDo";

const TaskList = () => {
  const {
    toDos,
    loadTasks,
    deleteTask,
    loadCurrentToDo,
    /*     currentToDo,
    updateTask,
    resetCurrentToDo,
    createTask, */
  } = useToDos();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  /*   const initialTask = useMemo(
    () => ({
      task: "",
      isDone: false,
    }),
    []
  );

  const [newTask, setNewTask] = useState(initialTask);

  const createNewTask = (event) => {
    event.preventDefault();
    setNewTask({ ...newTask, task: event.target.value });
  }; */

  const onEdit = (toDo) => {
    loadCurrentToDo(toDo);
    /*     updateTask({ ...newTask, id: currentToDo.id });
    resetCurrentToDo(); */
  };

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
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  onEdit(task);
                }}
              >
                Edit
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => deleteTask(task.id)}
              >
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
