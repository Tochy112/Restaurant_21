import React from "react";
<<<<<<< HEAD
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.css";
import Image from "react-bootstrap/Image";
import Resturant from "../Image/respeople.jpg";

const Home = () => {
  return (
    <Container fluid className="fluid">
      <Row className="background g-0">
        <div className="restaurant-caption">
          <h3>Welcome To Our restaurant</h3>
          <h1>SIDE HUSTLE FOOD</h1>
          <h5>
            You can get your delicious meal any where in Nigeria order online
            today
          </h5>
        </div>
        <div className="order-button mb-2">
          <Button variant="primary" size="lg">
            Order Now
          </Button>
        </div>
      </Row>
      <Row className="offer-color">
        <div className="our-offer">
          <h3> We Offer </h3>
        </div>
        <Row className="offer-size justify-content-md-center">
          <Col md={3} className="service">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                src="/images/chinese-food.jpg"
              />
              <Card.Title
                className="card-title "
                style={{ height: "20px", backgroundColor: "#ffff5c" }}
              >
                Chinese Food
              </Card.Title>
            </Card>
          </Col>
          <Col md={3} className="service">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                src="/images/nigeria-food.jpg"
              />

              <Card.Title
                className="card-title "
                style={{ height: "20px", backgroundColor: "#ffff5c" }}
              >
                Nigeria Food
              </Card.Title>
            </Card>
          </Col>
          <Col md={3} className="service">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                src="/images/sea-food.jpg"
              />

              <Card.Title
                className="card-title "
                style={{ height: "20px", backgroundColor: "#ffff5c" }}
              >
                Sea Food
              </Card.Title>
            </Card>
          </Col>
        </Row>
        <Row className="team-div">
          <Col md={6}>
            <div className="team-intro">
              <h3>OUR TEAM </h3>
              <p className="team-header">
                Our team consist of The Chef, Quality control, Dietician{" "}
              </p>
              <p className="team-text mt-2">
                This is to ensure our food is well prepared and meet up the
                daily basic nutritional requirement. Different ranges of food
                can be serve to people with different health conditions like
                Hypertension and Diabetic. The diet will supply the required
                nutrients for people with this health condition without causing
                unwanted health effect.
              </p>
              <Button varient="primary" size="lg" className="mb-2 mt-5">
                Find Out More
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <Image className="team-image" src={Resturant} fluid />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

=======

const Home = () => {
  return <div>Home</div>;
};

>>>>>>> master
export default Home;
