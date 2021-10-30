import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./style/Navibar.css";

export default function Navibar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" id="nav-container">
      <Nav.Link
        id="nav-logo"
        to="/"
        eventKey="home"
        as={Link}
      >{`<Devlog />`}</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="nav-menu-items">
          <Nav.Link to="/new" eventKey="new" as={Link} className="nav-item">
            <i class="material-icons">note_add</i> New Note
          </Nav.Link>
          <Nav.Link to="/" eventKey="all" as={Link} className="nav-item" exact>
            <i class="material-icons">code</i> View all
          </Nav.Link>
          {/* List a nav item for each category user created */}
          {props.category.map((category) => (
            <Nav.Link
              to={`/${category}`}
              className="sub-category"
              eventKey={category}
              as={Link}
            >
              {category}
            </Nav.Link>
          ))}
          <Nav.Link
            to="/project"
            eventKey="projects"
            as={Link}
            className="nav-item"
          >
            <i class="material-icons">web</i> Projects
          </Nav.Link>
          <Nav.Link
            to="/new-project"
            eventKey="new project"
            as={Link}
            className="sub-category"
          >
            <li>New Project</li>
          </Nav.Link>
          <Nav.Link
            to="/contact"
            className="nav-item"
            eventKey="contact"
            as={Link}
          >
            <i class="material-icons">mail</i> Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
