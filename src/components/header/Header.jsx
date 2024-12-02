import React, { useRef } from 'react';
import './Header.css';
import githubLogo from '../../imgs/github.png';
import linkedinLogo from '../../imgs/linkedin.png';
import lightbulb from '../../imgs/lightbulb.png';
import language from '../../imgs/language-icon.png';

const Header = () => {
    const divRef = useRef(null);

    const handleClick = () => {
      if (divRef.current) {
        console.log(divRef.current); // Muestra el tag en consola (por ejemplo, 'DIV')
      }
    };
    
    function changeStylesMode() {
        // Alternar entre las clases 'light-mode' y 'dark-mode'
        document.body.classList.toggle("lightModeBody");
        
    }

    return (
        <>
        <aside>
            <header>
                <section className='titles' ref={divRef}>
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
                <section className='linksAndButtons'>
                    <div className='mainGithubLogo'>
                        <a href='https://github.com/Javi3rondicol84?tab=repositories' target='_blank' rel="noopener noreferrer">
                            <img src={githubLogo} alt='github logo' />
                        </a>    
                    </div>
                    <div className='mainGithubLogo'>
                        <a href='https://ar.linkedin.com/' target='_blank' rel="noopener noreferrer">
                            <img src={linkedinLogo} alt='linkedin logo' />
                        </a>    
                    </div>
                    {/* <button className='lightbulbButton' onClick={changeStylesMode}>
                        <img src={lightbulb}/>
                    </button>
                    <button className='languageButton' onClick={handleClick}>
                        <img src={language}/>
                    </button> */}
                </section>
            </header>
        </aside>
        </>
    );

};

export default Header;

