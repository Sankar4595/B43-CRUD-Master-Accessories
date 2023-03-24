import React from "react";
import {  Container, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function UserOptions(){
    const history = useHistory()
    return(
            <Container>
                <Nav className="nav-container" navbarScroll>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about" >About</Nav.Link>
                    <NavDropdown title="Products" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/screenprotector" >Screen Protector</NavDropdown.Item>
                        <NavDropdown.Item href="/backcase">Mobile BackCase</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/" onClick={()=>history.push("/")}>Mobile Service</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" >Contact as</Nav.Link>
                </Nav>
            </Container>
        
    )
}