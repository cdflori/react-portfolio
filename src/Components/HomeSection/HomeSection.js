import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";
import "./style.css";
import flores from "../../assets/cflorespic.png";

export default function HomeSection() {
  return (
      <section id="#home" className="jumboContainer container">
        <div className="boxContainer">
        <div className="flexyBox imgBox">
              <Image
                fluid
                src={flores}
                // src={process.env.PUBLIC_URL + "/assets/cflorespic.png"}
                aria="Christina Flores Image"
                className="profileImg"
              />

          </div>
          <div className="flexyBox">
            <h1 className="header">Hi! I'm Christina</h1>
            <h3 className="subHeader">I am a Front End Developer and Designer.</h3>
            <br/>
            <a href="#mywork">
              <button className="creationBtn">SEE MY WORK</button>
            </a>
          </div>
        </div>
      </section>
  );
}
