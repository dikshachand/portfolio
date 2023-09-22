import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {FaHandHoldingMedical} from "react-icons/fa6";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/dikshachand",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/diksha-chand/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "https://naarica.in/",
            className: "social-icon",
            target: "_blank",
            icon: <FaHandHoldingMedical size={50}/>
        }
    ]
}

export default footerConfig
