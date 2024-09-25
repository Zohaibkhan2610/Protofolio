import React from "react";
import "./../App.css";
import './Contact.css'
import email from "./../assets/email.png";
import Linkdin from "./../assets/linkedin.png";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="container contact-con">
      <div className="Contact">
        <p>Get in Touch</p>
        <h1>Contact me</h1>
      </div>
      <div className="contact">
        <div className="contact-text">
        <img className="icon" src={email} alt="" />
        <p>
          <Link>Exapmle@gamil.com</Link>
        </p>
        </div>
        <div className="contact-text">
        <img className="icon" src={Linkdin} alt="" />
        <p>
          <Link>Linkdin</Link>
        </p>
        </div>
      </div>
    </div>
  );
}
