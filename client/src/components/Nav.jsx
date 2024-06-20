import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";


const styles = {
  name: {
    fontSize: 50,
    color: 'black',
  },
 
}

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand style={styles.name} >Lee's Clothing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <div style={styles.linkborder}>
            <Link 
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
              >
              HomePage
            </Link>
            </div>
            <div>
            <Link
              to="/aboutus"
              className={
                currentPage === "/aboutus" ? "nav-link active" : "nav-link"
              }
            >
              AboutUs
            </Link>
            </div>
            <div>
            <Link
              to="/contact"
              className={
                currentPage === "/contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
            </div>
            <div>
            <Link
              to="/clothes"
              className={
                currentPage === "/clothes" ? "nav-link active" : "nav-link"
              }
            >
              Clothes
            </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}