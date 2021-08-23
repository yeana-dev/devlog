import { Link, useParams } from "react-router-dom";
import Notes from "./Notes";

export default function FilteredResult(props) {
  const params = useParams();
  console.log(params.category);
  console.log(props.note);

  const filteredResult = props.note.filter(
    (note) => note.fields.category === params.category
  );
  console.log(filteredResult);
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
