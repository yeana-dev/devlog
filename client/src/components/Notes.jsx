import { useParams } from "react-router-dom";

export default function Notes(props) {
  const params = useParams();
  console.log(params.category);
  console.log(props.note);

  return (
    <div className="note-card">
      <h1>{props.note.fields.title}</h1>
      <small>
        {props.note.createdTime} / {props.note.fields.category}
      </small>
      <h3>Comfort Level: {props.note.fields.comfortLevel}/5</h3>
      <article>{props.note.fields.content}</article>
    </div>
  );
}
