import React from "react";
import "./ThirdEvent.css";

const ThirdEvent = (props) => {
    return (
        <div className="event-block third">
            <div className="event-wrapper">
                <h1>{props.name.h1}</h1>
                <div className="event-info">
                    <p>{props.name.date}</p>
                    <p>{props.name.info}</p>
                </div>
            </div>
        </div>
    )
}

export default ThirdEvent;