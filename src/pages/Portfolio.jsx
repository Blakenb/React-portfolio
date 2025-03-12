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
      description="Description of Project 2"
      link="https://github.com/blakenb/project2"
    />
    {/* Add more projects as needed */}
  </div>
);

export default Portfolio;