import React from "react";
import photo from "../../assets/img/Main_photo.png";
import "./Main.css";

const Main = (props) => {
    return (
        <main>
            <div className="info-block">
                <h1>{props.data.main.info.h1}</h1>
                <p>{props.data.main.info.desc}</p>
            </div>
            <img src={photo} alt="" />
            <div className="ticket-block">
                <h1>{props.data.main.description.h1}</h1>
                <div className="tickets">
                    <div className="date">
                        <p>{props.data.main.description.date}</p>
                        <p>{props.data.main.description.time}</p>
                    </div>
                    <p>{props.data.main.description.lastdesc}</p>
                    <button>{props.data.main.description.btn}</button>
                </div>
            </div>
        </main>
    )
}
export default Main;