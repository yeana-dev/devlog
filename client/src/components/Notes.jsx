export default function Notes(props) {
  const level = parseInt(props.note.fields.comfortLevel);
  const comfortLevel = "⭐️".repeat(level);
  return (
    <div className="note-card">
      <h1>{props.note.fields.title}</h1>
      <small>
        {props.note.createdTime} / {props.note.fields.category}
      </small>
      <h3>{comfortLevel}</h3>
      <article>{props.note.fields.content}</article>
    </div>
  );
}
