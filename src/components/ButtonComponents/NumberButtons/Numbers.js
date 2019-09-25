import React from "react";
import { numbers } from "../../../data.js";
import NumberButton from "./NumberButton.js";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export default function  Numbers (props) {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = React.useState(numbers);
  const numbersButtons = numbers.map((number, index) => (
    <NumberButton key = {index} buttonNumber = {number} numberState = {props.setNumberDisplay}/>
  ));
  return (
    <div className="numbers_container">
      {numbersButtons}
       
    </div>
  );
};
