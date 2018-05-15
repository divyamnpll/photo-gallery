import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
  render() {
    const {image, caption} = this.props;
    return (
      <div className="">
        <img src={image} className="" alt="caption" />
      </div>
    );
  }
}

export default App;
