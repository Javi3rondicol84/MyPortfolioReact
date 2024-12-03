import React from 'react';
import './Card.css';
import Tool from '../tool/Tool';
import githubLogo from '../../imgs/githublg.png';
import rightArrow from '../../imgs/right-arrow.png';
import {useNavigate} from 'react-router-dom';

const Card = ( {card} ) => {
       
    const listTools = card.tools.map(tool => {
        return (
            <>
                <li>
                <Tool 
                toolText={tool}
                />
                </li>
            </>
        );
    });

    return (
        <>
            <div className='card'>
                <div className='cardContent'>
                    <div className='cardImage'>
                        <div className='imgProject'>
                            <img src={card.image} alt={card.title}/>
                        </div>
                        <div className='cardLinks'>
                            <div className='githubLogo'>
                                <a href={card.url} target='_blank' rel="noopener noreferrer">
                                    <img src={githubLogo} alt='github logo' />
                                </a>    
                            </div>
                            {/* <div className='githubLogo'>
                                <a href='#' target='_blank' rel="noopener noreferrer">
                                    <img src={rightArrow} alt='github logo' />
                                </a>    
                            </div> */}
                        </div>
             
                    </div>
                    <div className='cardInfo'>
                        <h2 className='cardTitle'>{card.title}</h2>
                        <p className='cardDescription'>
                            {card.description}
                        </p>
                        <div className='cardBuilt'>
                            <h3>Built with: </h3>
                            <ul>
                                {listTools}
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    );
};

export default Card;

