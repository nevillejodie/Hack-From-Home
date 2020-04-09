import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => {
            alert("You fed me!");
          }}
        >
          Feed
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Sleep</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Clean</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: 100,
    textAlign: "center",
    margin: 5,
    marginTop: 25,
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
});
