import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";

import { useState } from "react";

import "./style/ContactForm.css";

export default function ContactForm() {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iiwc60s",
        "template_2tmy79s",
        e.target,
        "user_YOH18ApgTgggDNs7eGZD9"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setShow(true);
  };
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div id="contact-greeting">
        <div id="contact-greeting-left">
          <h3>Hello! 안녕하세요! Thank you for visiting! 👋</h3> My name is
          Yeana 🇰🇷 , and this is my second project from General Assembly SEI.
          <br />
          Please feel free to send me any feedback or comment here!
          <br />
          <a
            href="https://github.com/yeana-dev/devlog/tree/master/client"
            target="_blank"
          >
            <i className="fab fa-github-square"></i>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <input type="hidden" name="contact_number" />
      <div id="contact-top">
        <FloatingLabel id="contact-name" label="Name">
          <Form.Control type="text" placeholder="Name" name="from_name" />
        </FloatingLabel>
        <FloatingLabel id="contact-email" label="Email">
          <Form.Control type="email" placeholder="Email" name="reply_to" />
        </FloatingLabel>
      </div>
      <div className="contact-message-container">
        <FloatingLabel label="Message">
          <Form.Control
            id="contact-message"
            placeholder="Message"
            as="textarea"
            name="message"
          />
        </FloatingLabel>
      </div>
      <div id="contact-bottom">
        <input type="submit" id="contact-submit" value="SUBMIT" />
        <Alert variant="success" id="contact-alert" show={show}>
          Message Sent!
        </Alert>
      </div>
    </form>
  );
}
