import React from "react";
import '../../../App.css'

export default function SpecialButton(props) {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='special_btn'>{props.specialValue}</button>
    </>
  );
};
