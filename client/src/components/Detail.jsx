import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";

import axios from "axios";
import "./style/Detail.css";

export default function Detail(props) {
  const params = useParams();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [comfortLevel, setComfortLevel] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (params.id && props.data.length) {
      const note = props.data.find((note) => params.id === note.id);
      const level = parseInt(note.fields.comfortLevel);

      setComfortLevel(Array(level).fill(<i class="material-icons">star</i>));
      setTitle(note.fields.title);
      setDate(note.createdTime.slice(0, 10));
      setCategory(note.fields.category);
      setContent(note.fields.content);
    }
  }, [params.id, props.data]);

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${params.id}`, config);
    props.setToggleFetch((prevState) => !prevState);
    history.push("/");
  };

  return (
    <div className="note-detail">
      <div id="note-detail-top">
        <h2 id="note-detail-title">{title}</h2>
        <div id="note-detail-right">
          <div id="note-detail-date">
            <button id="note-detail-top-btn">DATE</button>
            {date}
          </div>
          <div id="note-detail-category">
            <button id="note-detail-top-btn">CATEGORY</button>
            {category}
          </div>
          <div id="note-detail-comfortLevel">
            <button id="note-detail-top-btn">COMFORT LEVEL</button>
            {comfortLevel}
          </div>
        </div>
      </div>
      <main>{content}</main>
      <div id="note-detail-bottom">
        <Link to={`/edit/${params.id}`}>
          <button id="note-detail-bottom-btn">
            <i class="material-icons">edit</i>EDIT
          </button>
        </Link>
        <button id="note-detail-bottom-btn" onClick={handleDelete}>
          <i class="material-icons">delete</i>
          DELETE
        </button>
      </div>
    </div>
  );
}
