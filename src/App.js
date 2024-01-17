import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark"); // Weather Dark mode is enabled or not
  const [alert, setAlert] = useState({
    message: null,
    type: null,
  });

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  let toggleMode = (setAlert) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042845";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Textfrom showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/> */}
      {/* <About /> */}

      <BrowserRouter>
        <Navbar mode={mode} title="TextUtils" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Textfrom
                showAlert={showAlert}
                heading="Enter the text below to analyze"
                mode={mode}
              />
            }
          />
          <Route path="about" exact element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
