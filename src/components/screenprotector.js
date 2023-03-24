/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Button, Card } from "react-bootstrap";
import Base_UserApp from "../core/base";
import { screen_data } from "../Data/screenData";

export default function ScreenProtector(){
    return(
        <Base_UserApp
            styles={"product_page"}
        >   <div className="prod-card">
            {screen_data.map((data,idx)=>(
                <Card key={idx}>
                    <Card.Img src={data.img}/>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>₹ {data.old_price}</Card.Text>
                        <Card.Text>₹ {data.new_price}</Card.Text>
                    </Card.Body>
                    <Button variant="primary">Add to Cart</Button>
                </Card>
            ))}
            </div>
        </Base_UserApp>
    )
}