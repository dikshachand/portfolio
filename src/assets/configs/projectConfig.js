import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
// import {ImBook} from "react-icons/im";
// import azat from "../images/azat.jpg"
// import usc from "../images/uscounties.png"
// import cmu from "../images/8.png"
import sheru from "../images/sheru.png"
import astro from "../images/astro.png"
import trends from "../images/trends.png"
import eightytwenty from "../images/8020.png"
import toothbrush from "../images/toothbrush.png"
import lab from "../images/lab.png"
// import graphEmbeddings from "../images/graph_embeddings.png"
// import kafkaMl from "../images/kafkaml.png"
// import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    // {
    //     id: "project-3",
    //     title: "Rare Disease Market — Expansion Modeling",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",
    //             icon: <AiFillGithub/>
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",
    //             icon: <BiGitRepoForked/>
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
    //             icon: <AiFillEye/>
    //         }
    //     ],
    //     image: azat,
    //     description: "Student consultant with AT Kearney and Alexion to conduct in-depth research on hyper-rare disease data to discern market expansion factors and accurately forecast growth, employing time series forecasting to predict market expansion. Conducted a comprehensive review of published research, executed data engineering on raw datasets, and constructed a prototype predictive model.",
    //     target: "_blank"
    // },
    // {
    //     id: "project-2",
    //     title: "Diabetes Insights — Language Processing",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/pyworkforce",
    //             icon: <AiFillGithub/>
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/pyworkforce/fork",
    //             icon: <BiGitRepoForked/>
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/pyworkforce/subscription",
    //             icon: <AiFillEye/>
    //         },
    //         {
    //             name: "docs",
    //             url: "https://pyworkforce.readthedocs.io/en/stable/",
    //             icon: <ImBook/>,
    //         }
    //     ],
    //     image: cmu,
    //     description: "Natural Language Processing (NLP) analysis on a dataset of 37,000 social media posts related to Continuous Glucose Monitoring (CGM) for Diabetes, achieving topic classification and identifying 3 key benefits and knowledge gaps among patients. Utilized intelligent visualizations to discern popular CGM brands and extract insights on nutrition, diets, and health.",
    //     target: "_blank"
    // },
    // {
    //     id: "project-1",
    //     title: "US County Health — Predictive Modeling",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "https://github.com/rodrigo-arenas/portfolio",
    //             icon: <AiFillGithub/>
    //         },
    //         {
    //             name: "fork",
    //             url: "https://github.com/rodrigo-arenas/portfolio/fork",
    //             icon: <BiGitRepoForked/>
    //         },
    //         {
    //             name: "subscription",
    //             url: "https://github.com/rodrigo-arenas/portfolio/subscription",
    //             icon: <AiFillEye/>
    //         }
    //     ],
    //     image: usc,
    //     description: "Unsupervised machine learning techniques on US county health data, applying clustering and prediction methods to identify groups with similar health outcomes. Developed a predictive model for factors influencing health, highlighting the top 5 contributors to premature deaths using Principal Component Analysis, K-means clustering, Random Forest, and Lasso Regression.",
    //     target: "_blank"
    // }

    {
        id: "project-1",
        title: "Sheryl Sandberg",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: sheru,
        description: "Her commitment to creating a culture of inclusivity, evident in initiatives like the Women@Google program, that aimed to increase diversity and empower women in the tech workforce.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Google Trends",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: trends,
        description: "Pretty cool to gain real-time insights into global and regional search patterns and offer a dynamic snapshot of public interests and trends in a diverse range of topics.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "The 80-20 Rule",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: eightytwenty,
        description: "Amazed at how Google is fostering innovation by allowing employees to dedicate a significant portion of their time to pursue passion projects. This is something that I have been practicing in my academic life as well.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "Astro Teller",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: astro,
        description: "As a Carnegie Mellon University grad student, super inspired by Astro for seamlessly integrating his CMU background into his role as a visionary leader at X. I aim to be a part of creating radical new technologies super soon!",
        target: "_blank"
    },
    {
        id: "project-5",
        title: "Google Experiments",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: lab,
        description: "The geeky culture calls to me. Since 2009, coders have created thousands of amazing experiments using Chrome, Android, AI, AR and more. Very impressive to showcase these projects, along with helpful tools and resources, that help to inspire others to create new experiments.",
        target: "_blank"
    },
    {
        id: "project-5",
        title: "Toothbrush Test",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: toothbrush,
        description: "Looking at not just acquisitions but also products/services through one simple question – \"Is this something you will use once or twice per day, and does it make your life better?\" is helping foster innovation better than ever.",
        target: "_blank"
    }
]

export default projectConfig