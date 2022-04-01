import React from "react"
import { Button } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Container, Row, Col, } from "react-bootstrap";
import { FcGoogle } from 'react-icons/fc';
import { signInWithGoogle } from '../firebase';
import Capture from '../images/Capture.JPG'
import ImageShadow from 'react-image-shadow';

function al(){
    alert("We will be having this feature soon!!")
}

export function NavBarrr() {
    return (
        <section id="title" >
            <div className="container-fluid">
                <Navbar style={{ position: "fixed" }} className="navbar-expand-lg nb " collapseOnSelect expand="lg" >
                    <Container>
                        <h1 className="n-b" href="#home">LemeCon</h1>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="nav-item me-auto">
                            <NavDropdown className="nav-link-pro" title="Product" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#pics">Features</NavDropdown.Item>
                                    <NavDropdown.Item href="#pics">Product Tour</NavDropdown.Item>
                                    <NavDropdown.Item onClick={al} href="#">Channel</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className="nav-link" href="#pricing">Pricing</Nav.Link>
                                <Nav.Link className="nav-link" href="#footer">Help</Nav.Link>
                                <NavDropdown className="nav-link-pro" title="Resources" id="collasible-nav-dropdown">
                                    <NavDropdown.Item onClick={al} href="#">Community</NavDropdown.Item>
                                    <NavDropdown.Item onClick={al} href="#">Product updates</NavDropdown.Item>
                                    <NavDropdown.Item onClick={al} href="#">Api and Developers</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            {/* <hr className="hor-line"
                style={{
                    color: "black",
                    backgroundColor: "black",
                    height: 71
                }}
            /> */}
            <Container className="inbetween-section" >
                <Row xs lg="2">
                    <Col className="rc" >
                        <Row><h1 className="heading-big" >Let's be a social buddy with lemeCon.</h1></Row>
                        <Row className="but-row" xs lg="1" ><Button onClick={signInWithGoogle} variant="outline-dark " className="login-button" > <FcGoogle className="g-icon" /> Sign in with Google</Button></Row>
                    </Col>
                    <Col className="head-img-col" ><img className='heading-img' src={Capture} height={400} width={600} alt="loading" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}