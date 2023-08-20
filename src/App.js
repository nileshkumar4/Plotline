import { useState } from "react";
import InputBox from "./components/InputBox/InputBox";
import PhoneSimulator from "./components/PhoneSimulator/PhoneSimulator";
import "./App.css";

const TOOLTIP_CONFIG = "TOOLTIP_CONFIG";

function App() {
  const [tooltipConfig, setTooltipConfig] = useState(
    JSON.parse(localStorage.getItem(TOOLTIP_CONFIG)) ?? {
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
      imgSrc: "",
      imgWidth: "",
      imgHeight: "",
    }
  );

  const handleTooltipConfig = (config) => (event) => {
    const newTooltipConfig = { ...tooltipConfig, [config]: event.target.value };
    setTooltipConfig(newTooltipConfig);
    localStorage.setItem(TOOLTIP_CONFIG, JSON.stringify(newTooltipConfig));
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
