import React, { useState } from "react";
import ProgressBar from "./components/ProgressBar"
import avatar from "./raccoon.jpg"
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
  const [health1, setHealth1] = useState(0);
  const [health2, setHealth2] = useState(0);
  const [health3, setHealth3] = useState(0);
  const [value, onChangeText] = useState("");
  

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
  }

  return (
    
    <View style={styles.container}>
  {/*   <ProgressBar /> */}
      <TouchableOpacity style={styles.button} onPress={() => setHealth3(health3 + 1)}> 
        <Text
          style={styles.text}
          onPress={() => {
            alert("You fed me!");
          }}
        >
          Feed
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setHealth2(health2 + 1)} style={styles.button}>
        <Text style={styles.text}>Sleep</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setHealth1(health1 + 1)} style={styles.button}>
        <Text style={styles.text}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setHealth2(health2 + 1)} style={styles.button}>
        <Text style={styles.text}>Clean</Text>
      </TouchableOpacity>
      <Text>Happiness:{health1}</Text>
      <Text>Health:{health2}</Text>
      <Text>Hunger:{health3}</Text>
      <br />
      <Text>Have we done something we enjoy today?</Text>
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
      <TextInput onChangeText={FormatText} />
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
  button: {
    backgroundColor: "#afeeee",
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 30,
  },
  avatar: {
    maxHeight: 50,
    maxWidth: 50,
  }
});

export default App;
