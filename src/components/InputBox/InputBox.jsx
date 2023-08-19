import React from "react";
import "./InputBox.css";

const InputBox = () => {
  return (
    <div className="input-container">
      <div className="input-box">
        <div className="input-column">
          <label htmlFor="target">Target Element</label>
          <select id="target">
            <option value="Button 1">Button 1</option>
            <option value="Button 2">Button 2</option>
            <option value="Button 3">Button 3</option>
            <option value="Button 4">Button 4</option>
            <option value="Button 5">Button 5</option>
          </select>
        </div>
        <div className="input-column">
          <label htmlFor="position">Tooltip Position</label>
          <select id="position">
            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
          </select>
        </div>
        <div className="input-column">
          <label htmlFor="text">Tooltip Text</label>
          <input type="text" id="text" />
        </div>
        <div className="input-row">
          <div className="input-column">
            <label htmlFor="text-size">Text Size</label>
            <input type="text" id="text-size" />
          </div>
          <div className="input-column">
            <label htmlFor="padding">Padding</label>
            <input type="text" id="padding" />
          </div>
        </div>
        <div className="input-column">
          <label htmlFor="text-colour">Text Colour</label>
          <input type="text" id="text-colour" />
        </div>
        <div className="input-column">
          <label htmlFor="background-colour">Background Colour</label>
          <input type="text" id="background-colour" />
        </div>
        <div className="input-row">
          <div className="input-column">
            <label htmlFor="corner-radius">Corner Radius</label>
            <input type="text" id="corner-radius" />
          </div>
          <div className="input-column">
            <label htmlFor="tooltip-width">Tooltip width</label>
            <input type="text" id="tooltip-width" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-column">
            <label htmlFor="arrow-width">Arrow width</label>
            <input type="text" id="arrow-width" />
          </div>
          <div className="input-column">
            <label htmlFor="arrow-height">Arrow height</label>
            <input type="text" id="arrow-height" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
