import React from "react";
import "./Subscribe.css";

const Subscribe = (props) => {
    return (
        <section id="subscribe">
            <div className="subscribe-wrapper">
                <h1>{props.data.subscribe.title}</h1>
                <p>{props.data.subscribe.desc}</p>
                <form action="#">
                    <input type="text" id="text" placeholder="Textfield text" />
                    <input type="button" name="" id="btn" value="Subscribe +" />
                </form>
            </div>
        </section>
    )
}
export default Subscribe;