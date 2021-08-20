import "./style/Nav.css";

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <header>{`<Devlog />`}</header>
      <ul>
        <Link to="/form">
          <li>New Note</li>
        </Link>
        <Link to="/">
          <li>Logs</li>
        </Link>
        <ul>
          <li>Javascript</li>
          <li>React.js</li>
          <li>CSS</li>
          <li>Other</li>
        </ul>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
