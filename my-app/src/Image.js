import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  render() {
    const {imageSrc, caption} = this.props;
    return (
      <div className="container">
        <img src={imageSrc} className="gallery-image" alt={caption} />
        <div className="caption">{caption} </div>
      </div>
    );
  }
}

export default Image;
