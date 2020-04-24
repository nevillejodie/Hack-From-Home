import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import burgerMenu from "./burgermenu.svg"


function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
      
    <div className="navBar">
    
      <img
        src={burgerMenu}
        className="burgerMenu"
        alt="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
       <p className="header">AniMate</p>
      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </div>
  );
}

export default NavBar;
