import React, {useState} from "react";


export default function Textfrom(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    } 

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }


    const [text, setText] = useState('Enter Text Here');
    return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <br/>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button> 
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters </p>
        <p>{0.008 * text.split(" ").length} Minutes of reading </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
