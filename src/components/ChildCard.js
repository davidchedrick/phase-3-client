
import { Button, Container } from "react-bootstrap";

function ChildCard({ child, fetchTask, deletingChild, setDeletingChild }) {
  const BASE_URL = "http://localhost:9292";

 function handleDelete(){
   const childToDelete = child
   
   fetch(BASE_URL + `/children/${childToDelete.id}`, {
    method: 'DELETE',
})

 }

  function handleCLick() {
    const selectChild = child
    console.log('selectChild: ', selectChild);
    
    fetchTask(selectChild)
  }

  return (
    <Container className="d-flex justify-content-center p-2 w-25">
      <Button 
      className="button-color btn-light" 
      onClick={deletingChild ? (e) => handleDelete(e) : handleCLick}
      >
        {child.name}
      </Button>
    </Container>
  )
}

export default ChildCard