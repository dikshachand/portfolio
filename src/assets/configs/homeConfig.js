import React from 'react'
//import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
// import myImage from '/Users/manavmaharana/Documents/GitHub/portfolio-website/src/assets/images/DikshaCartoon.jpg';
import carousel1 from '/Users/manavmaharana/Documents/GitHub/dc-portfolio/src/assets/images/Carousel1.jpg';
import carousel2 from '/Users/manavmaharana/Documents/GitHub/dc-portfolio/src/assets/images/Carousel2.jpg';
//import carousel3 from '/Users/manavmaharana/Documents/GitHub/portfolio-website/src/assets/images/Carousel3.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const imageUrls = [
  carousel1,
  carousel2
];

// function formatDate(dateString) {
//     const options = { year: 'numeric', month: 'long'};
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   }

const homeConfig = {
    greeting: (
      <div style={{ textAlign: 'center'}}> 
      <div><h1 className="heading" style={{ textAlign: 'center', maxWidth: '600px', margin: '20px auto' }}>
           <strong className="main-name">Hi! I'm Diksha Chand</strong>
        </h1>
        </div>
        {/* <img
        src={myImage}
        alt="A person reading a book"
        style={{ maxWidth: '25%', height: 'auto' }}/> */}
      <Carousel autoPlay={2000} infiniteLoop={true} transitionEffect="scroll" showThumbs={false}>
                {imageUrls.map((imageUrl, index) => (
                  <div key={index}>
                    <img src={imageUrl} alt={`${index}`} 
                    style={{width: '40%', height: 'auto' }}
                    />
                  </div>
                ))}
        </Carousel>
      </div>
    ),
    titles: [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Software Developer",
      "Life Long Learner"
    ],
    about: {
        start: "I've been working for over six years on data science projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-4",
            title: "AI/ML Intern",
            company: "NodeStar",
            description: "Fine-tuned large language models for custom financial data, creating an advisor expert chatbot capable of providing tailored strategic recommendations based on user requirements.",
            date: (<span className="date big-date">May - August 2023</span>),
            icon: <DiCodeigniter/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-3",
            title: "Data Analyst Intern",
            company: "AdSkate",
            description: "Leading a team of analysts and data scientists to execute different projects, " +
                "including the construction of ETLs, data lakes, data warehouses, and machine learning models.",
            date: (<span className="date big-date">May - August 2023</span>),
            icon: <FaMobileAlt/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-2",
            title: "Software Development Engineer",
            company: "Persistent Systems",
            description: "Designed, implemented, and managed as the Team Lead, a web-based online test-taking platform, using .NET Core, backed by relational database in SQL Server, delivering a smooth exam-taking experience for students during COVID lockdown.",
            date: (<span className="date big-date">May 2021 - July 2022</span>),
            icon: <FaMobileAlt/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-1",
            title: "Web Development Intern",
            company: "FinIQ",
            description: "Developed a web-app using Angular – an interactive trading platform for retail stakeholders, additionally displaying currency history charts, and real-time forex rates, live news, watchlist etc. through REST API connections.",
            date: (<span className="date big-date">May - June 2020</span>),
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        {
            id: "work-0",
            title: "Data Scientist",
            company: "Almira Collection",
            description: "Built a scalable, plug-and-play Operations Management System that supports a dashboard for data visualization and reporting analytical insights and quantitative analytics by optimizing inventory, customer purchase records, and business finances.",
            date: (<span className="date big-date">September - December 2019</span>),
            icon: <FaMobileAlt/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        }
    ]
}


export default homeConfig