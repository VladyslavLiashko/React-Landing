import React from "react";
import "./StudentCard.css";


const StudentCard = (props) =>{
    return(
        <div className="speakers-block one">
            <div className="speakers-block-wrapper">
                <h1>{props.name.name}</h1>
                <div className="student-desc">
                    <p>{props.name.desc}</p>
                    <p>{props.name.place}</p>
                </div>
            </div>
        </div>
    )
}

export default StudentCard;
