import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
/* import CSS from "./progressbar.module.css" */
// percentage needs to be used onClick
// filler function that sets the css to the percentage
// ^ take in setPercentage
// take out the manual reset by the user, how will this work instead? useTimeout?
// send down to app and each one will take in the stuff from the 3 progress bars already made

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  function nextStep() {
    if (percentage < 100) {
      setPercentage(percentage + 20);
      console.log(percentage);
    } else {
      return;
    }
  }

  return (
    <View>
      <Text>Progress Bar</Text>
      <View style={styles.progressbar}>
        <View
          style={{
            width: percentage * 3.5,
            backgroundColor: "#1DA598",
            height: 20,
            borderRadius: "inherit",
            marginTop: -1,
          }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button onPress={nextStep} title="Next Step"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressbar: {
    height: 20,
    width: 350,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#333",
  },
  // filler: {
  //   background: "#1DA598",
  //   height: 100,
  //   borderRadius: "inherit",
  //   borderStyle: "solid",
  //   borderColor: "#000",
  //   borderWidth: 2,
  // },
});

export default ProgressBar;
