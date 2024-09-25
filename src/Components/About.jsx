import React from "react";
import "./../App.css";
import image from "./../assets/about-pic.png";
import Education from "././../assets/education.png";
import Experenice from "././../assets/experience.png";
import "./About.css";

export default function About() {
  return (
    <div className="container">
      <div className="About">
        <div className="main about">
          <p>Get to Know More</p>
          <h1>About me</h1>
        </div>
        <div className="main-details">
            <img src={image} className="About-img" alt="About image" />
            <div className="About-section">
              <div className="About-practical">
                <div className="course">
                  <img src={Experenice} className="icon" alt="Experenice img" />
                  <h2>Experience</h2>
                  <p>2+ years</p>
                  <p>Frontend Development</p>
                </div>
                <div className="course">
                  <img src={Education} className="icon" alt="Education img" />
                  <h2>Education</h2>
                  <p>B.sc.Bachelors Degree</p>
                  <p>M.Sc.Masters Degree</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nec finibus dolor, ut dictum nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Cras et tellus suscipit, pulvinar erat sit amet, malesuada
                libero. Nulla commodo auctor mi, sed convallis nisl tincidunt
                eu. Donec at turpis at leo malesuada molestie a a dui. Fusce sit
                amet mi ac tortor mattis luctus. Praesent sed ligula ante.
                Aliquam vitae consequat eros. Sed commodo dolor fringilla risus
                condimentum rutrum. Morbi venenatis arcu nec felis rutrum, eget
                ullamcorper turpis commodo.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}
