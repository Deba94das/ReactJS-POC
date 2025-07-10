import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <Router>
      <div className="my-3">
          <Navbar
            title="Textutils"
            aboutText="About"
            mode={mode}
            toggleMode={toggleMode}
          />
        </div>
        <div className="container my-3">
        <Routes>
            <Route exact path="/" element={<TextForm heading="Enter Text to analyze" mode={mode}/>} />
            <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
