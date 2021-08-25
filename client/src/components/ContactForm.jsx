import emailjs from "emailjs-com";

export default function ContactForm() {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="contact_number" />
      <label htmlFor="name">Name</label>
      <input type="text" name="from_name" />
      <label htmlFor="email">E-mail</label>
      <input type="email" name="reply_to" />
      <label htmlFor="message">Message</label>
      <textarea name="message" />
      <input type="submit" />
    </form>
  );
}
