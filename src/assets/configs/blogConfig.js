import React from 'react'
import {SiMedium} from "react-icons/si";
import blogimg1 from "../images/6.png"
import blogimg2 from "../images/7.png"
import blogimg3 from "../images/8.png"
import blogimg4 from "../images/9.png"
import blogimg5 from "../images/10.png"
import blogimg6 from "../images/11.png"


const blogConfig = [
    {
        id: "blog-8",
        title: "Digital Horizons: Bridging the Knowledge Divide",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/how-to-solve-scheduling-problems-in-python-36a9af8de451",
                icon: <SiMedium/>
            }
        ],
        image: blogimg1,
        description: "Fostered digital literacy skills among underprivileged youth through engaging guest lectures, organized by a non-profit social work organization.",
        target: "_blank"
    },
    {
        id: "blog-7",
        title: "Naarica: Menstrual Dignity & Empowerment",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/adaptive-parameters-methods-for-machine-learning-6f7101a9a71",
                icon: <SiMedium/>
            }
        ],
        image: blogimg2,
        description: "A community-driven initiative delivering accessible menstrual solutions to rural areas, fostering dignity and empowerment among women and girls.",
        target: "_blank"
    },
    {
        id: "blog-6",
        title: "RAGE for Change: Fostering Gender Equity",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/evolutionary-feature-selection-for-machine-learning-7f61af2a8c12",
                icon: <SiMedium/>
            }
        ],
        image: blogimg3,
        description: "Actively participating in thought-provoking discussions on gender issues and contributing to skill-building events at Carnegie Mellon for a more equitable future.",
        target: "_blank"
    },
    {
        id: "blog-5",
        title: "Lean-In Together: Women's Leadership Journeys",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/real-time-anomaly-detection-with-apache-kafka-and-python-3a40281c01c9",
                icon: <SiMedium/>
            }
        ],
        image: blogimg4,
        description: "A dedicated member and believer of the Lean In community, collaborating to inspire and empower women in their personal and professional growth, helping foster future leaders.",
        target: "_blank"
    },
    {
        id: "blog-4",
        title: "HerTech Advantage: Transforming Women Owned Businesses",
        links: [
            {
                name: "article",
                url: "https://medium.com/analytics-vidhya/serve-a-machine-learning-model-using-sklearn-fastapi-and-docker-85aabf96729b",
                icon: <SiMedium/>
            }
        ],
        image: blogimg5,
        description: "Enabling a women-owned enterprise to thrive through a custom operations management system, driving digital transformation, cost reductions and business efficiency.",
        target: "_blank"
    },
    {
        id: "blog-3",
        title: "Alumni Mentorship Symposium: Navigating Careers with Confidence",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/hyperparameters-tuning-from-grid-search-to-optimization-a09853e4e9b8",
                icon: <SiMedium/>
            }
        ],
        image: blogimg6,
        description: "Empowered over 200 undergraduates through career insights, negotiation tactics, and profile-building strategies through a dynamic alumni-led session and LinkedIn coaching.",
        target: "_blank"
    },
]

export default blogConfig