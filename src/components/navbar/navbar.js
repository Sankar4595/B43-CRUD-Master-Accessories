import { Divider } from "@mui/material";
import React from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Navbar_user(){
    const history = useHistory()
    return(
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Master Accessories</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex" style={{marginLeft: "3rem"}} >
                        <Form.Control style={{width: "25rem"}} type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                    <Form className="user-input">
                        <Button variant="primary" onClick={()=>history.push("/login")} className="login-btn">Login</Button>
                        <Button variant="danger" onClick={()=>history.push("/signup")} className="login-btn">Signup</Button>
                    </Form>
                </Container>
                
            </Navbar>
    )
}