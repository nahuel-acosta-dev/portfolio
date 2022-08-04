import React from "react";
import Header from '../components/header/Header';
import Home from '../components/section/Home';
import Skills from '../components/section/Skills';
import TitlePrimary from '../components/title/TitlePrimary';
import TitleSecundary from '../components/title/TitleSecundary';

const Portfolio = () => {

    return(
    <>
      <Header/>

      <main>
            <Home>
                <TitlePrimary>
                    Freelance front-end 
                    developer with a passion 
                    for design and JavaScript
                </TitlePrimary>
            </Home>
            <Skills>
                <TitleSecundary>
                    12+ years online 
                    experience as a developer and 
                    designer
                </TitleSecundary>
            </Skills>          
      </main>
    </>
    )

}

export default Portfolio;