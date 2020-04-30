import React, { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import tempavatar from "./assets/tempavatar.png";
import happy from "./assets/happy.png";
import healthy from "./assets/healthy.png";
import hungry from "./assets/hungry.png";
import "./app.css";
import NavBar from "./components/NavBar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import InfoIcon from "./Components/InfoIcon/InfoIcon";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [hungerPercentage, setHungerPercentage] = useState(0);
  const [happyPercentage, setHappyPercentage] = useState(0);
  const [healthPercentage, setHealthPercentage] = useState(0);
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);
  const [bubbleText, setBubbleText] = useState("");

  function healthBar1() {
    setHealth1(health1);
  }

  function healthBar2() {
    setHealth2(health2);
  }

  function healthBar3() {
    setHealth3(health3);
  }

  function addToHealth() {
    if (healthPercentage < 100) {
      setHealthPercentage(healthPercentage + 20);
    } else {
      setIsBubbleOpen(true);
      setBubbleText("Im Healthy!");
      return;
    }
  }
  function addToHunger() {
    if (hungerPercentage < 60) {
      setHungerPercentage(hungerPercentage + 20);
      if (healthPercentage < 100) {
        setHealthPercentage(healthPercentage + 20);
      }
    } else {
      setIsBubbleOpen(true);
      setBubbleText("Im Full!");
      return;
    }
  }
  function addToHappiness() {
    if (happyPercentage < 100) {
      setHappyPercentage(happyPercentage + 20);
    } else {
      setIsBubbleOpen(true);
      setBubbleText("Im Happy!");
      return;
    }
  }

  return (
    <View>
      <NavBar />
      <br></br>

      <View style={styles.container}>
        <ProgressBar
          hungerPercentage={hungerPercentage}
          happyPercentage={happyPercentage}
          healthPercentage={healthPercentage}
        />
      </View>

      <View style={styles.imgContainer}>
        <Image style={styles.image} source={healthy} onClick={addToHealth} />
        <Image style={styles.image} source={hungry} onClick={addToHunger} />
        <Image style={styles.image} source={happy} onClick={addToHappiness} />
      </View>
      {/* <View style={styles.buttons}>


        <TouchableOpacity onPress={addToHealth} style={styles.button}>
          <Text style={styles.text}>Sleep</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addToHealth} style={styles.button}>
          <Text style={styles.text}>Clean</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addToHunger}>
          <Text style={styles.text}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addToHappiness} style={styles.button}>
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>
      </View> */}
      <View className="avatarContainer" style={styles.avatarContainer}>
        {isBubbleOpen && (
          <View className="speech-bubble">
            <Text
              className="close"
              onClick={() => {
                setIsBubbleOpen(false);
              }}
            >
              x
            </Text>
            <Text className="p"> {bubbleText} </Text>
          </View>
        )}
        <Image
          className="avatar"
          source={tempavatar}
          onClick={addToHappiness}
        />
        <View>
          <InfoIcon />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  buttons: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: -160,
    marginLeft: 10,
    zIndex: 10,
  },
  button: {
    backgroundColor: "#afeeee",
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    width: 90,
    textAlign: "center",
  },
  text: {
    fontSize: 30,

    fontfamily: "Roboto",
  },
  avatar: {
    maxHeight: 50,
    maxWidth: 50,
  },
  avatarContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: -120,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default App;
