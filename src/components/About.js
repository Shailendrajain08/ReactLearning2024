import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "#042845",
    backgroundColor: "white",
  });

  const [btnStyle, setBtnStyle] = useState({
    color: "#042845",
    backgroundColor: "white",
    border: '1px solid #042845'
  });

  const [btnTxt, setBtnTxt] = useState ("Enable Dark Mode")

  let toggleStyle = () => {
    if (myStyle.color === "#042845") {
      setMyStyle({
        color: "white",
        backgroundColor: "#042845",
      });
      setBtnStyle({
        color: "white",
        backgroundColor: "#042845",
        border: '1px solid white'
      });
      setBtnTxt("Enable Light Mode")
    } else {
      setMyStyle({
        color: "#042845",
        backgroundColor: "white",
      });
      setBtnStyle({
        color: "#042845",
        backgroundColor: "white",
        border: '1px solid #042845'
      });
      setBtnTxt("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1>About US</h1>
      <Accordion defaultActiveKey="0" style={myStyle}>
        <Accordion.Item eventKey="0" style={myStyle}>
          <Accordion.Header style={myStyle}>Accordion Item #1</Accordion.Header>
          <Accordion.Body style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={myStyle}>
          <Accordion.Header style={myStyle}>Accordion Item #2</Accordion.Header>
          <Accordion.Body style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={myStyle}>
          <Accordion.Header style={myStyle}>Accordion Item #3</Accordion.Header>
          <Accordion.Body style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <ButtonGroup size="lg" className="mb-2">
        <Button style={btnStyle} onClick={toggleStyle}>
          {btnTxt}
        </Button>
      </ButtonGroup>
    </div>
  );
}
