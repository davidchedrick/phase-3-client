import Button from 'react-bootstrap/Button';
import TaskCard from "./TaskCard";


function TaskArea() {
    return (
      <div className="TaskArea">
          TaskArea
          <Button variant="primary">Primary</Button>
          <TaskCard />
      </div>
    );
  }
  
  export default TaskArea;