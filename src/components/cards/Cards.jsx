import React from 'react';
import Card from '../card/Card';
import eCommerceImg from '../../imgs/projects/e-commerce.png';
import movieAppImg from '../../imgs/projects/movieApp.jpg';
import minigamesImg from '../../imgs/projects/4-en-linea.png';
import spidermanImg from '../../imgs/projects/spider-man.png';

export const projects = [
    {id: 1, year: 2024, image: eCommerceImg, title: "e-commerce-shop", description: "e-commerce hecho en springboot, js, css y html", tools: ['Java', 'Springboot', 'Javascript', 'CSS', 'Html', 'Docker', 'Intellij'], url: 'https://github.com/Javi3rondicol84/e-commerce-app'},
    {id: 2, year: 2024, image: movieAppImg, title: "movieApp-Android", description: "movie app hecha para android", tools: ['Kotlin'], url: 'https://github.com/Javi3rondicol84/AndroidMovieListApp'},
    {id: 3, year: 2023, image: minigamesImg, title: "minijuegos-4EnLinea", description: "pagina de minijuegos con 4 en linea hecho en canvas con Javascript, CSS y Html", tools: ['Javascript', 'CSS', 'Html'], url: 'https://github.com/Javi3rondicol84/PaginaMinijuegos4enLinea-equipo-de-dos.'},
    {id: 4, year: 2023, image: spidermanImg, title: "landing page spider man", description: "landing page de spider man con animaciones", tools: ['Javascript', 'CSS', 'html'], url: 'https://github.com/Javi3rondicol84/PaginaFrontEndTematicaSpiderMan-equipo-de-dos.'},];

const cards = projects.map( card => {
    return (
        <>
        <li>
        <Card 
        card={card}
        />
        </li>
        </>
    )
});

const Cards = () => {

    return (
        <>
        <ul className='listCards'>
        {cards}
        </ul>
        </>
    );

};

export default Cards;