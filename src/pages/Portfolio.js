import React from "react";
import Header from '../components/header/Header';
import Home from '../components/section/Home';
import TitlePrimary from '../components/title/TitlePrimary';

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
            <section className="contact">

            </section>          
      </main>
    </>
    )

}

export default Portfolio;