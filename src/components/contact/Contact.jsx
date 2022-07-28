import React, { useRef, useState } from "react";
import "./Contact.css";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1ffjzdt",
        "template_pufwahh",
        formRef.current,
        "yqQNQKpFONM3NY_qq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-background"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <PhoneInTalkIcon className="c-icon" /> (337)-257-9202
            </div>
            <div className="c-info-item">
              <AlternateEmailIcon className="c-icon" />
              stellarinnovationco@gmail.com
            </div>
            <div className="c-info-item">
              <PlaceIcon className="c-icon" /> 123 Merlot Cir., Laf, La. 70503
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Get in touch!</b> Available for freelancing and hire!
          </p>
          <form ref={formRef} onSubmit={handleEmailSubmit} className="c-form">
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_Email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button className="sendEmailBtn">
              SEND
              <ArrowForwardIcon />
            </button>
            <div className="sent-toast">
              {done
                ? "Thank you for your interest... Your email has been sent!"
                : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
