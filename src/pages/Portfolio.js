import React from "react";
import Header from '../components/header/Header';
import Home from '../components/section/Home';
import TitleSecundary from '../components/title/TitleSecundary';

const Portfolio = () => {

    return(
    <>
      <Header/>

      <main>
            <Home>
                <TitleSecundary>
                    Freelance front-end 
                    developer with a passion 
                    for design and JavaScript
                </TitleSecundary>
            </Home>
            <section className="contact">

            </section>          
      </main>
    </>
    )

}

export default Portfolio;