import { Container, Navbar } from "react-bootstrap";
import disCat from "../images/disCat.png";
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <Navbar className="Header " bg="dark" variant="dark">
      <Container>
      
        <img
          alt=""
          src={disCat}
          
          className="Header d-inline-block align-top  "
        />
        
        <Navbar.Brand className="Header " href="/">BodhiCat's Chore List</Navbar.Brand>
        <NavLink exact  to="/userArea">
          <i className="bi bi-gear p-0 "></i>
        </NavLink>
        
        
      </Container>
    </Navbar>
  );
}

export default Header;
