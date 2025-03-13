// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project'; // Ensure this path is correct

const Portfolio = () => (
  <div className="section">
    <h1>My Projects</h1>
    <Project
      title="Project 1 - Group 07"
      description="This was the first project I worked on with my group. We created a website for a fictional company."
      link="https://blakenb.github.io/project-1-group07/"
    />
    <Project
      title="Project 2"
      description="Description of Project 2 this was a employee tracker that I created to help manage employees and their information."
      link="https://github.com/Blakenb/employee-tracker-sql-challenge"
    />
    <Project
      title="Project 3"
      description="Description of Project 3 this was a weather dashboard that I created to help people find the weather in their area."
      link="https://github.com/Blakenb/weather-dashboard-challenge-9"
    />
    
    <Project
      title="Project 3"
      description="Description of Project 4 this was a vehicle builder that I created to help people find the best vehicle for their needs."
      link="https://github.com/Blakenb/vehicle-builder-challenge-8"
    />
    
    {/* Add more projects as needed */}
  </div>
);

export default Portfolio;