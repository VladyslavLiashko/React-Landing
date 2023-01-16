import React from "react";
import imgMessage from "../../assets/img/Header_message.png";
import "./Header.css"
const Header = (props) =>{
    return(
      <header>
        <div className="logo">
          <img src={imgMessage} alt="" srcset="" />
          <p>{props.data.header.logo}</p>
        </div>
        <nav>
          <a href="#">{props.data.header.nav.link1}</a>
          <a href="#">{props.data.header.nav.link2}</a>
          <a href="#">{props.data.header.nav.link3}</a>
          <a href="#">{props.data.header.nav.link4}</a>
        </nav>
        <div className="header-btn">
          <p>{props.data.header.buttons.login}</p>
          <button>{props.data.header.buttons.signup}</button>
        </div>
      </header>
    )
  } 

export default Header;