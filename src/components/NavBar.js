import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';
import logoFundoTransparente from './img/logoFundoTransparente.png';
import whatsapp from './img/whatsapp.png'
import ReactWhatsapp from 'react-whatsapp';
import {Link} from 'react-router-dom';


function NavBar(){

return(
<>
<Navbar collapseOnSelect expand="lg"  style={{background:'white'}} fixed="top">
  <Container >
  <Navbar.Brand href="/"><img src={logoFundoTransparente}alt="" style={{'margin-right':'80px'}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" >
      <Nav.Link href="#features" >Quem Somos</Nav.Link>
      
      <NavDropdown title="Tratamentos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/criolipolise">Criolipólise</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Botox</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Ozonioterapia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">PRF - Plasma Gel</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Luz Intensa Pulsada</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Criofrequência</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Depilação Definitiva Laser</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      
      <Nav.Link >
        <ReactWhatsapp number="5524993000327" message="Estou vindo do site" style={{border: 'none', background:'white'}}>
        <img src={whatsapp} alt="" />
          </ReactWhatsapp>
        
     
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

</>
)
}

export default NavBar;



