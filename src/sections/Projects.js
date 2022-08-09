import React from 'react';
import Project from '../components/projects/Project';
import sixlives from '../image/sixlives.png'

const Projects = ({children}) =>{
    const title= 'ztext.js';
    const description = ', 3D typography for any website and any font';

    return(
        <section className="projects" id="projects">
            {children}
            <div className="projects__cont">
                <Project direction='left' title={title} description={description} img={sixlives}/>
                <Project direction='right' title={title} description={description} img={sixlives}/>
            </div>
            
        </section>
    )
}

export default Projects;