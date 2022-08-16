import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import useScreenSize from '../../hooks/useScreenSize';

const SideBar = () => {
    const [collapse, setCollapse] = useState(true);
    const [showButton, setShowButton] = useState(false)
    const {width} = useScreenSize();

    useEffect(() =>  {
        if(width < 768) {
            setCollapse(false);
        }
    }, [width])

    return(
        <nav className="sidebar">
        {!collapse ?
            <div className="sidebar__collapse" >
                <Button variant="danger" onClick={() => setCollapse(true)}>   
                    <span className="bi bi-list"></span>   
                </Button>
            </div>
            :
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
                        <span className="sidebar__name">Sobre Mi</span>
                    </a>
                </li>
                <li>
                    <a className="bi bi-brush sidebar__enytpo entypo-projects" href="#projects">
                        <span className="sidebar__name">Proyectos</span>
                    </a>
                </li>
                <li>
                    <a className="bi bi-chat sidebar__enytpo entypo-contact" href="#contact">
                        <span className="sidebar__name">Contáctame</span>
                    </a>
                </li>
                <li>
                    <a className="bi bi-box-arrow-in-down sidebar__enytpo entypo-cv" href="https://">
                        <span className="sidebar__name">Descargar CV</span>
                    </a>
                </li>
                <li>
                    <a className="bi bi-list sidebar__enytpo 
                        entypo-collapse btn btn-link" onClick={() => setCollapse(false)}>
                        <span className="sidebar__name">Esconder</span>
                    </a>
                </li>
            </ul>}
        </nav>
    )
}

export default SideBar;