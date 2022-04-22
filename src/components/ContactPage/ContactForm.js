import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DivWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const DivBoxImage = styled.div`
  background-image: url('./images/pizzaLeft.jpg');
  width: 50%;
  background-size: cover;
  height: 100vh;
`;

const DivBoxContactForm = styled.div`
  width: 50%;
`;

const DivBox = styled.div`
  margin: 150px 0px 0px 30px;
`;

const ContactTitle = styled.h1`
  margin-bottom: 20px;
`;

const ContactFormPizza = styled.form`
  display: block;
  margin: 0 auto;
`;

const DivParent = styled.div`
  margin-bottom: 20px;
`;

const ContactLabel = styled.label`
  color: grey;
`;

const ContactInput = styled.input`
  width: 500px;
  border: none;
  border-bottom: 1px solid #000;
  font-weight: 600;
  padding: 5px 0px;
  outline: none;
  &::placeholder {
    color: #000;
  }
`;

const SendButton = styled.button`
  cursor: pointer;
  background-color: #000;
  padding: 15px 30px;
  color: #fff;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    color: #000;
    background-color: #fff;
  }
`;

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const changeHandler = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault();

    if (contact.name === '' || contact.email === '' || contact.message === '') {
      return alert('Please fill all fields');
    }

    axios
      .post('https://jsonplaceholder.typicode.com/posts', contact)
      .then((res) => {
        console.log(res);
        alert('Your message has been sent');
        console.log(contact);
      })
      .catch((err) => {
        console.log(err);
      });

    setContact({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <DivWrapper>
      <DivBoxImage></DivBoxImage>
      <DivBoxContactForm>
        <DivBox>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactFormPizza onSubmit={sendForm}>
            <DivParent>
              <ContactLabel>Full name</ContactLabel>
            </DivParent>
            <DivParent>
              <ContactInput
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                value={contact.name}
                onChange={changeHandler}
              />
            </DivParent>
            <DivParent>
              <ContactLabel>Email Address</ContactLabel>
            </DivParent>
            <DivParent>
              <ContactInput
                type="email"
                placeholder="Your Email Adress"
                id="email"
                name="email"
                value={contact.email}
                onChange={changeHandler}
              />
            </DivParent>
            <DivParent>
              <ContactLabel>Your Message</ContactLabel>
            </DivParent>
            <DivParent>
              <ContactInput
                type="text"
                id="message"
                name="message"
                value={contact.message}
                onChange={changeHandler}
              />
            </DivParent>
            <SendButton type="submit">Send</SendButton>
          </ContactFormPizza>
        </DivBox>
      </DivBoxContactForm>
    </DivWrapper>
  );
};

export default ContactForm;
