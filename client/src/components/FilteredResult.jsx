import { Link, useParams } from "react-router-dom";
import Notes from "./Notes";

export default function FilteredResult(props) {
  const params = useParams();

  const filteredResult = props.note.filter(
    (note) => note.fields.category === params.category
  );

  return (
    <>
      {filteredResult.map((note, index) => (
        <Link to={`/detail/${note.id}`}>
          <Notes key={index} note={note} />
        </Link>
      ))}
    </>
  );
}
