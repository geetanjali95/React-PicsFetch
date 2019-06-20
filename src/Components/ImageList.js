import React from 'react';
import './ImageList.css';

const ImageList = props => {     
    const images = props.images.map( image => {
        return <img id='imgId' key={image.id} src={image.urls.regular} alt="img missing" />
    });

    return<div className='image-list'> {images}</div>
}

export default ImageList;
