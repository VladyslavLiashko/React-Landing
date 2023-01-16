import React from "react";
import "./Footer.css";
import logo from "../../assets/img/Footer_message.png"

const Footer = (props) => {
    return (
        <section id="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>{props.data.footer.logo}</p>
            </div>
            <div className="footer-wrapper">
                <div className="footer-links">
                    <div className="link-block">
                        <p>{props.data.footer.linkTitles.Company}</p>
                        <a href="#">{props.data.footer.links.firstBlock.link1}</a>
                        <a href="#">{props.data.footer.links.firstBlock.link2}</a>
                        <a href="#">{props.data.footer.links.firstBlock.link3}</a>
                    </div>
                    <div className="link-block">
                        <p>{props.data.footer.linkTitles.Learn}</p>
                        <a href="#">{props.data.footer.links.secondBlock.link1}</a>
                        <a href="#">{props.data.footer.links.secondBlock.link2}</a>
                        <a href="#">{props.data.footer.links.secondBlock.link3}</a>
                    </div>
                    <div className="link-block">
                        <p>{props.data.footer.linkTitles.Legal}</p>
                        <a href="#">{props.data.footer.links.thirdBlock.link1}</a>
                        <a href="#">{props.data.footer.links.thirdBlock.link2}</a>
                        <a href="#">{props.data.footer.links.thirdBlock.link3}</a>
                    </div>
                    <div className="link-block">
                        <p>{props.data.footer.linkTitles.Help}</p>
                        <a href="#">{props.data.footer.links.fourthBlock.link1}</a>
                        <a href="#">{props.data.footer.links.fourthBlock.link2}</a>
                        <a href="#">{props.data.footer.links.fourthBlock.link3}</a>
                    </div>
                    <div className="link-block">
                        <p>{props.data.footer.linkTitles.Socials}</p>
                        <a href="#">{props.data.footer.links.fifthBlock.link1}</a>
                        <a href="#">{props.data.footer.links.fifthBlock.link2}</a>
                        <a href="#">{props.data.footer.links.fifthBlock.link3}</a>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Footer;