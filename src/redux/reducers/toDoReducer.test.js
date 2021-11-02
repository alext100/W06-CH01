import { getTask, getTasks } from "../../factories/tasksFactory";
import actionTypes from "../actions/actionTypes";
import toDosReducer from "./toDosReducer";

describe("Given a toDoReducer reducer", () => {
  describe("When it receives an empty challenges list and a load action with three challenges", () => {
    test("Then it should return a new challenge list with the three challenges received", () => {
      const initialChallenges = [];
      const tasks = getTasks(3);
      const action = {
        type: actionTypes.loadToDos,
        toDos: tasks,
      };

      const newList = toDosReducer(initialChallenges, action);

      expect(newList).toEqual(tasks);
    });
  });
  describe("When it receives a tasks list and a create action with a new task", () => {
    test("Then it should return a new tasks list including the new task", () => {
      const initialTasks = getTasks(3);
      const newTask = getTask();
      const action = {
        type: actionTypes.createToDo,
        toDo: newTask,
      };

      const newList = toDosReducer(initialTasks, action);

      expect(newList).toContainEqual(newTask);
    });
  });
  describe("When it receives a tasks list and a update action with a task", () => {
    test("Then it should return a new tasks list including the modified task", () => {
      const initialTasks = getTasks(3);

      const modifiedTask = {
        ...initialTasks[1],
        isDone: false,
        task: "Modified task",
      };

      const action = {
        type: actionTypes.updateToDo,
        toDo: modifiedTask,
      };

      const newList = toDosReducer(initialTasks, action);
      expect(newList).toContainEqual(modifiedTask);
    });
  });

  describe("When it receives a tasks list and a delete action with an id", () => {
    test("Then it should return a new tasks list without the task received", () => {
      const initialTasks = getTasks(3);
      const taskToDelete = initialTasks[0];
      const action = {
        type: actionTypes.deleteToDo,
        id: taskToDelete.id,
      };

      const newTasksList = toDosReducer(initialTasks, action);

      expect(newTasksList).not.toContainEqual(taskToDelete);
    });
  });

  describe("When it receives a tasks list and an unknown action", () => {
    test("Then it should return the received tasks list", () => {
      const initialTasksList = getTasks(3);
      const action = {
        type: "loquesea",
      };

      const newTasksList = toDosReducer(initialTasksList, action);

      expect(newTasksList).toEqual(initialTasksList);
    });
  });
});
