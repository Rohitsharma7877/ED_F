import React from 'react';
import './GalleryTittle.css';
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.png'
import img14 from './img14.jpg'
import img15 from './img15.jpeg'
import img16 from './img16.jpg'
import img17 from './img17.jpeg'
import img18 from './img18.jpg'


const GalleryTittle = () => {
  return (
    <div className="gallery-section">
      {/* Banner Section */}
      <div className="gallery-banner">
        <h1 className="gallery-heading">Expert Gallery</h1>
        <p className="gallery-sub">Gallery</p>
      </div>

      {/* Image Grid Section */}
      <div className="image-grid">
        <div className="image-box">
    <img src={img11} alt="Gallery 1" />
    <div className="image-title">Tittle</div>
  </div>
  <div className="image-box">
    <img src={img12} alt="Gallery 2" />
    <div className="image-title">Tittle 2</div>
  </div>
        <div className="image-box">
    <img src={img11} alt="Gallery 1" />
    <div className="image-title">Tittle 1</div>
  </div>
  <div className="image-box">
    <img src={img12} alt="Gallery 2" />
    <div className="image-title">Tittle 2</div>
  </div>
  <div className="image-box">
    <img src={img11} alt="Gallery 1" />
    <div className="image-title">Tittle 1</div>
  </div>
  <div className="image-box">
    <img src={img12} alt="Gallery 2" />
    <div className="image-title">Tittle 2</div>
  </div>
  <div className="image-box">
    <img src={img11} alt="Gallery 1" />
    <div className="image-title">Tittle 1</div>
  </div>
  <div className="image-box">
    <img src={img12} alt="Gallery 2" />
    <div className="image-title">Tittle 2</div>
  </div>
  <div className="image-box">
    <img src={img11} alt="Gallery 1" />
    <div className="image-title">Tittle 1</div>
  </div>
  <div className="image-box">
    <img src={img12} alt="Gallery 2" />
    <div className="image-title">Tittle 2</div>
  </div>
  <div className="image-box">
    <img src={img11} alt="Gallery 1" />
    <div className="image-title">Tittle 1</div>
  </div>
  <div className="image-box">
    <img src={img12} alt="Gallery 2" />
    <div className="image-title">Tittle 2</div>
  </div>
       
      </div>
    </div>
  );
};

export default GalleryTittle;
