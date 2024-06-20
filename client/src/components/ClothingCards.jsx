import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



export default function Project({ data }) {
    return (
      <Row style={styles.projectCard}>
        <Col key={data.id} >
          <Card style={styles.border}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body style={styles.bodyStyle}>
              <Card.Title style={styles.titleText}>{data.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
     
    );
  }