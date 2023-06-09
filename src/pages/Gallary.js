import React from 'react';
import './Gallary.css';
import { Link } from 'react-router-dom';
import ScreenshotImage1 from './images/Screenshot from 2023-06-09 14-48-10.png';
import ScreenshotImage2 from './images/Screenshot from 2023-06-09 14-03-40.png';
import ScreenshotImage3 from './images/Screenshot from 2023-06-09 14-56-47.png';
import ScreenshotImage4 from './images/Screenshot from 2023-06-09 14-57-14.png';
import ScreenshotImage5 from './images/Screenshot from 2023-06-09 14-57-38.png';

const Gallery = () => {
  const mobilePhotos = [
    { url: ScreenshotImage1, alt: 'Mobile 1' },
    { url: ScreenshotImage2, alt: 'Mobile 2' },
    { url: ScreenshotImage3, alt: 'Mobile 3' },
    { url: ScreenshotImage4, alt: 'Mobile 4' },
    { url: ScreenshotImage5, alt: 'Mobile 5' },
  ];

  return (
    <div className="gallery-container">
      <header className="bg-blue-600 py-4">
        <nav>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="header-button">Home</Link>
            </li>
            <li>
              <Link to="/gallery" className="header-button">Gallery</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="gallery-main">
        <h1 className="gallery-title">Mobile Supply System Gallery</h1>
        <div className="photo-scroll-container">
          {mobilePhotos.map((photo, index) => (
            <div key={index} className="photo-card">
              <a href={photo.url} target="_blank" rel="noopener noreferrer">
                <img src={photo.url} alt={photo.alt} className="photo-image" />
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="gallery-footer">
        <nav>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="footer-nav">Home</Link>
            </li>
            <li>
              <Link to="/gallery" className="footer-nav">Gallery</Link>
            </li>
          </ul>
        </nav>
        <p>&copy; 2023 Mobile Supply System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Gallery;
