import React from 'react';
import PropTypes from 'prop-types';

const Project = ({img, alt, width}) => {

    return(
        <figure className="project figure d-flex align-content-center">
            <img src={img} 
            className="figure-img img-fluid rounded"
            width={width}
            alt={alt}/>
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