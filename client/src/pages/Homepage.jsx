import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import "./Homepage.css";

const styles = {
    slide: {
    display: "block", 
    width: "25%" , 
    padding: 30
    },
    pic: {
    display: "flex",
    justifyContent: "space-evenly"
    },
    button: {
        display: "flex",
        justifyContent: "space-evenly"
    }
}

export default function HomePage() {
    return (
        <div style={styles.pic}>
        <div style={styles.slide}>
        <Carousel fade>
        <Carousel.Item >
          <img  className="d-block w-100" src="/images/hoodie.jpg" text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        
        </Carousel.Item>
        <Carousel.Item >
          <img className="d-block w-100"  src="/images/hoodie.jpg"  text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
         
        </Carousel.Item>
        <Carousel.Item >
          <img  className="d-block w-100" src="/images/hoodie.jpg" text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item >
      </Carousel>
      <div style={styles.button}>
      <Button variant="primary" size="lg">
          Let's Shop
        </Button>
      </div>
        </div>
        </div>
    )
}