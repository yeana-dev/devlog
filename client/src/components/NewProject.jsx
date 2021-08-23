import { useState } from "react";

export default function NewProject() {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [deployedSite, setDeployedSite] = useState("");
  const [languages, setLanguages] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new-project-form">
      <h1>New Project</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={thumbnail}
          id="thumbnail"
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <input
          type="text"
          value={deployedSite}
          id="deployedSitve"
          onChange={(e) => setDeployedSite(e.target.value)}
        />
        <input
          type="text"
          value={languages}
          id="languages"
          onChange={(e) => setLanguages(e.target.value)}
        />
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
