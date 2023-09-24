import {
    SiPython,
    SiDocker,
    SiMicrosoftazure,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiPowerbi,
    SiScikitlearn
} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {AiOutlineConsoleSql} from "react-icons/ai";
import {BiLogoJava} from "react-icons/bi";
import {RiOpenaiFill} from "react-icons/ri";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <AiOutlineConsoleSql size={50}/>,
            text: "SQL"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <BiLogoJava size={50}/>,
            text: "Java"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <RiOpenaiFill size={50}/>,
            text: "OpenAI"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiMicrosoftazure size={50}/>,
            text: "Azure"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "SciKit-Learn"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiSnowflake size={50}/>,
            text: "Snowflake"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
    ]
}

export default skillsConfig
