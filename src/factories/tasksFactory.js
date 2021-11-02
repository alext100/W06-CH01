import { datatype } from "faker";
import { lorem } from "faker/locale/en_GB";
import { Factory } from "fishery";

const factoryTasks = Factory.define(({ sequence }) => ({
  id: sequence,
  task: lorem.words(),
  isDone: datatype.boolean(),
}));

export const getTask = () => factoryTasks.build();
export const getTasks = (total = 3) => factoryTasks.buildList(total);
