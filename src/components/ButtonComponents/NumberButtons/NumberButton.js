import React from "react";

export default function NumberButton (props) {
  return (
    <>
      <button className="number_btn" onClick = {() => props.numberState(props.buttonNumber)}>{props.buttonNumber}</button>
    </>
  );
};
