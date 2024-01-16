import "./App.css";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container">
      <Textfrom heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
