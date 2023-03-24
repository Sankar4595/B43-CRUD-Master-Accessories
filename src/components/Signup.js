/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Base_UserApp from "../core/base";

export default function Signup(){
    const history = useHistory()
    return(
        <Base_UserApp 
            styles={"page_title"}
        >
            <Form className="user-signup">
                <h1>Signup</h1>
                <Form.Group className="gr-2" controlId="formBasicEmail">
                    <Form.Control className="in-2" type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="gr-2" controlId="formBasicPassword">
                    <Form.Control className="in-2" type="password" placeholder="Create password" />
                </Form.Group>

                <Form.Group className="gr-2" controlId="formBasicPassword">
                    <Form.Control className="in-2" type="password" placeholder="confirm password" />
                </Form.Group>
        
                <Button variant="primary" onClick={()=>history.push("/login")} type="submit">Sign Up</Button>
            </Form>
        </Base_UserApp>
    )
}