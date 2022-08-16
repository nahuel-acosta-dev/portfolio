import React from "react";
import SideBar from '../components/header/SideBar';
import Home from '../sections/Home';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import Projects from '../sections/Projects';
import Footer from '../components/footer/Footer';

const Portfolio = () => {

    

    return(
    <>
      <SideBar/>

      <main>
            <Home/>
            <Skills/>
            <Projects/>      
            <Contact/>
            <Footer/>
      </main>
    </>
    )

}

export default Portfolio;
