export default {
  addNewTask(state, value) {
    state.allTasks.push({
      id: state.allTasks.length + 1,
      task: value,
      isDone: false
    });
  },
  completeTask(state, value) {
    state.allTasks[value].isDone = true;
    state.completedTasks.push(state.allTasks[value]);
    state.allTasks.splice(value, 1);
  },
  moveToAllTasks(state, value) {
    state.completedTasks[value].isDone = false;
    state.allTasks.push(state.completedTasks[value]);
    state.completedTasks.splice(value, 1);
  },
  rearrangeAllTasks(state, value) {
    state.allTasks = value;
  },
  rearrangeCompletedTasks(state, value) {
    state.completedTasks = value;
  }
};
