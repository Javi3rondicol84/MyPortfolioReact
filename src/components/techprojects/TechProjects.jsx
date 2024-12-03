import React from 'react';
import './TechProjects.css';
import { useParams, Link } from 'react-router-dom';
import { technologiesList } from '../technologies/Technologies';
import { projects } from '../cards/Cards';

const getFilteredProjects = (id) => {
    const techFound = technologiesList.find(tech => tech.id === parseInt(id));
    return projects.filter(project => project.tools.includes(techFound.nameTech));
};

export const TechProjects = () => {
    const { id } = useParams();
    const projectsFound = getFilteredProjects(id);

    return (
        <div className="tech-projects-container">
            <div className="header">
                <h1>Proyectos relacionados</h1>
                <Link to="/" className="home-button">
                    Go Home
                </Link>
            </div>
            <div className="projects-grid">
                {projectsFound.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-year">Year: {project.year}</p>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tools">
                                <strong>Tools:</strong>
                                <ul>
                                    {project.tools.map((tool, index) => (
                                        <li key={index} className="tool-item">{tool}</li>
                                    ))}
                                </ul>
                            </div>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                See GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
