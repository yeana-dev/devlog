export default function Notes(props) {
  return (
    <div className="note-card">
      <h1>{props.note.fields.title}</h1>
      <small>{props.note.createdTime}</small>
      <h3>Comfort Level: {props.note.fields.comfortLevel}/5</h3>
      <article>{props.note.fields.content}</article>
    </div>
  );
}
