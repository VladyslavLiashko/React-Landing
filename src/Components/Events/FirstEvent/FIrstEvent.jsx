import React from "react";
import "./FirstEvent.css";

const FirstEvent = (props) => {
    return (
        <div className="event-block first">
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

export default FirstEvent;