import React from "react";

import CustomForm from "../../components/custom-form/custom-form.component";

import "./contact-page.styles.scss";

const ContactPage = () => {
  return (
    <div className="contactpage u-container">
      <h2 className="secondary-heading" id="contact">
        Contact Me
      </h2>
      <CustomForm />
    </div>
  );
};

export default ContactPage;
