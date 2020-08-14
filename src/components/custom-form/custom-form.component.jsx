import React, { useState } from "react";

import { SubmitButton } from "../ button/button.component";
import "./custom-form.styles.scss";

const CustomForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    userName: true,
    email: true,
    message: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!!");
    setEmail("");
    setMessage("");
    setUserName("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return !emailRegex.test(email);
  };

  const handleError = (field, state) => {
    setError((prevState) => {
      return {
        ...prevState,
        [field]: state,
      };
    });
  };

  return (
    <div className="custom-form u-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="userName">Name:</label>
        <div className="input__group">
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              if (e.target.value.length >= 1) {
                handleError("userName", false);
              } else {
                handleError("userName", true);
              }
            }}
            placeholder="Your Name...."
            required
            autoComplete="off"
          />
          {error.userName && <small>Oops!! Enter your Name.</small>}
        </div>

        <label htmlFor="email">Email:</label>
        <div className="input__group">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.length >= 1) {
                handleError("email", validateEmail(e.target.value));
              } else {
                handleError("email", true);
              }
            }}
            placeholder="Your Email...."
            required
            autoComplete="off"
          />
          {error.email && (
            <small>Oops!! Seems this is not a valid email.</small>
          )}
        </div>

        <label htmlFor="message">Message:</label>
        <div className="input__group">
          <textarea
            value={message}
            name="message"
            id="message"
            onChange={(e) => {
              setMessage(e.target.value);
              handleError("message", false);
              if (e.target.value.length >= 2) {
                handleError("message", false);
              } else {
                handleError("message", true);
              }
            }}
            placeholder="Hi! Drop your message here"
            required
          />
          {error.message && <small>Oops!! Don't leave an empty message.</small>}
        </div>
        <SubmitButton>Send Message!</SubmitButton>
      </form>
    </div>
  );
};

export default CustomForm;
