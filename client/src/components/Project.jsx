import { Link } from "react-router-dom";

import "./style/Project.css";
export default function Project(props) {
  return (
    <div id="project-container">
      <div id="header">{`< Projects />`}</div>
      <div className="project-list">
        {props.data.map((project) => {
          return (
            <Link to={`/project/${project.id}`}>
              <div className="project-each">
                <div className="project-title">
                  {project.fields.title}{" "}
                  <span className="date">{project.fields.date}</span>
                </div>
                {
                  <img
                    className="project-thumbnail-preview"
                    src={project.fields.thumbnail}
                    alt="project-thumbnail-preview"
                  />
                }
                <div className="shortDescription">
                  {project.fields.shortDescription}
                </div>
                <div className="description">{project.fields.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
