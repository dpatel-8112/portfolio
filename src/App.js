import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      {/* <span
        style={{
          fontSize: "25PX",
          fontFamily: "cursive",
          backgroundColor: "red",
          padding: "5px",
          margin: "auto",
        }}
      >
        Work IN Progress.
      </span> */}
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
