import React from 'react'
import { AiFillRobot } from "react-icons/ai"
import { BsClipboardDataFill } from "react-icons/bs"
import { MdDeveloperMode } from "react-icons/md"
import { BsDatabaseFillGear } from "react-icons/bs"
import carousel1 from '/Users/manavmaharana/Documents/GitHub/dc-portfolio/src/assets/images/1.png';
import carousel2 from '/Users/manavmaharana/Documents/GitHub/dc-portfolio/src/assets/images/2.png';
import carousel3 from '/Users/manavmaharana/Documents/GitHub/dc-portfolio/src/assets/images/3.png';
import carousel4 from '/Users/manavmaharana/Documents/GitHub/dc-portfolio/src/assets/images/4.png';
import carousel5 from '/Users/manavmaharana/Documents/GitHub/dc-portfolio/src/assets/images/5.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const imageUrls = [
  carousel3,
  carousel1,
  carousel4,
  carousel2,
  carousel5
];

const homeConfig = {
  greeting: (
    <div style={{ textAlign: 'center' }}>
      <div><h1 className="heading" style={{ textAlign: 'center', maxWidth: '600px', margin: '20px auto' }}>
        <strong className="main-name">Hi! I'm Diksha Chand</strong>
      </h1>
      </div>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Carousel autoPlay={2000} infiniteLoop={true} transitionEffect="scroll" showThumbs={false}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`${index}`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  ),
  titles: [
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Analyst",
    "Software Developer",
    "Lifelong Un-Learner"
  ],
  about: {
    start: (
      <div className="about-text">
        I'm all about tech, data, and the <strong>thrill of making things happen.</strong> ⚡️<br />
        <br />
        I kicked off my technology journey in India majoring in Computer Science Engineering. Fast forward to<br /><strong>Carnegie Mellon University</strong> where I'm currently pursuing my Master's in Information Systems Management.<br />
        <br />
        I'm like a <strong>Swiss Army knife</strong> when it comes to coding - Python, Java, SQL, you name it. I geek out over libraries like SciKit-Learn.<br />
        <br />
        I've worn different hats in the professional world. As an AI/ML Intern at NodeStar LLC, I made a smart <strong>chatbot for financial advice.</strong> At AdSkate Inc., I used computer vision to supercharge marketing. And there's more, scroll below!
      </div>
    ),
    exit: (
      <div className="about-text">
        When I'm not buried in code, I'm all about hiking the Pittsburgh trails, <strong>rediscovering Bollywood songs</strong>, and diving into literature.
      </div>
    )
  },
  workTimeline: [
    {
      id: "work-4",
      title: "AI/ML Intern",
      company: "NodeStar",
      description: "Fine-tuned large language models for custom financial data, creating an advisor chatbot capable of providing tailored investment recommendations based on user requirements through natural language input.",
      date: (<span className="date big-date">May - August 2023</span>),
      icon: <AiFillRobot />,
      tags: ["OpenAI", "LLMs", "Python", "redshift"]
    },
    {
      id: "work-3",
      title: "Data Analyst Intern",
      company: "AdSkate",
      description: "Spearheaded the development of a creative analysis platform, collating digital marketing and SEO related data from diverse B2B companies to run computer vision models leasing to strategic tailored marketing approaches.",
      date: (<span className="date big-date">May - August 2023</span>),
      icon: <BsClipboardDataFill />,
      tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
    },
    {
      id: "work-2",
      title: "Software Development Engineer",
      company: "Persistent Systems",
      description: "Designed, implemented, and managed as the Team Lead, an online test-taking platform, using .NET Core, backed by relational database in SQL Server, delivering a smooth experience for students during COVID lockdown.",
      date: (<span className="date big-date">May 2021 - July 2022</span>),
      icon: <MdDeveloperMode />,
      tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
    },
    {
      id: "work-1",
      title: "Web Development Intern",
      company: "FinIQ",
      description: "Developed a web-app using Angular – an interactive trading platform for retail stakeholders, additionally displaying currency history charts, and real-time forex rates, live news, watchlist etc. through REST API connections.",
      date: (<span className="date big-date">May - June 2020</span>),
      icon: <MdDeveloperMode />,
      tags: ["ml", "openAI", "python", "docker", "pbi", "azure"]
    },
    {
      id: "work-0",
      title: "Data Scientist",
      company: "Almira Collection",
      description: "Built a scalable, plug-and-play Operations Management System that delivers data visualization, analytical reporting, and quantitative insights by optimizing inventory, customer purchase records, and finance management.",
      date: (<span className="date big-date">September - December 2019</span>),
      icon: <BsDatabaseFillGear />,
      tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
    }
  ]
}


export default homeConfig