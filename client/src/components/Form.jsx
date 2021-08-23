import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [comfortLevel, setComfortLevel] = useState(0);
  const [content, setContent] = useState("");

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (params.id && props.data.length > 0) {
      const noteEdit = props.data.find((note) => params.id === note.id);
      if (noteEdit) {
        setTitle(noteEdit.fields.title);
        setCategory(noteEdit.fields.category);
        setComfortLevel(noteEdit.fields.comfortLevel);
        setContent(noteEdit.fields.content);
      }
    }
  }, [params.id, props.data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      category,
      comfortLevel,
      content,
      title,
    };
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newNote }, config);
      props.setToggleFetch((prevState) => !prevState);
      history.push(`/detail/${params.id}`);
    } else {
      await axios.post(baseURL, { fields: newNote }, config);
      props.setToggleFetch((prevState) => !prevState);
      history.push("/");
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="form-title">Title</label>
      <input
        value={title}
        id="form-title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="form-category">Category</label>
      <select
        id="form-category"
        name="form-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Select category</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React.js">React.js</option>
        <option value="CSS">CSS</option>
        <option value="Other">Other</option>
      </select>
      <label htmlFor="form-comfortLevel">Comfort Level</label>
      <input
        value={comfortLevel}
        id="form-comfortLevel"
        type="number"
        onChange={(e) => setComfortLevel(e.target.value)}
      />
      <label htmlFor="form-content">Content</label>
      <input
        value={content}
        id="form-content"
        type="text"
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
