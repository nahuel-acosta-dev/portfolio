import React from "react";
import Header from '../components/header/Header';
import Home from '../components/section/Home';
import Skills from '../components/section/Skills';
import Curriculum from '../components/section/Curriculum';
import Contact from '../components/section/Contact';

const Portfolio = () => {

    return(
    <>
      <Header/>

      <main>
            <Home>
                <h1 className="title">
                    Freelance front-end 
                    developer with a passion 
                    for design and JavaScript
                </h1>
            </Home>
            <Skills>
                <h2 className="title">
                    12+ years online 
                    experience as a developer and 
                    designer
                </h2>
            </Skills>          
            <Curriculum>
                <h3 className="title">
                    I’ve worked on more than 150 websites 
                    for great organizations
                </h3>
            </Curriculum>
            <Contact>
                <h4 className="title">
                    I’ve worked on more than 150 websites 
                    for great organizations
                </h4>
            </Contact>
      </main>
    </>
    )

}

export default Portfolio;