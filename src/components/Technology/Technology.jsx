import React from 'react';
import './Technology.css';
import SearchProjects from '../../imgs/search.png';


const Technology = ({tech}) => {
    return (
        <>
        <div className='techCard'>
            <div className='techCardContent'>
                <div className='techImgSection'>
                    <div className='techImg'>
                        <img src={tech.image} alt={tech.nameTech} />
                    </div>
                </div>
                <div className='techCardContentInfo'>
                    <div className='techCategory'>
                        <h3>Category: </h3>
                        <span>{tech.category}</span>
                    </div>
                    <div className='techNameSection'>
                        <div className='techTitle'>
                            <span>Name: </span>
                        </div>
                        <div className='techName'>
                            <span>{tech.nameTech}</span>
                        </div>
                    </div>
                    <div className='techLink'>
                        <a href='#' target='_blank' rel="noopener noreferrer" onClick={(e) => {
                                    e.preventDefault();
                                    window.open(`/projects-technology/${tech.id}`, '_blank')
                                }}>
                        <div className='titleSearchImg'><span>Projects with: </span></div>
                        <div className='searchImg'><img src={SearchProjects} alt='searchProjects'/></div></a>
                    </div>
                </div>
                
            </div>
        </div>
        
        </>
    );


};

export default Technology;