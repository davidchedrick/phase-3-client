
import { Button, Container } from "react-bootstrap";

function ChildCard({ child }) {

    console.log('child33333 ', child);
  return (
    <Container className="d-flex justify-content-center p-2 w-25">
        <Button className="button-color btn-light">{child.name}</Button>
    </Container>
  )
}

export default ChildCard