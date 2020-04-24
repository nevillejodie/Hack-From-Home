import React, { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import tempavatar from "./assets/tempavatar.png"
import "./app.css"
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

function App() {
  // const [health1, setHealth1] = useState(0);
  // const [health2, setHealth2] = useState(0);
  // const [health3, setHealth3] = useState(0);
  // const [value, onChangeText] = useState("");
  const [hungerPercentage, setHungerPercentage] = useState(0);
  const [happyPercentage, setHappyPercentage] = useState(0);
  const [healthPercentage, setHealthPercentage] = useState(0);

  function FormatText(value) {
    onChangeText(event.target.value);
  }

  function healthBar1() {
    setHealth1(health1);
  }

  function healthBar2() {
    setHealth2(health2);
  }

  function healthBar3() {
    setHealth3(health3);
  }

  const HappinessBtnAlert = () => {
    alert("You need to... add happiness advice");
  };

  const HealthBtnAlert = () => {
    alert("You need to... add health advice");
  };

  const HungerBtnAlert = () => {
    alert("You need to... add hunger advice");
  };

  function addToHealth() {
    if (healthPercentage < 100) {
      setHealthPercentage(healthPercentage + 20);
    } else {
      alert("Im Healthy!");
      return;
    }
  }
  function addToHunger() {
    if (hungerPercentage < 60) {
      setHungerPercentage(hungerPercentage + 20);
    } else {
      alert("Im Full!");
      return;
    }
  }
  function addToHappiness() {
    if (happyPercentage < 100) {
      setHappyPercentage(happyPercentage + 20);
    } else {
      alert("Im Happy!");
      return;
    }
  }

  return (
    <View>
    <NavBar/>
    <br></br>
      <View style={styles.container}>
        <ProgressBar
          hungerPercentage={hungerPercentage}
          happyPercentage={happyPercentage}
          healthPercentage={healthPercentage}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={addToHealth} style={styles.button}>
          <Text style={styles.text}>Sleep</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addToHealth} style={styles.button}>
          <Text style={styles.text}>Clean</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addToHappiness} style={styles.button}>
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addToHunger}>
          <Text style={styles.text}>Feed</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>Happiness:{health1}</Text>
      <Text>Health:{health2}</Text>
      <Text>Hunger:{health3}</Text>
      <br /> */}
      {/*       <Text>Have we done something we enjoy today?</Text>
      <Button onPress={() => setHealth1(health1 + 1)} title="Yes" />
      <Button onPress={HappinessBtnAlert} title="No"></Button>
      <Text>
        Have we washed today?
      </Text>
      <Button onPress={() => setHealth2(health2 + 1)} title="Yes" />
      <Button onPress={HealthBtnAlert} title="No"></Button>
      <Text>Have we eaten today?</Text>
      <Button onPress={() => setHealth3(health3 + 1)} title="Yes" />
      <Button onPress={HungerBtnAlert} title="No"></Button>
      <Text>Did we sleep last night?</Text>
      <Button onPress={() => setHealth2(health2 + 1)} title="Yes" />
      <Button onPress={HealthBtnAlert} title="No"></Button>
      <img src={avatar}/>
      <TextInput onChangeText={FormatText} /> */}
      <img className="tempavatar" height="100px" width="100px" src={tempavatar}></img>
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
    fontfamily: 'Roboto', 
  },
  avatar: {
    maxHeight: 50,
    maxWidth: 50,
  },
});

export default App;
