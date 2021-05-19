import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

var d = new Date();
var n = d.getFullYear();

export default function Footer() {
    return (
        <>
            <div style={{
                backgroundColor: "#252525", height: "50px", display: "flex",
                justifyContent: "center",
                alignItems: "center",
                }}>
                <a href="https://www.linkedin.com/in/shubhams7134/" target="_blank">
                    <AiFillLinkedin style={{width:'40px',height:'40px',color:'white'}} />
                </a>
                <a href="https://github.com/shubhams7134" target="_blank">
                    <AiFillGithub style={{width:'40px',height:'40px',color:'white'}}/>
                </a>
                <a href="mailto:shubhams7134@gmail.com" target="_blank">
                    <AiFillMail style={{width:'40px',height:'40px',color:'white'}}/>
                </a>
            </div>
        </>
    )
}