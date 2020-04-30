import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import burgerMenu from "./burgermenu.svg";
import newlogo from "../../assets/newlogo.png";
import { Image, StyleSheet, Text, View } from "react-native";
import InfoIcon from "../Info";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navBar">
      <Image className="logo" source={newlogo} />
      <View>
        <InfoIcon />
      </View>
      <Image
        source={burgerMenu}
        className="burgerMenu"
        alt="menu"
        style={{ marginTop: -90 }}
      />
      <Text className="title">AniMate</Text>
    </div>
  );
}

export default NavBar;
