import React, { Component } from 'react'  
import Logo from "../images/Blanklogo.png"
import { BrowserRouter,  Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import  { Container }  from "react-bootstrap";
import { NavDropdown } from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import Courses from "./Courses";
import Home from "./Home"
import Faq from "./Qna"
import ".//Navbar.css"

export class BootstrapNavbarDropdown extends Component {
  render() {
    return (
<BrowserRouter>
     <div>
<Navbar variant="green" expand="lg">
    <Container fluid>
      <Navbar.Brand ><img src={Logo} style={{width:80, marginTop: -10, marginBottom:-20}} alt="/"/></Navbar.Brand>
        <Navbar.Toggle  aria-controls="-navbar-nav"  className="order-md-1 order-0" />
        <Navbar.Collapse   className="justify-content-end" >
    <Nav.Link as={Link} to="/Home ">Home</Nav.Link>
    <Nav.Link as={Link} to="/Faq">Golf Q & A</Nav.Link>
  <Nav>
    <NavDropdown
     id="nav-dropdown-dark-example"
      title="Courses"
      menuVariant="dark">
          <NavDropdown.Item as={Link} to="/Courses ">Top of Page</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item as={Link} to="/Courses/Cuscowilla">Cuscowilla</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Courses/Augusta">Augusta</NavDropdown.Item>        
          <NavDropdown.Item as={Link} to="Courses/Pebble">Pebble</NavDropdown.Item>
    </NavDropdown>
  </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>
      <div>
      <Routes>
          <Route path="/Faq" element={<Faq/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Courses/Cuscowilla" element={<Courses />} />
          <Route path="/Courses/Augusta" element={<Courses />} />
          <Route path="/Courses/Utah" element={<Courses />} />
        </Routes>

      </div>
     </div>
    
</BrowserRouter>
         
    )
  }
}
    

   
export default BootstrapNavbarDropdown