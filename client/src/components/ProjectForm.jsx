import { useState, useEffect } from "react";
import { projectURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import "./style/ProjectForm.css";
import axios from "axios";

export default function NewProject(props) {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [deployedSite, setDeployedSite] = useState("");
  const [date, setDate] = useState("");
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
        setDate(projectEdit.fields.date);
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
      date,
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
      <div id="header">{`< New Project />`}</div>
      <form onSubmit={handleSubmit}>
        <div id="project-form-top">
          <FloatingLabel
            id="project-form-title"
            controlId="floatingTitle"
            label="Title"
          >
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            id="project-form-deployedSite"
            controlId="floatingDeployedSite"
            label="Deployed Site URL"
          >
            <Form.Control
              type="text"
              placeholder="Deployed Site URL"
              value={deployedSite}
              onChange={(e) => setDeployedSite(e.target.value)}
            />
          </FloatingLabel>
        </div>
        <div id="project-form-middle">
          <FloatingLabel
            id="project-form-date"
            controlId="floatingData"
            label="Creation Time"
          >
            <Form.Control
              type="text"
              placeholder="Creation Time"
              value={date}
              id="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            id="project-form-thumbnail"
            controlId="floatingThumbnail"
            label="Thumbnail"
          >
            <Form.Control
              type="text"
              placeholder="Thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </FloatingLabel>
        </div>
        <FloatingLabel
          id="project-form-short"
          controlId="floatingShortDescription"
          label="Short Description / Intro : This will be shown on the list"
        >
          <Form.Control
            type="text"
            placeholder="Short Description / Intro : This will be shown on the list"
            value={shortDescription}
            id="shortDescription"
            maxlength="50"
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </FloatingLabel>
        <Form.Control
          value={content}
          id="content"
          as="textarea"
          rows={20}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" id="project-form-submit" />
      </form>
    </div>
  );
}
