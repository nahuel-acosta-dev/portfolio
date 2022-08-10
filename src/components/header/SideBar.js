import React from 'react';

const SideBar = () => {
    return(
        <section className="sidebar">
            <ul className="sidebar__social">
                <li>
                    <a className={`bi bi-house-door sidebar__enytpo entypo-house`} 
                    href="#home"
                    >
                        <span className="sidebar__name">Inicio</span>
                    </a>
                </li>
                <li>
                    <a className={`bi bi-person sidebar__enytpo entypo-person`}
                    href="#skills">
                        <span className="sidebar__name">Habilidades</span>
                    </a>
                </li>
                <li>
                    <a className="bi bi-brush sidebar__enytpo entypo-gplus" href="#projects">
                        <span className="sidebar__name">Proyectos</span>
                    </a>
                </li>
                <li>
                    <a className="bi bi-clipboard2 sidebar__enytpo entypo-dribbble" href="#curriculum">
                        <span className="sidebar__name">CV</span>
                    </a>
                </li>
                <li>
                    <a className="bi bi-chat sidebar__enytpo entypo-dropbox" href="#contact">
                        <span className="sidebar__name">Contáctame</span>
                    </a>
                </li>
                <li>
                    <a className="bi bi-box-arrow-in-down sidebar__enytpo entypo-evernote" href="https://">
                        <span className="sidebar__name">Descargar CV</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default SideBar;