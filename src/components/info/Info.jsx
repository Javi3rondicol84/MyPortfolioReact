import React from 'react';
import './Info.css';
import Cards from '../cards/Cards';
import Technologies from '../technologies/Technologies';

const Info = () => {
    return (
        <>
        <section className='allInfo'>
            <div className='infoProjects'>
                <div className='titlesContent'>
                    <h2 className='titlesInfo'>Projects</h2>
                </div>
                <Cards />
            </div>
            <div className='infoTools' id='infoTools'>
                <div className='titlesContent'>
                    <h2 className='titlesInfo'>Technologies</h2>
                </div>
                <Technologies />
            </div>
            <div className='infoAboutMe' id='infoAboutMe'>
                <div className='titlesContent'>
                    <h2 className='titlesInfo'>About me</h2>
                </div>
                <p>
                I'm Javier Ondicol, a Backend Developer with experience in building full solutions, but also with solid knowledge in Frontend Development. I graduated with a degree in Software Development from the Universidad del Centro de Buenos Aires. Throughout my career, I have worked on various projects that have allowed me to expand my skills and deepen my knowledge of technologies such as Java, Kotlin, PHP, React, HTML, CSS, among others. I have experience working in teams and meeting deadlines, which has helped me develop strong collaboration and organizational skills. I am passionate about solving complex problems and continuous learning, which drives me to stay up-to-date with the latest technological trends.
                </p>
            </div>
        </section>

        </>
    );
};

export default Info;