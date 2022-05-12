
import { Button, Container } from "react-bootstrap";

function ChildCard({ child, fetchTask }) {

 

  function handleCLick() {
    const selectChild = child
    
    fetchTask(selectChild)
  }

  return (
    <Container className="d-flex justify-content-center p-2 w-25">
      <Button className="button-color btn-light" onClick={handleCLick}>
        {child.name}
      </Button>
    </Container>
  )
}

export default ChildCard