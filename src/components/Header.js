import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import disCat from "../images/disCat.png";

function Header() {
    return (
        <Navbar className="Header " bg="dark" variant="dark">
            <Container>
                <NavLink exact to="/">
                    <img
                        alt=""
                        src={disCat}
                        className="Header d-inline-block align-top  "
                    />
                </NavLink>

                <Navbar.Brand className="Header " href="">
                    BodhiCat's Chore List
                </Navbar.Brand>
                <NavLink exact to="/userArea">
                    <i className="bi bi-gear p-0 "></i>
                </NavLink>
            </Container>
        </Navbar>
    );
}

export default Header;
