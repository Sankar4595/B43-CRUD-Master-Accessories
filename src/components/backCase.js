/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Button, Card } from "react-bootstrap";
import Base_UserApp from "../core/base";
import { case_data } from "../Data/screenData";

export default function BackCase(){
    return(
        <Base_UserApp
            styles={"back-case"}
        >
            <div className="prod-card">
                {case_data.map((data,idx)=>(
                    <Card key={idx}>
                        <Card.Img src={data.img}/>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Body>
                            <Card.Text>₹.{data.old_price}</Card.Text>
                            <Card.Text>₹.{data.new_price}</Card.Text>
                        </Card.Body>
                        <Button variant="primary">Add to Cart</Button>
                    </Card>
                ))}
            </div>
        </Base_UserApp>
    )
}