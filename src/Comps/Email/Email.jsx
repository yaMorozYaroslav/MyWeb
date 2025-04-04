import React from 'react';
import s from './Email.module.css';
import { Alert } from '../Alert/Alert';
import axios from 'axios';

export const Email = ({ alertState, openAlert, closeAlert, closeMailForm }) => {
  const [source, setSource] = React.useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    items: ''
  });

  const handChange = (e) =>
    setSource({ ...source, [e.target.name]: e.target.value });

  const [flash, setFlash] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFlash((prev) => (prev === 0 ? 1 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, [flash]);

  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ Basic field validation before sending
    if (!source.user_name || !source.user_email || !source.user_phone) {
      alert('Please fill out all required fields.');
      return;
    }

    axios
      .post('https://idea-sphere-50bb3c5bc07b.herokuapp.com/email', source)
      .then((response) => {
        console.log(response.status, response.data);
        openAlert();
      })
      .catch((error) => {
        if (error.response) {
          console.error("Server responded with:", error.response.data);
          alert(`Failed to send: ${error.response.data.message}`);
        } else {
          console.error("Request error:", error.message);
          alert("Could not send message. Please try again later.");
        }
      });
  };

  return (
    <>
      {alertState && <Alert closeAlert={closeAlert} />}

      {!alertState && (
        <section className={s.container}>
          <form onSubmit={sendEmail}>
            <label className={s.label} htmlFor="user_name">
              Name
            </label>
            <input
              id="user_name"
              className={s.input}
              onChange={handChange}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />

            <label className={s.label} htmlFor="user_email">
              Email
            </label>
            <input
              id="user_email"
              className={s.input}
              onChange={handChange}
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />

            <label className={s.label} htmlFor="user_phone">
              Phone
            </label>
            <input
              id="user_phone"
              className={s.inputSub}
              onChange={handChange}
              type="text"
              placeholder="Phone"
              name="user_phone"
              required
            />

            <label className={s.label0} htmlFor="items">
              Message
            </label>
            <textarea
              id="items"
              className={s.textarea}
              onChange={handChange}
              name="items"
              cols="30"
              rows="5"
            ></textarea>

            <button className={s.button} type="submit">
              Send
            </button>
          </form>

          <div>
            <button
              className={flash ? s.closer : s.closer0}
              onClick={closeMailForm}
            >
              X
            </button>
            <h2 className={s.tit}>Contact Form</h2>
          </div>
        </section>
      )}
    </>
  );
};
