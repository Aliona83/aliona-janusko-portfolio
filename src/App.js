import React, { useRef } from 'react';
import Navbar from './components/TempNavbar';
import Book from './components/Book';
import './style/App.css';

function App() {
  const bookRef = useRef();

  const goToPage = (pageNumber) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(pageNumber);
    }
  };

  return (
    <div className="App">
      <Navbar onNavigate={goToPage} />
      <Book ref={bookRef} />
    </div>
  );
}

export default App;
