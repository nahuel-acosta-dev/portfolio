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
            <div className="sidebar__collapse" 
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}>
                {showButton ?
                <Button variant="danger" onClick={() => setCollapse(true)}>   
                    <span className="bi bi-arrow-90deg-right"></span>   
                </Button>
                :
                <Button variant="danger sidebar__button" onClick={() => setCollapse(true)}>      
                </Button>
                }
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
                    <a className="bi bi-brush sidebar__enytpo entypo-gplus" href="#projects">
                        <span className="sidebar__name">Proyectos</span>
                    </a>
                </li>
                {/*<li>
                    <a className="bi bi-clipboard2 sidebar__enytpo entypo-dribbble" href="#curriculum">
                        <span className="sidebar__name">CV</span>
                    </a>
                </li>*/}
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
                <li>
                    <a className="bi bi-arrow-90deg-left sidebar__enytpo 
                        entypo-collapse btn btn-link" onClick={() => setCollapse(false)}>
                        <span className="sidebar__name">Esconder</span>
                    </a>
                </li>
            </ul>}
        </nav>
    )
}

export default SideBar;