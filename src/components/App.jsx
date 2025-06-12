import { Layout } from "./Layout/Layout";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import ToDoApp from "./ToDoApp/ToDoApp";

export const App = () => {
  return (
    <Layout>
      {/* <AppBar />
      <TaskForm />
      <TaskList /> */}
      <ToDoApp />
    </Layout>
  );
};
