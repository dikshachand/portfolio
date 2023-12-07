import React from "react";

import {
    AiFillCode,
    AiFillHome,
    //AiOutlineGithub
} from "react-icons/ai";
import {BsRocketTakeoff} from "react-icons/bs";
import { MdOutlineHealthAndSafety } from "react-icons/md";
// import { FaGoogle } from "react-icons/fa";


const menuConfig = {

    sidebarData: [
        {
            id: "menu-0",
            title: "Home",
            path: "/portfolio",
            icon: <AiFillHome size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-1",
            title: "Health-Tech",
            path: "/healthtech",
            // title: "Google",
            // path: "/google",
            icon: <MdOutlineHealthAndSafety size={35}/>,
            // icon: <FaGoogle size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-2",
            title: "GHC '23",
            path: "/blogs",
            icon: <BsRocketTakeoff size={35}/>,
            className: "nav-text"
        },
        {
            id: "menu-3",
            title: "Skills",
            path: "/skills",
            icon: <AiFillCode size={35}/>,
            className: "nav-text"
        }
    ]

}

export default menuConfig
