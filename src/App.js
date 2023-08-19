import { useState } from "react";
import InputBox from "./components/InputBox/InputBox";
import PhoneSimulator from "./components/PhoneSimulator/PhoneSimulator";
import "./App.css";

function App() {
  const [tooltipConfig, setTooltipConfig] = useState({
    target: "Button 3",
    position: "bottom",
    text: "Tooltip Text!",
    textSize: "",
    padding: "",
    textColor: "",
    backgroundColor: "",
    cornerRadius: "",
    width: "",
    arrowWidth: 6,
    arrowHeight: 6,
  });

  const handleTooltipConfig = (config) => (event) => {
    setTooltipConfig((prevConfig) => {
      return { ...prevConfig, [config]: event.target.value };
    });
  };

  return (
    <div className="App">
      <div className="input-box-container">
        <InputBox
          tooltipConfig={tooltipConfig}
          handleTooltipConfig={handleTooltipConfig}
        />
      </div>
      <div className="phone-simulator-container">
        <PhoneSimulator tooltipConfig={tooltipConfig} />
      </div>
    </div>
  );
}

export default App;
