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
                        <li>Projects</li>
                        <li>All Skills</li>
                        <li>About me</li>
                    </ul>
                </nav>
            </header>
        </aside>
        </>
    );

};

export default Header;

