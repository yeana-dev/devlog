import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { projectURL, config } from "../services";
import parse from "html-react-parser";
import axios from "axios";
import "./style/ProjectDetail.css";

export default function ProjectDetail(props) {
  const params = useParams();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [deployedSite, setDeployedSite] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (params.id && props.data.length) {
      const project = props.data.find((detail) => detail.id === params.id);
      setTitle(project.fields.title);
      setDate(project.fields.date);
      setThumbnail(project.fields.thumbnail);
      setDeployedSite(project.fields.deployedSite);
      setShortDescription(project.fields.shortDescription);
      setContent(project.fields.content);
    }
  }, [params.id, props.data]);

  const handleDelete = async () => {
    await axios.delete(`${projectURL}/${params.id}`, config);
    props.setToggleFetch((prevState) => !prevState);
    history.push("/project");
  };
  return (
    <div className="project-detail">
      <div className="project-detail-top">
        <header>{title}</header>
        <div className="project-detail-top-right">
          <div>
            <button className="project-detail-top-btn">DATE</button>
            {date}
          </div>
          <div>
            <button className="project-detail-top-btn">URL</button>
            <a href={deployedSite} target="_blank" rel="noreferrer">
              CLICK HERE
            </a>
          </div>
        </div>
      </div>
      <div className="project-detail-short-desc">{shortDescription}</div>
      <img src={thumbnail} alt="project thumbnail" />
      <div className="project-detail-description">{parse(content)}</div>
      <div className="project-detail-bottom-btn">
        <Link to={`/project/${params.id}/edit`}>
          <button>
            <i class="material-icons">edit</i> Edit
          </button>
        </Link>
        <button onClick={handleDelete}>
          <i class="material-icons">delete</i> Delete
        </button>
      </div>
    </div>
  );
}
