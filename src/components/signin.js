/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Base_UserApp from "../core/base";

export default function Login(){
    const history = useHistory()
    return (
        <Base_UserApp
        
        styles={"page_title"}
        >
            <Form className="user-login">
                <h1>Login Page</h1>
                <Form.Group className="user-log" controlId="formBasicEmail">
                    <Form.Label className="log">Email address</Form.Label>
                    <Form.Control className="log-ctrl" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="user-log" controlId="formBasicPassword">
                    <Form.Label className="log">Password</Form.Label>
                    <Form.Control className="log-ctrl" type="password" placeholder="Password" />
                </Form.Group>
        
                <Button variant="primary" onClick={()=>history.push("/")} type="submit">Sign In</Button>
            </Form>
        </Base_UserApp>
        
    )
}