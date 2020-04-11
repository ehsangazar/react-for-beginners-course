import React, { useState } from 'react'
import Button from '../Button/Button'
import './Contact'

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [errors,setErrors] = useState({});

    const handleChangeInputSubject = (event) => {
      setSubject(event.target.value);
    };

    const validateEmail = (email) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    const handleChangeInputEmail = (event) => {
        if (validateEmail(event.target.value)){
            setEmail(event.target.value);
            setErrors({
                ...errors,
                email: null,
            })
        }else {
            setErrors({
              ...errors,
              email: 'Email is not valid'
            });
        }
    };

    const handleChangeTextArea = (event) => {
      setDescription(event.target.value);
    };

    const handleSubmit = () => {
      console.log("subject", subject);
      console.log("email", email);
      console.log("description", description);
    };

    return (
      <div className="Contact">
        <div className="formControl">
          <input
            onChange={handleChangeInputSubject}
            type="text"
            placeholder="subject"
          />
        </div>
        <div className="formControl">
          <input
            onChange={handleChangeInputEmail}
            type="email"
            placeholder="Email"
          />
          {errors.email &&<span>{errors.email}</span>}
        </div>
        <div className="formControl">
          <textarea onChange={handleChangeTextArea}>Your request here</textarea>
        </div>
        <div className="formControl">
          <Button handleClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    );
};

export default Contact