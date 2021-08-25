import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";

import { RatingStar } from "rating-star";

import axios from "axios";
import "./style/Form.css";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [comfortLevel, setComfortLevel] = useState(0);
  const [content, setContent] = useState("");

  const params = useParams();
  const history = useHistory();

  const [rating, setRating] = useState(0);
  const onRatingChange = (score) => {
    setRating(score);
    setComfortLevel(score.toString());
  };

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
    console.log(comfortLevel);
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
    <form className="new-note-form" autoComplete="off" onSubmit={handleSubmit}>
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
      <RatingStar
        clickable
        maxScore={5}
        id="form-comfortLevel"
        rating={rating}
        onRatingChange={onRatingChange}
      />

      <label htmlFor="form-content" className="form-content">
        Content
      </label>
      <input
        value={content}
        className="form-content"
        type="text"
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
