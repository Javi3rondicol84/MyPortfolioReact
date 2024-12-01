import React from 'react';
import './Technology.css';
import SearchProjects from '../../imgs/search.png';


const Technology = ({nameTech, image, category}) => {
    return (
        <>
        <div className='techCard'>
            <div className='techCardContent'>
                <div className='techImgSection'>
                    <div>
                        <img src={image} alt={nameTech} />
                    </div>
                </div>
                <div className='techCardContentInfo'>
                    <div className='techCategory'>
                        <h3>Category: </h3>
                        <span>{category}</span>
                    </div>
                    <div className='techNameSection'>
                        <div className='techTitle'>
                            <span>Name: </span>
                        </div>
                        <div className='techName'>
                            <span>{nameTech}</span>
                        </div>
                    </div>
                    <div className='techLink'>
                        <a href='#App'>
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