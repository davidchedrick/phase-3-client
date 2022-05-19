import { Container } from "react-bootstrap"
import ChildCard from "./ChildCard"

function DeleteChild({ userChildren, deletingChild, setDeletingChild }) {

    const currentChildren = userChildren.children

    const childrenList = currentChildren?.map(child => 
        <ChildCard  
          key={child.id}
          child={child}
          deletingChild={deletingChild} 
          setDeletingChild={setDeletingChild} 
        />
      )

    return(
        <Container>
    <div className="row m-2">{childrenList}</div>
      
    </Container>
    )
}

export default DeleteChild