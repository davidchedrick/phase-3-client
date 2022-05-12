import { Container } from "react-bootstrap";
import ChildCard from "./ChildCard";
import TaskCard from "./TaskCard";

function TaskArea({ tasks, handleDeleteTask, userChildren, fetchTask }) {
  
 
  const currentChildren = userChildren.children
  


  const childrenList = currentChildren?.map(child => 
    <ChildCard 
      key={child.id}
      child={child}
      fetchTask={fetchTask}
    />
  )

  const tasksList = tasks?.map((task) => <TaskCard 
    key={task.id} 
    task={task} 
    handleDeleteTask={handleDeleteTask}
  />);

  return (
    <Container>
    <div className="row m-2">{childrenList}</div>
      <div className="row m-2">{tasksList}</div>
    </Container>
  );
}

export default TaskArea;
