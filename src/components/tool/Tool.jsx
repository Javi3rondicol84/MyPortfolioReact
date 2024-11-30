import React from 'react';
import './Tool.css';

const Tool = ({toolText}) => {
    return (
        <>
            <div className='tool'>
                <span>
                    {toolText}
                </span>
            </div>
        
        </>
    );
};

export default Tool;