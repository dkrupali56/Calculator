import React from 'react';
import { Screen } from "./components/Screen";
import { Keypad } from "./components/Keypad";
import { CalcName } from './components/CalcName';
import { Calculations } from './components/Calculations';
import { useState } from 'react';

function App() {

  //to display on the calculator screen
  const [display, setDisplay]= useState("00")
  const [calc, setCalc]= useState("")
  //console.log(calc)

  if(display.length=== 0) setDisplay("00")

  function updateDisplay(token) {

    if(display.length === 0) setDisplay("00")

    if (display === "00") {
      if(token ==="AC") setDisplay("00")
      if(token ==="DEL") setDisplay("00")
      else setDisplay(token);
    } 
    else if(token ==="DEL") setDisplay(display.substring(0, display.length - 1))

    else if(token ==="AC") setDisplay("00")

    else if(token === "%") setDisplay((display/100).toFixed(2).toString())
    else {
      setDisplay(display + token);
      setCalc(display+token)
    }
  }

  //function for enabling the recalculation of previous calculations
  function resetDisplay(val){
    setDisplay(val)
  }

  function calculate() {
    //main  calculator logic

    for(let i=0; i<display.length;i++){
      if(display[i]==="+"){
        let left= parseFloat(display.slice(0, i))
        let right= parseFloat(display.slice(i+1))
        setDisplay((left+right).toString().replace(/\.00$/, ''))
      }
      else if(display[i]==="-"){
        let left= display.slice(0, i)
        let right= display.slice(i+1)
        setDisplay((left-right).toString().replace(/\.00$/, ''))
      }
      else if(display[i]==="x"){
        let left= display.slice(0, i)
        let right= display.slice(i+1)
        setDisplay((left*right).toFixed(2).replace(/\.00$/, ''))
      }
      else if(display[i]==="÷"){
        let left= display.slice(0, i)
        let right= display.slice(i+1)
        setDisplay((left/right).toFixed(2).toString().replace(/\.00$/, ''))
      }
    }
  }

  return (
    <div className="xl:flex justify-around md:block">
      <div className='left'>
        <h1 className="text-3xl font-bold py-5 text-center md:text-left">
            Calculator
          </h1>
          <div className='mx-10 sm:mx-0' >
            <Screen display= {display}/>
            <Keypad updateDisplay= {updateDisplay} calculate={calculate} />
          </div>
          <div className='calc_name'>
            <CalcName display={display} calc={calc} resetDisplay= {resetDisplay} />
          </div>
      </div>
      <div className='right'>
        <Calculations resetDisplay= {resetDisplay} />
      </div>
    </div>
  );
}

export default App;
