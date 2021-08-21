import { Route } from "react-router-dom";
import { useState } from "react";
import { baseURL, config } from "../services";

import axios from "axios";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [comfortLevel, setComfortLevel] = useState(0);
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      category,
      comfortLevel,
      content,
      title,
    };
    await axios.post(baseURL, { fields: newNote }, config);
    props.setToggleFetch((prevState) => !prevState);
  };

  return (
    <Route path="/form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="form-title">Title</label>
        <input
          value={title}
          id="form-title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="form-category">Category</label>
        <input
          value={category}
          id="form-category"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
        />
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
    </Route>
  );
}
