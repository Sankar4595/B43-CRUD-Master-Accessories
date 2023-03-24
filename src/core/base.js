/* eslint-disable react/jsx-pascal-case */
import { style } from "@mui/system";
import React from "react";
import Navbar_user from "../components/navbar/navbar";
import UserOptions from "../components/navbar/options";

export default function Base_UserApp({title,styles,children}){
    return (
        <div className="base">
            <div className="nav-bar">
                <Navbar_user />
            </div>
            <div className="user-option">
                <UserOptions/>
            </div>
           
                <div className={styles}>{title}</div>
                <div className="children">{children}</div>
            {/* <footer>
                <u1>
                    <li className="list-link"><a className="link" href="/home">Home</a></li>
                    <li className="list-link"><a className="link" href="/contact us">Contact us</a></li>
                    <li className="list-link"><a className="link" href="/more">More</a></li>
                </u1>
            </footer> */}
        </div>
    )
}