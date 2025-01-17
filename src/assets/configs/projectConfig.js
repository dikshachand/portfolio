import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";
import azat from "../images/azat.jpg"
import usc from "../images/uscounties.png"
import cmu from "../images/8.png"
// import graphEmbeddings from "../images/graph_embeddings.png"
// import kafkaMl from "../images/kafkaml.png"
// import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-3",
        title: "Rare Disease Market — Expansion Modeling",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: azat,
        description: "Student consultant with AT Kearney and Alexion to conduct in-depth research on hyper-rare disease data to discern market expansion factors and accurately forecast growth, employing time series forecasting to predict market expansion. Conducted a comprehensive review of published research, executed data engineering on raw datasets, and constructed a prototype predictive model.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Diabetes Insights — Language Processing",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/pyworkforce",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/pyworkforce/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/pyworkforce/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "docs",
                url: "https://pyworkforce.readthedocs.io/en/stable/",
                icon: <ImBook/>,
            }
        ],
        image: cmu,
        description: "Natural Language Processing (NLP) analysis on a dataset of 37,000 social media posts related to Continuous Glucose Monitoring (CGM) for Diabetes, achieving topic classification and identifying 3 key benefits and knowledge gaps among patients. Utilized intelligent visualizations to discern popular CGM brands and extract insights on nutrition, diets, and health.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "US County Health — Predictive Modeling",
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
        image: usc,
        description: "Unsupervised machine learning techniques on US county health data, applying clustering and prediction methods to identify groups with similar health outcomes. Developed a predictive model for factors influencing health, highlighting the top 5 contributors to premature deaths using Principal Component Analysis, K-means clustering, Random Forest, and Lasso Regression.",
        target: "_blank"
    }
]

export default projectConfig