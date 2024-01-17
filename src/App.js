import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import Textfrom from "./components/Textfrom"

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>

      <div className="container">
      {/* <Textfrom heading="Enter the text below to analyze"/> */}
      <About/>
      </div>
    </>
  );
}

export default App;
