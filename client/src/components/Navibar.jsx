import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "./style/Navibar.css";

export default function Navibar(props) {
  return (
    <Navbar expand="lg" fixed="top" id="nav-container">
      <NavLink id="nav-logo" to="/">{`<Devlog />`}</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="nav-menu-items">
          <NavLink to="/new" className="nav-item">
            <i class="material-icons">note_add</i> New Note
          </NavLink>
          <NavLink to="/" className="nav-item" exact>
            <i class="material-icons">code</i> View all
          </NavLink>
          {/* List a nav item for each category user created */}
          {props.category.map((category) => (
            <NavLink to={`/${category}`} className="sub-category">
              {category}
            </NavLink>
          ))}
          <NavLink to="/project" className="nav-item">
            <i class="material-icons">web</i> Projects
          </NavLink>
          <NavLink to="/new-project" className="sub-category">
            <li>New Project</li>
          </NavLink>
          <NavLink to="/contact" className="nav-item">
            <i class="material-icons">mail</i> Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
