import React from "react";
import "./Projects.css";
import "./../App.css";
import pro1 from "./../assets/project-1.png";
import pro2 from "./../assets/project-2.png";
import pro3 from "./../assets/project-3.png";

export default function Projects() {
  return (
    <div className="container">
      <div className="main-container">
      <div className="main project-main">
        <p>Browers My Recent</p>
        <h1>Projects</h1>
      </div>
      <div className="main-details">
        <div className="Project">
          <img src={pro1} alt="" />
          <div className="pro-text">
            <h1>Project One</h1>
            <div className="pro-btn">
              <button className="btn">Github</button>
              <button className="btn">Live Demo</button>
            </div>
          </div>
        </div>
        <div className="Project">
          <img src={pro2} alt="" />
          <div className="pro-text">
            <h1>Project Two</h1>
            <div className="pro-btn">
              <button className="btn">Github</button>
              <button className="btn">Live Demo</button>
            </div>
          </div>
        </div>
        <div className="Project">
          <img src={pro3} alt="" />
          <div className="pro-text">
            <h1>Project Three</h1>
            <div className="pro-btn">
              <button className="btn">Github</button>
              <button className="btn">Live Demo</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
