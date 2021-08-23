import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProjectDetail(props) {
  const params = useParams();

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

  return (
    <div className="project-detail">
      <h2>{title}</h2>
      <img src={thumbnail} alt="project thumbnail" />
      <a href={deployedSite}>Deployed Site Here</a>
      <div>Used: {languages}</div>
      <article>{description}</article>
    </div>
  );
}
