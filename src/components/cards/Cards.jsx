import React from 'react';
import Card from '../card/Card';
import eCommerceImg from '../../imgs/projects/e-commerce.png';
import movieAppImg from '../../imgs/projects/TMDB.png';
import minigamesImg from '../../imgs/projects/4-en-linea.png';
import spidermanImg from '../../imgs/projects/spider-man.png';
import chatAppImg from '../../imgs/projects/ChatApp.png';
import reviewsApiImg from '../../imgs/projects/reviewsApi.png';
import scooterMgmtImg from '../../imgs/microservices.png';
import dataStructureImg from '../../imgs/data-structure.png';
 
export const projects = [
    {id: 1, year: 2024, image: chatAppImg, title: "Chat-App", description: "This is a full-stack chat application built using Next.js, Express.js, WebSockets, and MySQL. The app enables users to register, log in securely, and engage in real-time one-on-one chats. All messages and user data are stored persistently in a relational database, ensuring reliability and scalability.", tools: ['React', 'Next.js', 'Tailwind CSS', 'Html', 'Javascript', 'Node.js', 'Express.js', 'WebSockets', 'MySQL', 'JWT', 'Visual Studio Code', 'Docker'], url: 'https://github.com/Javi3rondicol84/Chat-App'},
    {id: 2, year: 2024, image: eCommerceImg, title: "E-Commerce-Shop", description: "E-commerce developed in Java using Spring Boot. It features a login system, functionality to add products to a shopping cart, and a complete purchase simulation, providing an intuitive and efficient user experience.", tools: ['Java', 'Springboot', 'Javascript', 'CSS', 'Html', 'Docker', 'MySQL', 'JWT', 'Intellij'], url: 'https://github.com/Javi3rondicol84/E-Commerce-Shop'},
    {id: 3, year: 2024, image: movieAppImg, title: "MovieDBApp", description: "Android application developed in Kotlin that integrates with the Movie Database API to display a list of movies along with detailed information about each one. Features include an intuitive user interface and seamless navigation between movie listings and details.", tools: ['Kotlin', 'Android Studio'], url: 'https://github.com/Javi3rondicol84/AndroidMovieListApp'},
    {id: 4, year: 2024, image: scooterMgmtImg, title: "Scooter Management Microservices", description: "A set of microservices developed in Java with Spring Boot for managing electric scooters. The project includes features such as user management, scooter tracking, and rental operations. The API is documented using Swagger, and the functionality is thoroughly tested with TestNG to ensure reliability and scalability.", tools: ['Java', 'Springboot', 'Swagger', 'TestNG', 'Docker', 'MySQL', 'IntelliJ'], url: 'https://github.com/Javi3rondicol84/ArquiEjsIntegrales'},
    {id: 5, year: 2024, image: dataStructureImg, title: "Data Structures & File Processing", description: "This project demonstrates the use of Java and various data structures to extract, process, and store data from a document. It showcases efficient data handling and storage techniques, providing insights into practical applications of algorithms and structures.", tools: ['Java', 'Data Structures', 'File Processing', 'Eclipse'], url: 'https://github.com/Javi3rondicol84/TPEProg3'},
    {id: 6, year: 2023, image: minigamesImg, title: "MiniGames-Hub", description: "An e-commerce simulation page for games and mini-games, developed by a team of two. It offers a variety of options for users to browse and explore. In addition to the game listings, it features a fully functional 4-in-a-row game, providing an interactive and fun experience alongside the shopping features.", tools: ['Javascript', 'CSS', 'Html', 'Visual Studio'], url: 'https://github.com/Javi3rondicol84/PaginaMinijuegos4enLinea-equipo-de-dos.'},
    {id: 7, year: 2023, image: spidermanImg, title: "Spider-Man-Parallax", description: "Landing page themed around Spider-Man, featuring stunning animations and a dynamic parallax effect to enhance the user experience. This interactive page immerses visitors in the world of Spider-Man with engaging visuals and smooth scrolling effects, making it an exciting and visually appealing experience.", tools: ['Javascript', 'CSS', 'Html', 'Visual Studio'], url: 'https://github.com/Javi3rondicol84/PaginaFrontEndTematicaSpiderMan-equipo-de-dos.'},
    {id: 8, year: 2024, image: reviewsApiImg, title: "Series & Platforms Reviews API", description: "This is a RESTful API built using PHP, MySQL, and JWT for handling user authentication. It allows users to submit, retrieve, and manage reviews for series and streaming platforms. Designed for scalability and secure handling of user data.", tools: ['PHP', 'MySQL', 'JWT', 'Postman'], url: 'https://github.com/Javi3rondicol84/API-Rest-PHP-Web2'}
];

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
