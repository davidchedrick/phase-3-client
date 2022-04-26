

import { Card, Button} from "react-bootstrap";

function TaskCard() {
  return (
    <>
    <Card className="Taskcard pic  m-5">
    <div className="row g-0">
      
        <Card.Img src="https://img.freepik.com/free-vector/elegant-bedroom-scene-classic_24877-49933.jpg?t=st=1650996227~exp=1650996827~hmac=7202b54f082ee6931eae3762330025107e2c98095759d485c6cca0220cb90143&w=740" className="img-fluid rounded-start pic" alt="..."></Card.Img>
     
      <Card className="col md-8">
        <Card.Body className="">
          <Card.Title>Make Bed</Card.Title>
          <Card.Text>5 ⭐</Card.Text>
        </Card.Body>
        <Button variant="danger" size="lg">DONE</Button>
      </Card>
    </div>
         
  </Card>
  
  </>
  )
}

export default TaskCard;
