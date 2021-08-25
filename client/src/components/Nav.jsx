import "./style/Nav.css";

import { NavLink, Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <header>
        <Link to="/">{`<Devlog />`}</Link>
      </header>
      <ul>
        <li>
          <NavLink to="/new" activeClassName="active">
            <i class="far fa-sticky-note"></i> New Note
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            <i class="fas fa-code"></i> View all
          </NavLink>
        </li>
        <ul>
          {props.category.map((category) => (
            <li>
              <NavLink to={`/${category}`} activeClassName="active">
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
        <li>
          <NavLink to="/project" activeClassName="active">
            <i class="far fa-window-maximize"></i> Projects
          </NavLink>
        </li>
        <ul>
          <NavLink to="/new-project" activeClassName="active">
            <li>New Project</li>
          </NavLink>
        </ul>
        <li>
          <NavLink to="/contact" activeClassName="active">
            <i class="far fa-envelope" activeClassName="active"></i> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
