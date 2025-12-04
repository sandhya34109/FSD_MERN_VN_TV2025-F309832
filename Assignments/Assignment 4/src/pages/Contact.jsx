import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dept: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(form);
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />

        <select name="dept" onChange={handleChange}>
          <option value="">Select Department</option>
          <option value="cse">CSE</option>
          <option value="it">IT</option>
          <option value="ece">ECE</option>
          <option value="mech">Mechanical</option>
          <option value="civil">Civil</option>
          <option value="mba">MBA</option>
        </select>

        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="submitted">
          <h2>Submitted Details</h2>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Department: {submitted.dept}</p>
          <p>Message: {submitted.message}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
