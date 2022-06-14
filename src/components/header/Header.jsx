import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home" className="">
            Toujours Skateboarding Company
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Actu 🗞" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Thrasher Magazine
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Street League Skateboarding
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  The Berrics
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Nous Suivre 🌐" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/4.1">
                  Instagram
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/4.2">Facebook</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.3">Twitter</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Shop 🛒</Nav.Link>
              <Nav.Link href="#about">À Propos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Connecté: <a href="#login">Admin Admin</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
