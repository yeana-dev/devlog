import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { projectURL, config } from "../services";

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
      <h2>{title}</h2>
      <div>{date}</div>
      <a href={deployedSite}>Deployed Site Here</a>
      <div>{shortDescription}</div>
      <hr />
      <img src={thumbnail} alt="project thumbnail" />
      <article>{content}</article>
      <Link to={`/project/${params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
