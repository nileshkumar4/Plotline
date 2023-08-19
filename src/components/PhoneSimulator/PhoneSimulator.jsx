import React from "react";
import "./PhoneSimulator.css";
import Tooltip from "../Tooltip/Tooltip";

const PhoneSimulator = ({ tooltipConfig }) => {
  return (
    <div className="phone-container">
      <div className="phone">
        <div className="screen">
          <div className="top-left">
            <Tooltip tooltipConfig={tooltipConfig}>
              <button>Button 1</button>
            </Tooltip>
          </div>
          <div className="top-right">
            <Tooltip tooltipConfig={tooltipConfig}>
              <button>Button 2</button>
            </Tooltip>
          </div>
          <div className="center">
            <Tooltip tooltipConfig={tooltipConfig}>
              <button>Button 3</button>
            </Tooltip>
          </div>
          <div className="bottom-left">
            <Tooltip tooltipConfig={tooltipConfig}>
              <button>Button 4</button>
            </Tooltip>
          </div>
          <div className="bottom-right">
            <Tooltip tooltipConfig={tooltipConfig}>
              <button>Button 5</button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSimulator;
