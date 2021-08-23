import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <div className="project-list">
      {props.data.map((project) => {
        return (
          <Link to={`/project/${project.id}`}>
            <div className="project-each">
              <div className="project-title">{project.fields.title}</div>
              <div className="project-thumbnail">
                {project.fields.thumbnail}
              </div>
              <div className="languages">{project.fields.languagesUsed}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
