import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  // things i set up in emailJS
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_f7HJJQQLYwVZxvWdTg9Vz";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  function sendEmail(serviceID, templateID, variables, userID) {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent Successfully! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  }

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe your project needs and I will
          contact you as soon as possible.{" "}
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        {/* needed to create a form wrapper with a onSubmit to activate the function */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* Name input */}
              <div className="text-center">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="form-control"
                  ref={register({
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* phone input */}
              <div className="text-center">
                <input
                  type="text"
                  placeholder="Phone number"
                  name="phone"
                  className="form-control"
                  ref={register({
                    required: "Please add your phone number",
                    pattern: {
                      value: /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/,
                      message: "invalid phone number",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>

              {/* email input */}
              <div className="text-center">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="form-control"
                  ref={register({
                    required: "Please provide your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* subject input */}
              <div className="text-center">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="form-control"
                  ref={register({
                    required: "OOPS, you forget to add the subject.",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* Description input */}
              <div className="text-center">
                <textarea
                  type="text"
                  placeholder="Please describe shorty your project..."
                  name="description"
                  className="form-control"
                  ref={register({
                    required: "Please describe shorty your project needs... ",
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
