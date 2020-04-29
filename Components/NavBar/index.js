import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import burgerMenu from "./burgermenu.svg";
import newlogo from "../../assets/newlogo.png";
import { Image, StyleSheet, Text } from "react-native";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navBar">
      <Image className="logo" source={newlogo} />
      <Image
        source={burgerMenu}
        className="burgerMenu"
        alt="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Text className="title">AniMate</Text>
      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </div>
  );
}

export default NavBar;
