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
          <li>New Note</li>
        </Link>
        <Link to="/">
          <li>View all</li>
        </Link>
        <ul>
          {props.category.map((category) => (
            <Link to={`/${category}`}>
              <li>{category}</li>
            </Link>
          ))}
        </ul>
        <Link to="/project">
          <li>Projects</li>
        </Link>
        <ul>
          <Link to="/new-project">
            <li>New Project</li>
          </Link>
        </ul>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
