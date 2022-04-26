
import { Card, Container } from "react-bootstrap";
import TaskCard from "./TaskCard";


function TaskArea() {
    return (
      <div className="TaskArea fluid ">
          TaskArea
          <Card>
            <Card.Body>
              <TaskCard /> 
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <TaskCard /> 
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <TaskCard /> 
            </Card.Body>
          </Card>
        
      </div>
    );
  }
  
  export default TaskArea;