import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Project = ({img, alt, width}) => {

    return(
        <figure className="project figure d-flex align-content-center project__imgbx">
            <img src={img} 
            className="figure-img img-fluid rounded"
            width={width}
            alt={alt}/>
            <div className="project__txt">
                <Button className="project__link"><span>ir al sitio</span></Button>
            </div>
        </figure>
    )

}

Project.propTypes = {
    direction: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string
};

export default Project;