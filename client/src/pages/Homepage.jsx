import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import "./Homepage.css";

const styles = {
    slide: {
    display: "block", 
    width: "40%" , 
    padding: 30
    },
    pic: {
    display: "flex",
    justifyContent: "space-evenly"
    },
    button: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    buttonColor: {
      background: " linear-gradient(to bottom right,#06967e, rgb(27, 109, 68))"
    }
}

export default function HomePage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/clothes');
      };

    return (
        <div style={styles.pic}>
        <div style={styles.slide}>
        <Carousel fade>
        <Carousel.Item >
          <img  className="d-block w-100" src="/images/hoodie.jpg" text="First slide" />
          <Carousel.Caption>
            <h3>What To Expect</h3>
            <h5>Our users will have the ability to navigate to what they need in a simple and effiecient way.</h5>
          </Carousel.Caption>
        
        </Carousel.Item>
        <Carousel.Item >
          <img className="d-block w-100"  src="/images/hoodie.jpg"  text="Second slide" />
          <Carousel.Caption>
            <h3>This Page</h3>
            <h5>From the homePage we have two links showing how to contact us aswell learn about our website.</h5>
          </Carousel.Caption>
         
        </Carousel.Item>
        <Carousel.Item >
          <img  className="d-block w-100" src="/images/hoodie.jpg" text="Third slide" />
          <Carousel.Caption>
            <h3>How to use</h3>
            <h5>
              When you are ready to shop please click on the button at the bottom. 
              You will be taken to our clothing page where you will be given options to filter size, price, and specific products.
            </h5>
          </Carousel.Caption>
        </Carousel.Item >
      </Carousel>
      <div style={styles.button}>
      <Button style={styles.buttonColor} onClick={handleClick} variant="primary" size="lg">
          Let's Shop
        </Button>
      </div>
        </div>
        </div>
    )
}