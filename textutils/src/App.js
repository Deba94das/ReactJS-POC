import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
//import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title ="Textutils" aboutText="About Textutils"/> */}
      {/* <Navbar /> */}
      <div className="my-3">
      <Navbar title="Textutils" />
      </div>
      
      <div className="container" my-3>
        {/* <TextForm heading="Enter the text below to analyze:"/> */}
        <About></About>
      </div>
    </>
  );
}

export default App;
