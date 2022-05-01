import { Container, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <Navbar className="Header " bg="dark" variant="dark">
      <Container>
     
        
        <Navbar.Brand href="#home">BodhiCat's Chores List</Navbar.Brand>
        <NavLink exact  to="/userArea">
          <i className="bi bi-gear p-0 "></i>
        </NavLink>
        
        
      </Container>
    </Navbar>
  );
}

export default Header;
