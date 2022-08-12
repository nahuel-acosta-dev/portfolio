import React from "react";
import SideBar from '../components/header/SideBar';
import Home from '../sections/Home';
import Skills from '../sections/Skills';
import Curriculum from '../sections/Curriculum';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects';

const Portfolio = () => {

    

    return(
    <>
      <SideBar/>

      <main>
            <Home>
                <h1 className="title" data-aos="fade-up">
                    Freelance front-end 
                    developer with a passion 
                    for design and JavaScript
                </h1>
            </Home>
            <Skills></Skills>
            <Projects></Projects>          
            <Curriculum>
                <h4 className="title">
                    I’ve worked on more than 150 websites 
                    for great organizations
                </h4>
            </Curriculum>
            <Contact>
                <h5 className="title">
                    I’ve worked on more than 150 websites 
                    for great organizations
                </h5>
            </Contact>
      </main>
    </>
    )

}

export default Portfolio;
