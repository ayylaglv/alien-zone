import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo from "./assets/images/alien-svgrepo-com.svg";
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <div className="image-container">
            <img src={logo} className="image" alt="this is logo" />
          </div>
          <Navbar.Brand href="#home">alieNZone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <NavDropdown title="Language" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Russian</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Azerbaijani
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Hindi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
