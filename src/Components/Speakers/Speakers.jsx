import React from "react";
import "./Speakers.css";
import leftNav from "../../assets/img/Left-nav.png";
import rightNav from "../../assets/img/Right-nav.png";
// import firstStudent from "../../assets/img/first-stydent.png";
// import secondDtudent from "../../assets/img/second-student.png";
import StudentCard from "./StudentCard/FirstStudentCard/StudentCard";
import SecondStudent from "./StudentCard/SecondStudentCard/SecondStudent"

const Speakers = (props) => {
    return (
        <section>
            <header>
                <h1>{props.data.speakers.header.h1}</h1>
                <p>{props.data.speakers.header.viewAll}</p>
            </header>
            <div className="speakers-wrapper">
                <div className="speakers-block info">
                    <p>{props.data.speakers.info}</p>
                    <div className="nav">
                        <img src={leftNav} alt="" />
                        <img src={rightNav} alt="" />
                    </div>
                </div>
                <StudentCard name = {props.data.speakers.students.student1}/>
                <SecondStudent name = {props.data.speakers.students.student2}/>
                {/* <div className="speakers-block one">
                    <div className="speakers-block-wrapper">
                        <h1>Amaka Igwe</h1>
                        <div className="student-desc">
                            <p>Student ambassador</p>
                            <p>LA.NG</p>
                        </div>
                    </div>
                </div> */}
                {/* <div className="speakers-block two">
                    <div className="speakers-block-wrapper">
                        <h1>Debra Rowland</h1>
                        <div className="student-desc">
                            <p>Family therapist</p>
                            <p>LA.NG</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Speakers;