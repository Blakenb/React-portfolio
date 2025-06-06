import React from 'react';

const Project = ({ title, description, link }) => (
  <div className="project">
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
);

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="https://blakenb.github.io/project-1-group07/" target="_blank" rel="noopener noreferrer">
            Project 1 - Group 07
          </a>
        </li>
        <li>
          <a href="https://github.com/blakenb/project2" target="_blank" rel="noopener noreferrer">
            Project 2
          </a>
        </li>
        <a href="https://inner-orbit.onrender.com/journal" target="_blank" rel="noopener noreferrer">
            Project 2
          </a>
      </ul>
    </section>
  );
}

export default Projects;