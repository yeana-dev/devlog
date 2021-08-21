// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props) {
  const params = useParams();
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

  return (
    <div className="note-detail">
      <h2>{title}</h2>
      <small>{date}</small>
      <div>{category}</div>
      <div>{comfortLevel}</div>
      <main>{content}</main>
    </div>
  );
}
