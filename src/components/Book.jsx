import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import DownloadCV from '../pages/DownloadCV';

const Book = forwardRef((props , ref) => {
  return (
    <div className="book-wrapper">
      <HTMLFlipBook 
        width={800}
        height={1000}
        size="fixed"
        minWidth={400}
        maxWidth={400}
        minHeight={500}
        maxHeight={500}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        startPage={0} 
        ref={ref}>
        <div className="page"><Home /></div>      
        <div className="page"><AboutMe /></div>  
        <div className="page"><Projects /></div>   
        <div className="page"><Contact /></div>    
        <div className="page"><DownloadCV /></div> 
        <div className="page"><div></div></div>
      </HTMLFlipBook>
    </div>
  );
});

export default Book;
