/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Base_UserApp from "../core/base";

export default function About(){
    return(
        <Base_UserApp
            styles={"about-page"}
        >
            <div className="about">
                    <p className="content">
                        We're optimistic for a future where people live healthier, more informed, more creative lives.
                    </p>
            </div>
        </Base_UserApp>
    )
}