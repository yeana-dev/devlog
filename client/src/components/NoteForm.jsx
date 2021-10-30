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
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [comfortLevel, setComfortLevel] = useState(0);
  const [content, setContent] = useState("");

  const params = useParams();
  const history = useHistory();

  const [rating, setRating] = useState(0);
  const onRatingChange = (score) => {
    setRating(score);
    setComfortLevel(score.toString());
  };

  useEffect(() => {
    if (params.id && props.data.length > 0) {
      const noteEdit = props.data.find((note) => params.id === note.id);
      if (noteEdit) {
        setTitle(noteEdit.fields.title);
        setCategory(noteEdit.fields.category);
        setComfortLevel(noteEdit.fields.comfortLevel);
        // setContent(noteEdit.fields.content);
      }
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
      await axios.put(`${baseURL}/${params.id}`, { fields: newNote }, config);
      props.setToggleFetch((prevState) => !prevState);
      history.push(`/detail/${params.id}`);
    } else {
      await axios.post(baseURL, { fields: newNote }, config);
      props.setToggleFetch((prevState) => !prevState);
      history.push("/");
    }
  };

  const editorRef = React.createRef();
  const handleContentChange = () => {
    setContent((prevState) => ({
      ...prevState,
      content: editorRef.current.getInstance().getHTML(),
    }));
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
