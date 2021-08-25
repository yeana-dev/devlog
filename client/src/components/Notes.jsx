import "./style/Notes.css";

export default function Notes(props) {
  const level = parseInt(props.note.fields.comfortLevel);
  const comfortLevel = Array(level).fill(<i class="fas fa-lightbulb"></i>);

  return (
    <div className="note-card">
      <div className="note-card-title">{props.note.fields.title}</div>
      <small>
        {props.note.createdTime.slice(0, 10)} | {props.note.fields.category}
      </small>
      <h3 id="note-card-comfortLevel">{comfortLevel}</h3>
      <article>{props.note.fields.content.slice(0, 250)}...</article>
    </div>
  );
}
