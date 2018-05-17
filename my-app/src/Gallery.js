import React, { Component } from 'react';
import './Gallery.css';
import Image from './Image';

class Gallery extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);

  }
  next () {
    const {activeIndex} = this.state;
    this.setState({activeIndex: activeIndex + 1});
  }
  
  previous () {
    const {activeIndex} = this.state;
    this.setState({activeIndex: activeIndex - 1});
  }
  
  renderPreviousButton() {
    const {activeIndex} = this.state;
    if (activeIndex !== 0) {
      return (
        <button class="previous round" onClick={this.previous}>
          &#8249;
        </button>
      );
    }
  }
  
  renderNextButton() {
    const {activeIndex} = this.state;
    const {images} = this.props;
    const imageLen = images && images.length;
    
    if (activeIndex < imageLen - 1) {
      return (
        <button class="next round" onClick={this.next}>
          &#8250;
        </button>
      );
    }
  }
  
  render() {
    const {images} = this.props;
    const {activeIndex} = this.state;
    
    if (images && images.length > 0) {
      const activeImage = images[activeIndex];
      return (
        <div className="">        
          <Image imageSrc={activeImage.url} caption={activeImage.caption}/>
          {this.renderPreviousButton()}
          {this.renderNextButton()}
        </div>
      );
    } else {
      return null;
    }

  }
}

export default Gallery;
