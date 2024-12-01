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
import DatagripImg from '../../imgs/technologies/datagrip.png';
import EclipseImg from '../../imgs/technologies/eclipse.png';
import IntelijImg from '../../imgs/technologies/intelij.png';
import VisualStudioImg from '../../imgs/technologies/visualstudio.png';
import NoSQLImg from '../../imgs/technologies/nosql.png';
import MySQLImg from '../../imgs/technologies/mysql.png';
import PostgreSQLImg from '../../imgs/technologies/postgresql.png';

const technologiesList = [
    { nameTech: 'Java', image: JavaImg, category: 'Backend' },
    { nameTech: 'Springboot', image: SpringbootImg, category: 'Backend' },
    { nameTech: 'Kotlin', image: KotlinImg, category: 'Backend' },
    { nameTech: 'PHP', image: PhpImg, category: 'Backend' },
    { nameTech: 'SQL', image: SqlImg, category: 'Database' },
    { nameTech: 'No-SQL', image: NoSQLImg, category: 'Database' },
    { nameTech: 'MySQL', image:MySQLImg, category: 'Database' }, // Cambié a MongodbImg ya que no hay una imagen definida para MySQL
    { nameTech: 'PostgreSQL', image: PostgreSQLImg, category: 'Database' }, // Lo mismo aquí
    { nameTech: 'MongoDB', image: MongodbImg, category: 'Database' },
    { nameTech: 'Javascript', image: JavascriptImg, category: 'Frontend' },
    { nameTech: 'React', image: ReactImg, category: 'Frontend' },
    { nameTech: 'CSS', image: CssImg, category: 'Frontend' },
    { nameTech: 'Html', image: HtmlImg, category: 'Frontend' },
    { nameTech: 'Docker', image: DockerImg, category: 'Tools' },
    { nameTech: 'Datagrip', image: DatagripImg, category: 'Tools' },
    { nameTech: 'Eclipse', image: EclipseImg, category: 'Tools' },
    { nameTech: 'IntelliJ', image: IntelijImg, category: 'Tools' },
    { nameTech: 'Visual Studio', image: VisualStudioImg, category: 'Tools' }
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