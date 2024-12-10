export function Header(props) {
  const { todos } = props;
  // eslint-disable-next-line react/prop-types
  const todosLength = todos.length;
  // eslint-disable-next-line react/prop-types
  const isTasksPlural = todos.length != 1;
  const tasksOrTasks = isTasksPlural ? "task" : "tasks";
  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {tasksOrTasks}.
      </h1>
    </header>
  );
}
