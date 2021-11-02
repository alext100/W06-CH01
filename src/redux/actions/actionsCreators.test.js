import { getTask, getTasks } from "../../factories/tasksFactory";
import {
  createToDoAction,
  deleteToDoAction,
  loadToDosAction,
  updateToDoAction,
} from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a loadToDosAction actionCreator", () => {
  describe("When it receives a list of challenges", () => {
    test("Then it should return a load type action with the challenges received", () => {
      const tasks = getTasks();
      const expectedAction = {
        type: actionTypes.loadToDos,
        toDos: tasks,
      };

      const actionResult = loadToDosAction(tasks);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a createToDoAction actionCreator", () => {
  describe("When it receives a challenge", () => {
    test("Then it should return a create type action with the challenge received", () => {
      const tasks = getTasks();
      const expectedAction = {
        type: actionTypes.createToDo,
        toDo: tasks,
      };

      const actionResult = createToDoAction(tasks);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteToDoAction actionCreator", () => {
  describe("When it receives an id", () => {
    test("Then it should return a delete type action with the id received", () => {
      const id = 2;
      const expectedAction = {
        type: actionTypes.deleteToDo,
        id,
      };

      const actionResult = deleteToDoAction(id);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given an updateToDoAction actionCreator", () => {
  describe("When it receives a challenge", () => {
    test("Then it should return a update type action with the challenge received", () => {
      const updatedTask = getTask();
      const expectedAction = {
        type: actionTypes.updateToDo,
        toDo: updatedTask,
      };

      const actionResult = updateToDoAction(updatedTask);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
