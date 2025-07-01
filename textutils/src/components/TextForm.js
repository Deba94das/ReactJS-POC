import React, { useState } from "react";


export default function TextForm(props) {
  const [text,setText] = useState('Enter text here');

  const convertToUppercase = () =>{
    let upperText=text.toUpperCase();
    setText(upperText);
  }
  const convertToLowercase = () =>{
    let upperText=text.toLowerCase();
    setText(upperText);
  }
  const clearText = () =>{
    let upperText='';
    setText(upperText);
  }
  const handleOnChange =(e) =>{
    setText(e.target.value);
  }
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="5" value={text} ></textarea>
        <br></br>
        <button className="btn btn-primary mx-2" onClick={convertToUppercase}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={convertToLowercase}>Convert to LoweCase</button>
        <button className="btn btn-success mx-2" onClick={clearText}>Clear Text</button>
      </div>
    </div>
    <div className="container my-3">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
