import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import burgerMenu from "./burgermenu.svg";
import templogo from "./templogo.png"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navBar">
      <img className="logo" src={templogo} height="80px" width="80px"></img>
      <img
        src={burgerMenu}
        className="burgerMenu"
        alt="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <h3 className="header">AniMate</h3>
      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </div>
  );
}

export default NavBar;
