import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { RatingStar } from "rating-star";
import axios from "axios";
import "./style/NoteForm.css";
import React from "react";

export default function NoteForm(props) {
  const params = useParams();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [comfortLevel, setComfortLevel] = useState(0);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const onRatingChange = (score) => {
    setRating(score);
    setComfortLevel(score.toString());
  };

  useEffect(() => {
    // If there is an id in the parameter which means the user is trying to edit the post,
    if (params.id && props.data.length > 0) {
      // we will need to see if there is an actual data from the airtable by searching corresponding id from data (data we got from props)
      const noteEdit = props.data.find((note) => params.id === note.id);
      // If there is a corresponding note from data, insert the data into input forms into corresponding columns.
      if (noteEdit) {
        setTitle(noteEdit.fields.title);
        setCategory(noteEdit.fields.category);
        setComfortLevel(noteEdit.fields.comfortLevel);
      }
      // I am using text editor instead of input/textarea.
      // I will need to insert the existing data into text editor using following method:
      editorRef.current.getInstance().setHTML(noteEdit.fields.content);
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
    if (params.id) {
      // If there is an id parameter, meaning the user is trying to edit the data
      // Execute PUT method
      await axios.put(`${baseURL}/${params.id}`, { fields: newNote }, config);
      // Since our data has been changed, switch the toggle so the updated data renders
      props.setToggleFetch((prevState) => !prevState);
      // Show the user the detail screen of the post they just updated
      history.push(`/detail/${params.id}`);
    } else {
      // If the user is not updating, meaing the user is creating a new post
      // Execute POST method
      await axios.post(baseURL, { fields: newNote }, config);
      props.setToggleFetch((prevState) => !prevState);
      // Redirect the user to the list of notes
      history.push("/");
    }
  };

  // Because I am using text editor, I need to setState the content

  const editorRef = React.createRef();
  const handleContentChange = () => {
    setContent(editorRef.current.getInstance().getHTML());
  };

  return (
    <form className="new-note-form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-top">
        <FloatingLabel
          id="form-title"
          controlId="floatingInput"
          label="Title"
          className="mb-3"
        >
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </FloatingLabel>
        <FloatingLabel
          id="form-category"
          controlId="floatingCategory"
          label="Category"
        >
          <Form.Control
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FloatingLabel>
        <div id="toast-ui-editor">
          <Editor
            name="content"
            value={content}
            previewStyle="vertical"
            height="500px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            ref={editorRef}
            onChange={handleContentChange}
          />
        </div>
      </div>
      <div className="form-bottom">
        <div className="comfort-level">
          <label htmlFor="form-comfortLevel">Comfort Level</label>
          <RatingStar
            clickable
            maxScore={5}
            id="form-comfortLevel"
            rating={rating}
            onRatingChange={onRatingChange}
          />
        </div>
        <button type="submit" id="form-submit">
          <i class="material-icons">post_add</i>SUBMIT
        </button>
      </div>
    </form>
  );
}
