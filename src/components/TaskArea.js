import TaskCard from "./TaskCard";

function TaskArea({ tasks }) {
  
  const tasksList = [...tasks]
  .reverse()
  .map((task) => <TaskCard key={tasks.id} task={task} />);

  return (
    <div class="container">
      <div class="row">{tasksList}</div>
    </div>
  );
}

export default TaskArea;
