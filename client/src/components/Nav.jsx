import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";


const styles = {
  name: {
    fontSize: 50,
    color: 'white',
  },
 
}

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand style={styles.name} >Mens Clothing</Navbar.Brand>
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
              to="/shirts"
              className={
                currentPage === "/shirts" ? "nav-link active" : "nav-link"
              }
            >
              Shirts
            </Link>
            </div>
            <div>
            <Link 
              to="/jackets"
              className={
                currentPage === "/jackets" ? "nav-link active" : "nav-link"
                }
                >
              Jackets
            </Link>
            </div>
            <div>
            <Link 
              to="/hoodies"
              className={
                currentPage === "/hoodies" ? "nav-link active" : "nav-link"
                }
                >
              Hoodies
            </Link>
              </div>
              <div>
            <Link 
              to="/shorts"
              className={
                currentPage === "/shorts" ? "nav-link active" : "nav-link"
                }
                >
              Shorts
            </Link>
              </div>
              <div>
            <Link 
              to="/pants"
              className={
                currentPage === "/pants" ? "nav-link active" : "nav-link"
                }
                >
              Pants
            </Link>
              </div>
              <div>
            <Link 
              to="/sweatpants"
              className={
                currentPage === "/sweatpants" ? "nav-link active" : "nav-link"
                }
                >
              SweatPants
            </Link>
              </div>
              <div>
            <Link 
              to="/underwear"
              className={
                currentPage === "/underwear" ? "nav-link active" : "nav-link"
                }
                >
              UnderWear
            </Link>
              </div>
              <div>
            <Link 
              to="/shoes"
              className={
                currentPage === "/shoes" ? "nav-link active" : "nav-link"
                }
                >
              Shoes
            </Link>
              </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}