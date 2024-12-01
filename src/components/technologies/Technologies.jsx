import React from 'react';
import './Technologies.css';
import Technology from '../Technology/Technology';
import JavaImg from '../../imgs/technologies/java.png';
import JavascriptImg from '../../imgs/technologies/js.png';
import HtmlImg from '../../imgs/technologies/html.png';
import CssImg from '../../imgs/technologies/css.png';
import ReactImg from '../../imgs/technologies/react.png';
import SpringbootImg from '../../imgs/technologies/springboot.png';
import KotlinImg from '../../imgs/technologies/kotlin.png';
import SqlImg from '../../imgs/technologies/sql.png';
import PhpImg from '../../imgs/technologies/php.png';
import MongodbImg from '../../imgs/technologies/mongodb.jpg';
import DockerImg from '../../imgs/technologies/docker.jpg';

const technologiesList = [
    { nameTech: 'Java', image: JavaImg, category: 'Backend' },
    { nameTech: 'Springboot', image: SpringbootImg, category: 'Backend' },
    { nameTech: 'Kotlin', image: KotlinImg, category: 'Backend' },
    { nameTech: 'PHP', image: PhpImg, category: 'Backend' },
    { nameTech: 'SQL', image: SqlImg, category: 'Database' },
    { nameTech: 'No-SQL', image: MongodbImg, category: 'Database' },
    { nameTech: 'MySQL', image: MongodbImg, category: 'Database' }, // Cambié a MongodbImg ya que no hay una imagen definida para MySQL
    { nameTech: 'PostgreSQL', image: MongodbImg, category: 'Database' }, // Lo mismo aquí
    { nameTech: 'MongoDB', image: MongodbImg, category: 'Database' },
    { nameTech: 'Javascript', image: JavascriptImg, category: 'Frontend' },
    { nameTech: 'React', image: ReactImg, category: 'Frontend' },
    { nameTech: 'CSS', image: CssImg, category: 'Frontend' },
    { nameTech: 'Html', image: HtmlImg, category: 'Frontend' },
    { nameTech: 'Docker', image: DockerImg, category: 'Tools' },
    { nameTech: 'Datagrip', image: 'path/to/datagrip-image.png', category: 'Tools' },
    { nameTech: 'Eclipse', image: 'path/to/eclipse-image.png', category: 'Tools' },
    { nameTech: 'IntelliJ', image: 'path/to/intellij-image.png', category: 'Tools' },
    { nameTech: 'Visual Studio', image: 'path/to/visualstudio-image.png', category: 'Tools' }
];

  
const allTech = technologiesList.map(tech => {
    return (
        <>
        <li>
            <Technology 
            nameTech = {tech.nameTech}
            image = {tech.image}
            category = {tech.category}
            /> 
        </li>
        </>
    );
});

const Technologies = () => {
    return (
        <>
        <ul className='ulTechs'>
            {allTech}
        </ul>
        </>
    );
};

export default Technologies;