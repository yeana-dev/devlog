import { NavLink, Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "bootstrap/dist/css/bootstrap.css";
import "./style/Navibar.css";

export default function Navibar(props) {
  return (
    <Navbar expand="lg" fixed="top" id="nav-container">
      <Nav.Link id="nav-logo" to="/">{`<Devlog />`}</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="nav-menu-items">
          <NavLink to="/new" className="nav-item">
            <i class="far fa-sticky-note"></i> New Note
          </NavLink>
          <NavLink to="/" className="nav-item" exact>
            <i class="fas fa-code"></i> View all
          </NavLink>
          {props.category.map((category) => (
            <NavLink
              to={`/${category}`}
              activeClassName="active"
              className="sub-category"
            >
              {category}
            </NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <nav>
    //   <header>
    //     <Link to="/">{`<Devlog />`}</Link>
    //   </header>
    //   <ul>
    //     <li>
    //       <NavLink to="/new" activeClassName="active">
    //         <i class="far fa-sticky-note"></i> New Note
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/" activeClassName="active" exact>
    //         <i class="fas fa-code"></i> View all
    //       </NavLink>
    //     </li>
    //     <ul>
    //       {props.category.map((category) => (
    //         <li>
    //           <NavLink to={`/${category}`} activeClassName="active">
    //             {category}
    //           </NavLink>
    //         </li>
    //       ))}
    //     </ul>
    //     <li>
    //       <NavLink to="/project" activeClassName="active">
    //         <i class="far fa-window-maximize"></i> Projects
    //       </NavLink>
    //     </li>
    //     <ul>
    //       <NavLink to="/new-project" activeClassName="active">
    //         <li>New Project</li>
    //       </NavLink>
    //     </ul>
    //     <li>
    //       <NavLink to="/contact" activeClassName="active">
    //         <i class="far fa-envelope" activeClassName="active"></i> Contact
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
}
