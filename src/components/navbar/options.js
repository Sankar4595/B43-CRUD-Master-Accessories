import React from "react";
import {  Container, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function UserOptions(){
    const history = useHistory()
    return(
            <Container>
                <Nav className="nav-container" navbarScroll>
                    <Nav.Link href="/" onClick={()=>history.push("/")}>Home</Nav.Link>
                    <Nav.Link onClick={()=>history.push("/about")}>About</Nav.Link>
                    <NavDropdown title="Products" id="navbarScrollingDropdown">
                        <NavDropdown.Item  onClick={()=>history.push("/screenprotector")} >Screen Protector</NavDropdown.Item>
                        <NavDropdown.Item  onClick={()=>history.push("/backcase")}>Mobile BackCase</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/" onClick={()=>history.push("/")}>Mobile Service</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/" onClick={()=>history.push("/")} >Contact as</Nav.Link>
                </Nav>
            </Container>
        
    )
}