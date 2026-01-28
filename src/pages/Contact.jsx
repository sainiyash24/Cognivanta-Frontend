import { useState } from "react";
import api from "../api/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/contact", form);
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "40px 20px",
        display: "flex",
        gap: "40px",
      }}
    >
      {/* LEFT SIDE – CONTACT INFO */}
      <div style={{ flex: 1 }}>
        <h2>Contact Us</h2>

        <p style={{ marginTop: "20px" }}>
          <b>Email:</b> ys972976@gmail.com
        </p>

        <p>
          <b>Phone:</b> +91-9729760902
        </p>

        <p style={{ marginTop: "20px" }}>
          Have questions or want to work with us?  
          Fill out the form and we’ll get back to you.
        </p>
      </div>

      {/* RIGHT SIDE – CONTACT FORM */}
      <div style={{ flex: 1 }}>
        <h3>Send us a message</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <br /><br />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <br /><br />

          <button type="submit" className="primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
