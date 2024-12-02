import React from 'react';
import './TechProjects.css';
import { useParams } from 'react-router-dom';
import { technologiesList } from '../technologies/Technologies';
import { projects } from '../cards/Cards';

export const TechProjects = () => {
    const { id } = useParams();

    const techFound= technologiesList.find(technology => technology.id === parseInt(id));
    const projectsArray = [];

    projects.forEach(project => {
        project.tools.forEach(toolnm => {
            if(toolnm === techFound.nameTech) {
                projectsArray.push(project);
            }
        });
    });

    console.log(projectsArray);


    return (
        <>
            <p>sss {techFound.nameTech}</p>
        </>
    )
};