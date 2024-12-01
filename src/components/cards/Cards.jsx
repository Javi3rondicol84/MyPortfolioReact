import React from 'react';
import Card from '../card/Card';
import eCommerceImg from '../../imgs/projects/e-commerce.png';
import movieAppImg from '../../imgs/projects/movieApp.jpg';
import minigamesImg from '../../imgs/projects/4-en-linea.png';
import spidermanImg from '../../imgs/projects/spider-man.png';

/*
export const projects = [
    {id: 1, image: eCommerceImg, title: "e-commerce-shop", description: "e-commerce hecho en springboot, js, css y html", tools: ['java', 'springboot', 'JavaScript', 'css', 'html', 'docker', 'intellij']},
    {id: 2, image: movieAppImg, title: "movieApp-Android", description: "movie app hecha para android", tools: ['kotlin']},
    {id: 3, image: minigamesImg, title: "minijuegos-4EnLinea", description: "pagina de minijuegos con 4 en linea hecho en canvas con js, css y html", tools: ['js', 'css', 'html']},
    {id: 4, image: spidermanImg, title: "landing page spider man", description: "landing page de spider man con animaciones", tools: ['js', 'css', 'html']},
    {id: 3, image: minigamesImg, title: "minijuegos-4EnLinea", description: "pagina de minijuegos con 4 en linea hecho en canvas con js, css y html", tools: ['js', 'css', 'html']},
    {id: 4, image: spidermanImg, title: "landing page spider man", description: "landing page de spider man con animaciones", tools: ['js', 'css', 'html']},
    {id: 3, image: minigamesImg, title: "minijuegos-4EnLinea", description: "pagina de minijuegos con 4 en linea hecho en canvas con js, css y html", tools: ['js', 'css', 'html']},
    {id: 4, image: spidermanImg, title: "landing page spider man", description: "landing page de spider man con animaciones", tools: ['js', 'css', 'html']},
    {id: 3, image: minigamesImg, title: "minijuegos-4EnLinea", description: "pagina de minijuegos con 4 en linea hecho en canvas con js, css y html", tools: ['js', 'css', 'html']},
    {id: 4, image: spidermanImg, title: "landing page spider man", description: "landing page de spider man con animaciones", tools: ['js', 'css', 'html']},
    {id: 3, image: minigamesImg, title: "minijuegos-4EnLinea", description: "pagina de minijuegos con 4 en linea hecho en canvas con js, css y html", tools: ['js', 'css', 'html']},
    {id: 4, image: spidermanImg, title: "landing page spider man", description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea minima mollitia facere corrupti explicabo culpa iure repudiandae eaque voluptatibus, maiores architecto repellat? Earum consequuntur cum tenetur quisquam cupiditate quo porro?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque qui ipsum aliquam error? Vel tempore corrupti delectus atque quibusdam commodi possimus veniam molestias beatae quam, vero ullam fugiat quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea minima mollitia facere corrupti explicabo culpa iure repudiandae eaque voluptatibus, maiores architecto repellat? Earum consequuntur cum tenetur quisquam cupiditate quo porro?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum atque qui ipsum aliquam error? Vel tempore corrupti delectus atque quibusdam commodi possimus veniam molestias beatae quam, vero ullam fugiat quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. AuteLorem ipsum dolor sit, amet consectetur adipisicing elit. Ea minima mollitia facere corrupti explicabo culpa iure repudiandae eaque voluptatibus, maiores architecto repellat? Earum consequuntur cum tenetur quisquam cupiditate quo porro?', tools: ['js', 'css', 'html']},
];*/

export const projects = [
    {id: 1, image: eCommerceImg, title: "e-commerce-shop", description: "e-commerce hecho en springboot, js, css y html", tools: ['java', 'springboot', 'JavaScript', 'css', 'html', 'docker', 'intellij'], url: 'https://github.com/Javi3rondicol84/e-commerce-app'},
    {id: 2, image: movieAppImg, title: "movieApp-Android", description: "movie app hecha para android", tools: ['kotlin'], url: 'https://github.com/Javi3rondicol84/AndroidMovieListApp'},
    {id: 3, image: minigamesImg, title: "minijuegos-4EnLinea", description: "pagina de minijuegos con 4 en linea hecho en canvas con js, css y html", tools: ['js', 'css', 'html'], url: 'https://github.com/Javi3rondicol84/PaginaMinijuegos4enLinea-equipo-de-dos.'},
    {id: 4, image: spidermanImg, title: "landing page spider man", description: "landing page de spider man con animaciones", tools: ['js', 'css', 'html'], url: 'https://github.com/Javi3rondicol84/PaginaFrontEndTematicaSpiderMan-equipo-de-dos.'},];

const cards = projects.map( card => {
    return (
        <>
        <li>
        <Card 
        image={card.image}
        title={card.title}
        description={card.description}
        id={card.id}
        tools={card.tools}
        url={card.url}
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