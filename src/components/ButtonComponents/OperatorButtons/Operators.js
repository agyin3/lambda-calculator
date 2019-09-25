import React from "react";
import {operators} from "../../../data.js";
import OperatorButton from "./OperatorButton.js";
import "../../../App.css";

//import any components needed

//Import your array data to from the provided data file

export default function Operators(props) {
  // STEP 2 - add the imported data to state

  const [operatorState, setOperatorState] = React.useState(operators);
  const operatorButtons = operators.map((operatorObj, index) => (
    <OperatorButton key = {index} buttonData = {operatorObj} setOperator = {props.setOperatorDisplay}/>
  ))
  return (
    <div className="operator_container">
      {operatorButtons}
    </div>
  );
};
