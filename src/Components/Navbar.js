import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/Logo1.png";
import { Link } from 'react-router-dom'

function Navbarr() {
    const logoStyle={
        position: "absolute",
        top:"5px",
        left:"10px",
        width:"85px"
    }
    const navStyle={
        height:"115px"
    }
    const brandStyle = {
        color: "#fff",
        fontWeight: "bold", 
        fontSize: "24px", 
        fontFamily: "Arial, Helvetica, sans-serif"
       
    };
    const linkStyle = {
        fontSize:"20px",
        color: "white",
        textDecoration: "none", 
        margin: "0 15px",
        fontFamily: "Arial, Helvetica, sans-serif"
    };
  return (
    <Navbar expand="lg" className="bg-info">
      <Container style={navStyle}>
        <Navbar.Brand href="#home"  style={brandStyle}>Enspire</Navbar.Brand>

        <img src={Logo} alt="" style={logoStyle} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      <Link to="/" style={linkStyle}>
            <Nav.Link href="#home" >Home</Nav.Link>
            </Link>
            <Link to="/event" style={linkStyle}>
            <Nav.Link href="#link">Events</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;