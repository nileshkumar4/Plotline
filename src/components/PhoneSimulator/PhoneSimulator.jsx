import React from "react";
import "./PhoneSimulator.css";

const PhoneSimulator = () => {
  return (
    <div className="phone-container">
      <div className="phone">
        <div className="screen">
          <button className="top-left">Button 1</button>
          <button className="top-right">Button 2</button>
          <button className="center">Button 3</button>
          <button className="bottom-left">Button 4</button>
          <button className="bottom-right">Button 5</button>
        </div>
      </div>
    </div>
  );
};

export default PhoneSimulator;
