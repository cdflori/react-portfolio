import { Card, Button, Row, Col } from "react-bootstrap";
import "./style.css";
import AboutSection from "../AboutSection/AboutSection";
import upick from "../../assets/upick.png";
import unleash from "../../assets/unleash.png";
import partipug from "../../assets/partipug.png";
import fitness from "../../assets/fitnesstracker.png";
import book from "../../assets/mybooklist.png";
import burger from "../../assets/burgerapp.png";

export default function MyWork() {
  return (
    <section className="jumboContainer1 container">
      <AboutSection/>
      <div className="container">
        <Row id="mywork" className="headerRow2">
          <h2 className="headerText">Latest Projects</h2>
        </Row>
      </div>   
      <div className="container">
        <Row className="workRow">
          <Col>
            <Card >
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>UPick</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-react fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fas fa-database fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={upick}
                aria="UPick Image"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  A MySQL and React App that allows indecisive users to choose
                  food and movies through a tinder like card selection.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://u-pick-app.herokuapp.com/signup"
                >
                  View Upick
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Unleash</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-envira fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-bootstrap fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={unleash}
                aria="Unleash Image"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  A Mongo DB, JQuery, and Handlebars App. This is the new
                  LinkedIn for pets! Help your pet's find work so you don't have
                  to.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://artemis-project-2.herokuapp.com/"
                >
                  View Unleash
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20 rem" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>PartiPug</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-shopify fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-css3-alt fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={partipug}
                aria="PartiPug Image"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  A JS and Shopify powered e-commerce site. PartiPug is a
                  subscription and novelty site for Pug Lovers and their pets.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://partipug.com/"
                >
                  View PartiPug
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row className="workRow">
          <Col>
            <Card style={{ width: "20 rem" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Burger App</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-node-js fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fas fa-database fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={burger}
                aria="Burger App Image"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  A MySQL and Express application where the user can create new
                  burger types and choose to devour (EAT) the burger.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://fathomless-harbor-25447.herokuapp.com/burgers"
                >
                  View Burger App
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20 rem" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Fitness App</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-node-js fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fas fa-database fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={fitness}
                aria="Fitness Tracker"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  A Fitness Tracker App built with Mongo DB and Atlas. The user
                  can create and track new workouts by type.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://secret-oasis-94573.herokuapp.com/"
                >
                  View Fitness App
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20 rem" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Book List</Card.Title>
                  </Col>
                  <Col>
                    <i class="fab fa-js-square fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fab fa-node-js fa-2x miniIcon"></i>
                  </Col>
                  <Col>
                    <i class="fas fa-database fa-2x miniIcon"></i>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img
                fluid
                src={book}
                aria="My Book List"
                className="workImg"
              />
              <Card.Body>
                <Card.Text>
                  Built with React. This app will allow the user to enter new
                  books to read and manage existing tiles on their list.
                </Card.Text>
                <a
                  className="workBtn"
                  variant="primary"
                  href="https://desolate-oasis-67204.herokuapp.com/"
                >
                  View Book List
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
