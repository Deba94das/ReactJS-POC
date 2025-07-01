import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title ="Textutils" aboutText="About Textutils"/> */}
      {/* <Navbar /> */}
      <Navbar title="Textutils"></Navbar>
      <div className="container" my-3>
        <TextForm heading="Enter the text below to analyze:"/>
      </div>
    </>
  );
}

export default App;
