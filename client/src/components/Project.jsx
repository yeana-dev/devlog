import { Link } from "react-router-dom";

import "./style/Project.css";
export default function Project(props) {
  return (
    <div className="project-list">
      {props.data.map((project) => {
        return (
          <Link to={`/project/${project.id}`}>
            <div className="project-each">
              <div className="project-title">
                {project.fields.title}{" "}
                <span className="date">{project.fields.date}</span>
              </div>
              <div className="project-thumbnail">
                {
                  <img
                    className="project-thumbnail-preview"
                    src={project.fields.thumbnail}
                    alt="project-thumbnail-preview"
                  />
                }
              </div>
              <div className="languages">{project.fields.languages}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
