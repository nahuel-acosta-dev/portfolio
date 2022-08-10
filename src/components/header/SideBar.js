import React from 'react';

const SideBar = () => {
    
    
    return(
        <header>
            <ul id="social-sidebar">
                <li>
                    <a className="entypo-twitter" href="https://"><span>Tweeter</span></a>
                </li>
                <li>
                    <a className="entypo-facebook" href="https://"><span>Facebook</span></a>
                </li>
                <li>
                    <a className="entypo-gplus" href="https://"><span>Google+</span></a>
                </li>
                <li>
                    <a className="entypo-dribbble" href="https://"><span>Dribbble</span></a>
                </li>
                <li>
                    <a className="entypo-dropbox" href="https://"><span>Dropbox</span></a>
                </li>
                <li>
                    <a className="entypo-github" href="https://"><span>Github</span></a>
                </li>
                <li>
                    <a className="entypo-evernote" href="https://"><span>Evernote</span></a>
                </li>
            </ul>
        </header>
    )
}

export default SideBar;