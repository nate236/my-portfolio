import React from 'react';
import './Portfolio.css';

// Array of project data
const projects = [
  {
    title: "Piano Project",
    description: "Play some tunes with this virtual piano.",
    imageUrl: "https://www.shutterstock.com/image-illustration/virtual-piano-keyboard-260nw-753135.jpg", // update the path as needed
    githubLink: "https://github.com/Apgash/Piano-Project"
  },
  {
    title: "Inspirational Quote Generator",
    description: "Easy way to get inspired or have a laugh.",
    imageUrl: "https://github.com/NicMiller35/project-2/raw/main/client/src/assets/Screenshot%202024-12-07%20145159.png",
    githubLink: "https://github.com/NicMiller35/project-2"
  },
  {
    title: "Show Finder",
    description: "Find concerts and events near you.",
    imageUrl: "https://github.com/JaceG/ShowFinder/blob/main/assets/homepage.png?raw=true",
    githubLink: "https://github.com/JaceG/ShowFinder"
  },
  {
    title: "NOSQL Friend Tracker",
    description: "Brief description for project four.",
    imageUrl: "https://cdn.prod.website-files.com/6640cd28f51f13175e577c05/664e00a400e23f104ed2b6cd_3b3dd6e8-8a73-5879-84a9-a42d5b910c74.svg",
    githubLink: "https://github.com/nate236/NOSQL"
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <div key={index} className="project-square">
          <img
            className="project-image"
            src={project.imageUrl}
            alt={project.title}
          />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a
            className="github-link"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;