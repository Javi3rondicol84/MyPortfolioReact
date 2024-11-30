import React from 'react';
import './Card.css';
import Tool from '../tool/Tool';

const Card = ( {image, title, description, id, tools} ) => {
   
    const listTools = tools.map(tool => {
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
                            <img src={image} alt={title}/>
                        </div>
                    </div>
                    <div className='cardInfo'>
                        <h2 className='cardTitle'>{title}</h2>
                        <p className='cardDescription'>
                            {description}
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

