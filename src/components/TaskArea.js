import TaskCard from "./TaskCard";

function TaskArea({ tasks, handleDeleteTask }) {
 
  
  const tasksList = [...tasks]
  .reverse()
  .map((task) => <TaskCard 
    key={task.id} 
    task={task} 
    handleDeleteTask={handleDeleteTask}
  />);

  return (
    
      <div className="row m-2">{tasksList}</div>
    
  );
}

export default TaskArea;
