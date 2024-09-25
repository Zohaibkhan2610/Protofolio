import React from "react";
import image1 from "./../assets/profile-pic.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import gitHub from "./../assets/github.png";
import Linkdin from "./../assets/linkedin.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Herosection.css";
import "./../App.css";

export default function Herosection() {
  return (
    <div className="container">
      <div className="hero">
        <div className="proto-img">
          <img className="proto-img" src={image1} alt="Protofoil imges" />
        </div>
        <div className="intro">
          <div className="intro-text">
            <p>Hello,I'm</p>
            <h1>John Doe</h1>
            <h3>Frotend Developer</h3>
            <div className="cv-btns">
              <button className="btn">Download CV</button>
              <button className="btn btn-cv2">Contact info</button>
            </div>
            <div className="social-container">
              <Link>
                <img src={Linkdin} className="icon" alt="" />
              </Link>
              <Link>
                <img src={gitHub} className="icon" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
