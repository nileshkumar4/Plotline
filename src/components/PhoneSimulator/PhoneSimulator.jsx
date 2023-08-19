import React from "react";
import "./PhoneSimulator.css";
import Tooltip from "../Tooltip/Tooltip";

const PhoneSimulator = () => {
  return (
    <div className="phone-container">
      <div className="phone">
        <div className="screen">
          <div className="top-left">
            <Tooltip
              isTarget={true}
              position="right"
              style={{ backgroundColor: "black", color: "white" }}
              text="Tooltip text!"
            >
              <button>Button 1</button>
            </Tooltip>
          </div>
          <div className="top-right">
            <Tooltip
              isTarget={true}
              position="bottom"
              style={{ backgroundColor: "black", color: "white" }}
              text="Tooltip text!"
            >
              <button>Button 2</button>
            </Tooltip>
          </div>
          <div className="center">
            <Tooltip
              isTarget={true}
              position="bottom"
              style={{ backgroundColor: "black", color: "white" }}
              text="Tooltip text!"
            >
              <button>Button 3</button>
            </Tooltip>
          </div>
          <div className="bottom-left">
            <Tooltip
              isTarget={true}
              position="top"
              style={{ backgroundColor: "black", color: "white" }}
              text="Tooltip text!"
            >
              <button>Button 4</button>
            </Tooltip>
          </div>
          <div className="bottom-right">
            <Tooltip
              isTarget={true}
              position="left"
              style={{ backgroundColor: "black", color: "white" }}
              text="Tooltip text!"
            >
              <button>Button 5</button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSimulator;
