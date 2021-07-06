import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "../style/Contact.module.css";
import emailjs from "emailjs-com";

function ContactForm() {
  const label = {
    fontSize: "18px",
    fontWeight: "500",
    margin: "0",
  };

  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_maw785r",
        e.target,
        "user_i7L9nE1wpCWNfGABf3nha"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Message has been successfullly send !🎉");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className={style.ContactAdvice}>
        <div className={style.ContactAdviceTitle}>
          Get in Touch 'n Hire Devarshi
        </div>
        <p className={style.ContactAdviceSubHeading}>
          You have the power to rock that form convesion rate
        </p>
      </div>
      <Form
        style={{ margin: "10px 0px 40px 0px" }}
        validated={true}
        onSubmit={sendEmailHandler}
      >
        <Form.Group controlId="formBasicName">
          <Form.Label style={label}>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" name="name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label style={label}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label style={label}>Phone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Enter Phone Number"
            name="phone"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label style={label}>Message*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a message here"
            style={{ height: "100px" }}
            name="message"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
