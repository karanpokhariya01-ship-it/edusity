import React, { useState } from "react";
import Button from "../../Button";
import "./ContactForm.css";

function ContactForm() {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "15bb90e5-ed84-4c8d-965e-82b34155342c");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form submitted successfully.");
        event.target.reset(); // ✅ reset on success
      } else {
        setResult(data.message || "Error submitting the form.");
      }
    } catch (err) {
      setResult("Network error. Please try again.");
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" required placeholder="Enter your Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" id="phone" required placeholder="Enter your phone number" />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="email" required placeholder="Enter your email id" />
        </div>

        <div className="mb-3">
          <label htmlFor="msg">Write your messages here</label>
          <textarea name="msg" id="msg" rows={5} required placeholder="Enter your message"></textarea>
        </div>

        <Button title="Submit now" bgcolor="bgBlue" color="textWhite" type="submit" />
        <span className="mb-3" style={{ marginLeft: 12 }}>{result}</span>
      </form>
    </>
  );
}

export default ContactForm;
