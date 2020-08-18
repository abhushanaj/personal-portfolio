import emailjs from "emailjs-com";

const TEMPLATE_ID = "1zUFH3LfMsn6V4FvY8EO";

export const validateEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !emailRegex.test(email);
};

export const sendEmail = async (params) => {
  let response, errorMessage;
  try {
    response = await emailjs.send(
      "default_service",
      TEMPLATE_ID,
      params,
      process.env.REACT_APP_USER_ID
    );
    console.log("Email send sucessfully", response);
  } catch (error) {
    errorMessage = error;
    console.log("Error while sending Email", error);
    console.log(typeof process.env.REACT_APP_USER_ID);
  }

  return [response, errorMessage];
};
