import React from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton.js";
//import any components needed

//Import your array data to from the provided data file

export default function Specials () {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = React.useState();
  const specialButtons = specials.map((special, index) => (
    <SpecialButton key = {index} specialValue = {special}/>
  ))

  return (
    <div className="special_container">
      {specialButtons}
    </div>
  );
};
