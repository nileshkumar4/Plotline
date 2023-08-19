import InputBox from "./components/InputBox/InputBox";
import PhoneSimulator from "./components/PhoneSimulator/PhoneSimulator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="input-box-container">
        <InputBox />
      </div>
      <div className="phone-simulator-container">
        <PhoneSimulator />
      </div>
    </div>
  );
}

export default App;
