import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

import axios from "axios";

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
      setTitle(note.fields.title);
      setDate(note.createdTime);
      setCategory(note.fields.category);
      setComfortLevel(parseInt(note.fields.comfortLevel));
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
      <h2>{title}</h2>
      <small>{date}</small>
      <div>{category}</div>
      <div>{comfortLevel}</div>
      <main>{content}</main>
      <Link to={`/edit/${params.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
