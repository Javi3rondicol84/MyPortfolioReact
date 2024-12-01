import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <>
        <aside>
            <header>
                <section className='titles'>
                    <h1 className='nameTitle'>Javier Ondicol</h1>
                    <h2 className='backendTitle'>Back End Developer</h2>
                </section>
                <nav>
                    <ul>
                        <li><a href='#App'>Projects</a></li>
                        <li><a href='#infoTools'>Technologies</a></li>
                        <li><a href='#infoAboutMe'>About me</a></li>
                    </ul>
                </nav>
            </header>
        </aside>
        </>
    );

};

export default Header;

