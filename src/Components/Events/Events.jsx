import React from "react";
import "./Events.css";
import FirstEvent from "./FirstEvent/FIrstEvent";
import SecondEvent from "./SecondEvent/SecondEvent";
import ThirdEvent from "./ThirdEvent/ThirdEvent";


const Events = (props) => {
    return (
        <section>
            <header>
                <h1>{props.data.events.title}</h1>
                <p>{props.data.events.desc}</p>
            </header>
            <div className="events">
                <FirstEvent name={props.data.events.firstEvent} />
                <SecondEvent name={props.data.events.secondEvent} />
                <ThirdEvent name={props.data.events.thirdEvent} />
            </div>
        </section>
    )
}
export default Events;