import React from 'react';
import Card from '../card/Card';
import eCommerceImg from '../../imgs/projects/e-commerce.png';
import movieAppImg from '../../imgs/projects/movieApp.jpg';
import minigamesImg from '../../imgs/projects/4-en-linea.png';
import spidermanImg from '../../imgs/projects/spider-man.png';

export const projects = [
    {id: 1, year: 2024, image: eCommerceImg, title: "E-Commerce-Shop", description: "E-commerce developed in Java using Spring Boot. It features a login system, functionality to add products to a shopping cart, and a complete purchase simulation, providing an intuitive and efficient user experience.", tools: ['Java', 'Springboot', 'Javascript', 'CSS', 'Html', 'Docker', 'SQL', 'MySQL', 'Intellij'], url: 'https://github.com/Javi3rondicol84/E-Commerce-Shop'},
    {id: 2, year: 2024, image: movieAppImg, title: "MovieDBApp", description: "Android application developed in Kotlin that integrates with the Movie Database API to display a list of movies along with detailed information about each one. Features include an intuitive user interface and seamless navigation between movie listings and details.", tools: ['Kotlin'], url: 'https://github.com/Javi3rondicol84/AndroidMovieListApp'},
    {id: 3, year: 2023, image: minigamesImg, title: "MiniGames-Hub", description: "An e-commerce simulation page for games and mini-games, developed by a team of two. It offers a variety of options for users to browse and explore. In addition to the game listings, it features a fully functional 4-in-a-row game, providing an interactive and fun experience alongside the shopping features.", tools: ['Javascript', 'CSS', 'Html', 'Visual Studio'], url: 'https://github.com/Javi3rondicol84/PaginaMinijuegos4enLinea-equipo-de-dos.'},
    {id: 4, year: 2023, image: spidermanImg, title: "Spider-Man-Parallax", description: "Landing page themed around Spider-Man, featuring stunning animations and a dynamic parallax effect to enhance the user experience. This interactive page immerses visitors in the world of Spider-Man with engaging visuals and smooth scrolling effects, making it an exciting and visually appealing experience.", tools: ['Javascript', 'CSS', 'Html', 'Visual Studio'], url: 'https://github.com/Javi3rondicol84/PaginaFrontEndTematicaSpiderMan-equipo-de-dos.'},];

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