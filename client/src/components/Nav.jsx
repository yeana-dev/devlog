import "./style/Nav.css";

import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <header>
        <Link to="/">{`<Devlog />`}</Link>
      </header>
      <ul>
        <Link to="/new">
          <li>
            <i class="far fa-sticky-note"></i> New Note
          </li>
        </Link>
        <Link to="/">
          <li>
            <i class="fas fa-code"></i> View all
          </li>
        </Link>
        <ul>
          {props.category.map((category) => (
            <Link to={`/${category}`}>
              <li>{category}</li>
            </Link>
          ))}
        </ul>
        <Link to="/project">
          <li>
            <i class="far fa-window-maximize"></i> Projects
          </li>
        </Link>
        <ul>
          <Link to="/new-project">
            <li>New Project</li>
          </Link>
        </ul>
        <li>
          <i class="far fa-envelope"></i> Contact
        </li>
      </ul>
    </nav>
  );
}
