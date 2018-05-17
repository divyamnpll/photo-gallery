import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';
const IMAGES = [
  {
    url: "https://www.gstatic.com/webp/gallery3/1.png",
    caption:"image 1"
  },
  {
    url:"https://www.gstatic.com/webp/gallery3/2.png",
    caption:"image 2"
  },
  {
    url:"https://www.gstatic.com/webp/gallery3/3.png",
    caption:"image 3"
  },
  {
    url:"https://www.gstatic.com/webp/gallery3/5.png",
    caption:"image 4"
  }
];
class App extends Component {
    
  render() {
    
    return (
      <div className="App">
        <Gallery images={IMAGES}/>
      </div>
    );
  }
}

export default App;
