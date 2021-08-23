import { useState } from "react";
import { projectURL, config } from "../services";
import { useHistory } from "react-router-dom";

import axios from "axios";

export default function NewProject(props) {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [deployedSite, setDeployedSite] = useState("");
  const [languages, setLanguages] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = {
      title,
      thumbnail,
      deployedSite,
      languages,
      description,
    };
    await axios.post(projectURL, { fields: newProject }, config);
    props.setToggleFetch((prevState) => !prevState);
    history.push(`/project`);
  };

  return (
    <div className="new-project-form">
      <h1>New Project</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="thumbnail">Thumbnail</label>
        <input
          type="text"
          value={thumbnail}
          id="thumbnail"
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <label htmlFor="deployedSite">Deployed site URL</label>
        <input
          type="text"
          value={deployedSite}
          id="deployedSitve"
          onChange={(e) => setDeployedSite(e.target.value)}
        />
        <label htmlFor="languages">Languages/Library/Framework used</label>
        <input
          type="text"
          value={languages}
          id="languages"
          onChange={(e) => setLanguages(e.target.value)}
        />
        <label htmlFor="description">Project Description</label>
        <input
          type="text"
          value={description}
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
