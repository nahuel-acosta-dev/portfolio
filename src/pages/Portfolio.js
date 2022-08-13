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
            </Home>
            <Skills></Skills>
            <Projects></Projects>          
            {/*<Curriculum>
            </Curriculum>*/}
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
