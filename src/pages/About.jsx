import React from 'react';
import GitHubProfile from '../components/GitHubProfile'; // Adjust the path as needed

const About = () => (
  <section className="section">
    <h1>My past experience</h1>
    <p>I have worked for the same company for the last thirteen years. I have been a project manager, a general manager, and a sales manager. I have worked with many different people and have learned a lot from them. I have been a lead technician for installation. I have been a quality control manager. I have been a safety manager. I have been a trainer for new employees. I have been a mentor for new employees. I have been a coach for new employees.</p>
    <h2>Technologies I Have Worked With</h2>
    <ul>
      <li>SQL</li>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Node.js</li>
      <li>Prompt Engineering</li>
      <li>Express.js</li>
      <li>React</li>
      <li>OOP</li>
    </ul>
    <GitHubProfile />
  </section>
);

export default About;