import React, {useState} from "react"
import css from "./progressbar.module.css"
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

    function Filler({percentage}) {
        return <div className="filler" style={{ width: `${percentage}%` }} />
    }

    return (
        <>
        <div>
            <h2>Progress Bar</h2>
            <ProgressBar percentage={percentage}/>
        </div>
        <div>
        <div className="progress-bar">
          <Filler percentage={percentage} />
        </div>
        </div>
        <div style={{ marginTop: '20px' }}>  
            <button 
              onClick={nextStep}
             >
              Next Step
            </button>  
          </div>  
          </>
    )
    }

export default ProgressBar;





  


