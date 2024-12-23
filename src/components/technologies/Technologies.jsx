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
import PhpImg from '../../imgs/technologies/php.png';
import MongodbImg from '../../imgs/technologies/mongodb.jpg';
import DockerImg from '../../imgs/technologies/docker.jpg';
import DatagripImg from '../../imgs/technologies/datagrip.png';
import EclipseImg from '../../imgs/technologies/eclipse.png';
import IntelijImg from '../../imgs/technologies/intelij.png';
import VisualStudioImg from '../../imgs/technologies/visualstudio.png';
import MySQLImg from '../../imgs/technologies/mysql.png';
import PostgreSQLImg from '../../imgs/technologies/postgresql.png';
import NodeJSImg from '../../imgs/technologies/nodejs.png';
import NextJSImg from '../../imgs/technologies/nextjs.jpg';
import ExpressJSImg from '../../imgs/technologies/expressjs.png';
import TailwindCssImg from '../../imgs/technologies/tailwindcss.jpg';
import JWTImg from '../../imgs/technologies/jwt.png';
import PostmanImg from '../../imgs/technologies/postman.png';
import TestNgImg from '../../imgs/technologies/TESTNG.png';
import SwaggerImg from '../../imgs/technologies/swagger.png';
import AndroidStudioImg from '../../imgs/technologies/android-studio.png';

export const technologiesList = [
    { id: 1, nameTech: 'Java', image: JavaImg, category: 'Backend' },
    { id: 2, nameTech: 'Springboot', image: SpringbootImg, category: 'Backend' },
    { id: 3, nameTech: 'Kotlin', image: KotlinImg, category: 'Backend' },
    { id: 4, nameTech: 'PHP', image: PhpImg, category: 'Backend' },
    { id: 5, nameTech: 'Node.js', image: NodeJSImg, category: 'Backend' },
    { id: 6, nameTech: 'Express.js', image: ExpressJSImg, category: 'Backend' },
    { id: 7, nameTech: 'MySQL', image: MySQLImg, category: 'Database' },
    { id: 8, nameTech: 'PostgreSQL', image: PostgreSQLImg, category: 'Database' },
    { id: 9, nameTech: 'MongoDB', image: MongodbImg, category: 'Database' },
    { id: 10, nameTech: 'Javascript', image: JavascriptImg, category: 'Frontend' },
    { id: 11, nameTech: 'React', image: ReactImg, category: 'Frontend' },
    { id: 12, nameTech: 'Next.js', image: NextJSImg, category: 'Frontend' },
    { id: 13, nameTech: 'Tailwind CSS', image: TailwindCssImg, category: 'Frontend' },
    { id: 14, nameTech: 'CSS', image: CssImg, category: 'Frontend' },
    { id: 15, nameTech: 'Html', image: HtmlImg, category: 'Frontend' },
    { id: 16, nameTech: 'Docker', image: DockerImg, category: 'Tools' },
    { id: 17, nameTech: 'Datagrip', image: DatagripImg, category: 'Tools' },
    { id: 18, nameTech: 'Eclipse', image: EclipseImg, category: 'Tools' },
    { id: 19, nameTech: 'IntelliJ', image: IntelijImg, category: 'Tools' },
    { id: 20, nameTech: 'Visual Studio', image: VisualStudioImg, category: 'Tools' },
    { id: 21, nameTech: 'JWT', image: JWTImg, category: 'Tools' },
    { id: 22, nameTech: 'Postman', image: PostmanImg, category: 'Tools' },
    { id: 23, nameTech: 'Swagger', image: SwaggerImg, category: 'Tools' },
    { id: 24, nameTech: 'TestNG', image: TestNgImg, category: 'Tools' },
    { id: 25, nameTech: 'Android Studio', image: AndroidStudioImg, category: 'Tools' }
];

  
const allTech = technologiesList.map(tech => {
    return (
        <>
        <li>
            <Technology 
                tech={tech}
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