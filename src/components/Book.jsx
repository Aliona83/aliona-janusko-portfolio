import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import DownloadCV from '../pages/DownloadCV';

const Book = forwardRef((props, ref) => {
  return (
    <div className="book-wrapper">
      <HTMLFlipBook width={400} height={500} ref={ref}>
        <div className="page"><Home /></div>       
        <div className="page"><AboutMe /></div>    
        <div className="page"><Projects /></div>   
        <div className="page"><Contact /></div>    
        <div className="page"><DownloadCV /></div> 
      </HTMLFlipBook>
    </div>
  );
});

export default Book;
