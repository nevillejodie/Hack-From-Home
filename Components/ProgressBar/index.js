import React, {useState} from "react"
import { Stylesheet, Text, View } from "react-native"
/* import CSS from "./progressbar.module.css" */
// percentage needs to be used onClick 
// filler function that sets the css to the percentage
// ^ take in setPercentage
// take out the manual reset by the user, how will this work instead? useTimeout? 
// send down to app and each one will take in the stuff from the 3 progress bars already made 


function ProgressBar() {
    const [percentage, setPercentage] = useState(0)


    function nextStep() {
        if(percentage < 100) { 
            setPercentage(percentage+20) }
       else {
           return
       }
    }

    return (
        <View>
        
            <Text>Progress Bar</Text>
        <View style={styles.progressbar}></View>
       <View style={styles.filler} style={{ width: `${percentage}%` }} />
        <View style={{ marginTop: 20 }}>  
            <button 
              onClick={nextStep}
             >
              Next Step
            </button>  
          </View>
          </View>
  )}
    
  const styles = Stylesheet.create({
    progressbar:{
        height: 20,
        width: 350,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#333'
      },
      filler:{
        background: '#1DA598',
        height: 100,
        borderRadius: "inherit",
      },
  });

export default ProgressBar;

