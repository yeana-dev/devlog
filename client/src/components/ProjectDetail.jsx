import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { projectURL, config } from "../services";

import axios from "axios";

export default function ProjectDetail(props) {
  const params = useParams();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [deployedSite, setDeployedSite] = useState("");
  const [languages, setLanguages] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id && props.data.length) {
      const project = props.data.find((detail) => detail.id === params.id);
      setTitle(project.fields.title);
      setThumbnail(project.fields.thumbnail);
      setDeployedSite(project.fields.deployedSite);
      setLanguages(project.fields.languages);
      setDescription(project.fields.description);
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
      <img src={thumbnail} alt="project thumbnail" />
      <a href={deployedSite}>Deployed Site Here</a>
      <div>Used: {languages}</div>
      <article>{description}</article>
      <Link to={`/project/${params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
