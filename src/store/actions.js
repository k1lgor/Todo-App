export default {
  addNewTask(context, value) {
    context.commit("addNewTask", value);
  },
  completeTask(context, value) {
    context.commit("completeTask", value);
  },
  moveToAllTasks(context, value) {
    context.commit("moveToAllTasks", value);
  },
};
