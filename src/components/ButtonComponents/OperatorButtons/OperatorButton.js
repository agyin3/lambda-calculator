import React from "react";

export default function OperatorButton (props) {
  return (
    <>
      <button className="operator_btn" onClick = {() => props.setOperator(props.buttonData.value)}>{props.buttonData.value}</button>{/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
