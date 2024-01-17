import React, { useState } from "react";

export default function Textfrom(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const clearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "warning");
  };

  const handleTitleClick = () => {
    let newText = text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
    setText(newText);
    // props.showAlert("Text Capitalized", "success");
  };
 
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'gray':'white', color:'white'}}
        ></textarea>
        <br />
        <button className="btn btn-primary mx-1" onClick={handleTitleClick}>
          Convert To Titlecase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Clear Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={clearClick}>
          Clear Text
        </button>
      </div>
      <div className="container" style={{backgroundColor:props.mode==='dark'?'#042845':'white', color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes of reading </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something in the text box above to preview it here"}</p>
      </div>
    </>
  );
}
