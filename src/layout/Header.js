import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import AppContext from "./../context/AppContext";
const Header = () => {
  const { isAuth, user, setIsAuth } = useContext(AppContext);
  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  };
  return (
    <Navbar bg="light" expand="sm" collapseOnSelect>
      <Container>
        <Nav.Link to="/" className="navbar-brand" as={Link}>
          Auth Basic
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey="1" to="/" as={Link}>
              Home
            </Nav.Link>
            {isAuth && (
              <Nav.Link eventKey="2" to="/profile" as={Link}>
                Profile
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {!isAuth && (
              <Nav.Link eventKey="3" to="/login" as={Link}>
                Login
              </Nav.Link>
            )}

            {isAuth && (
              <NavDropdown
                title={`Welcome ${user.name}`}
                id="basic-nav-dropdown"
              >
                <button onClick={handleLogout} className="dropdown-item">
                  Logout
                </button>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
