import React from 'react'
import Button from '../Button/Button'
import './Contact'

const Contact = () => {

    const handleChangeInputText = (event) => {
      console.log("event", event.target.value);
    };

    const handleChangeInputEmail = (event) => {
      console.log("event", event.target.value);
    };

    const handleChangeTextArea = (event) => {
      console.log("event", event.target.value);
    };

    const handleSubmit = () => {
      console.log('submitted')
    };

    return (
      <div className="Contact">
        <div className="formControl">
          <input
            onChange={handleChangeInputText}
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