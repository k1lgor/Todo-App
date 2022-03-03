import AllTasks from "./components/AllTasks.vue";
import CompletedTasks from "./components/CompletedTasks.vue";

export const routes = [
  { path: "/", name: "all", component: AllTasks },
  { path: "/completed", name: "completed", component: CompletedTasks },
  { path: "*", redirect: "/" },
];
