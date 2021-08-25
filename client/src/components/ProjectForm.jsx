import { useState, useEffect } from "react";
import { projectURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";

export default function NewProject(props) {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [deployedSite, setDeployedSite] = useState("");
  const [languages, setLanguages] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.data.length > 0) {
      const projectEdit = props.data.find(
        (project) => params.id === project.id
      );
      if (projectEdit) {
        setTitle(projectEdit.fields.title);
        setThumbnail(projectEdit.fields.thumbnail);
        setDeployedSite(projectEdit.fields.deployedSite);
        setLanguages(projectEdit.fields.languages);
        setShortDescription(projectEdit.fields.shortDescription);
        setContent(projectEdit.fields.content);
      }
    }
  }, [params.id, props.data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = {
      title,
      thumbnail,
      deployedSite,
      languages,
      shortDescription,
      content,
    };
    if (params.id) {
      await axios.put(
        `${projectURL}/${params.id}`,
        { fields: newProject },
        config
      );
      props.setToggleFetch((prevState) => !prevState);
      history.push(`/project/${params.id}`);
    } else {
      await axios.post(projectURL, { fields: newProject }, config);
      props.setToggleFetch((prevState) => !prevState);
      history.push(`/project`);
    }
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
        <label htmlFor="description">Short/Preview Description</label>
        <input
          type="text"
          value={shortDescription}
          id="shortDescription"
          maxlength="50"
          onChange={(e) => setShortDescription(e.target.value)}
        />
        <label htmlFor="description">Project Description</label>
        <input
          type="text"
          value={content}
          id="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
