import React from 'react';
import '../style/index.css'

function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><button onClick={() => onNavigate(0)}>Home</button></li>
        <li><button onClick={() => onNavigate(1)}>About Me</button></li>
        <li><button onClick={() => onNavigate(2)}>Projects</button></li>
        <li><button onClick={() => onNavigate(3)}>Contact</button></li>
        <li><button onClick={() => onNavigate(4)}>Download CV</button></li>
      </ul>
    </nav>
  );
}
 export default Navbar