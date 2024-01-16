import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container">
      <About/>
      </div>
    </>
  );
}

export default App;
