import React from "react";
import "./SecondStudent.css";


const SecondStudent = (props) =>{
    return(
        <div className="speakers-block two">
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

export default SecondStudent;