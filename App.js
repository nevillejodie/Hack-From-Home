import React, {useState} from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from "react-native";


function App() {

  const [health1, setHealth1] = useState(0);
  const [health2, setHealth2] = useState(0);
  const [health3, setHealth3] = useState(0);
const [value, onChangeText] = useState('')


function FormatText(value){
  onChangeText(event.target.value)
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

  const HappinessBtnAlert = () =>
   { alert('You need to... add happiness advice') }
 
  
 const HealthBtnAlert = () =>
 { alert('You need to... add health advice') }


const HungerBtnAlert = () =>
{ alert('You need to... add hunger advice') }

  return (
    <View style={styles.container}>
    <Image
        style={styles.tinyLogo}
        source={require('/Users/jodie/Documents/hack-from-home/Hack-From-Home/placeholder.png')}
      />
      <Text>Happiness:{health1}</Text>
      <Text>Health:{health2}</Text>
      <Text>Hunger:{health3}</Text>
      <br/>
      <Text>Have we done something we enjoy today?</Text> 
      <Button onPress={() => setHealth1(health1+1)} title='Yes' /><Button onPress={HappinessBtnAlert} title='No'></Button>
      <Text>Have we spoken about how we feel, taken our medication, or visited the doctor today?</Text>
      <Button onPress={() => setHealth2(health2+1)} title='Yes' /><Button onPress={HealthBtnAlert} title='No'></Button>
      <Text>Have we eaten today?</Text>
      <Button onPress={() => setHealth3(health3+1)} title='Yes' /><Button onPress={HungerBtnAlert} title='No'></Button>
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
  },
});

export default App;
