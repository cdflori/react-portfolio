import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";
import "./style.css";

export default function HomeSection() {
  return (
      <section className="jumboContainer container">
        <div className="boxContainer">
        <div className="flexyBox imgBox">
              <Image
                fluid
                src={process.env.PUBLIC_URL + "assets/CFloresPic.jpg"}
                aria="Christina Flores Image"
                className="profileImg"
              />
          </div>
          <div className="flexyBox">
            <h1 className="header">Hi, I'm Christina!</h1>
            <h4 className="subHeader">I am a Front End Developer and Designer</h4>
            <br/>
            <button className="creationBtn">SEE MY WORK</button>
          </div>
        </div>
      </section>
  );
}
