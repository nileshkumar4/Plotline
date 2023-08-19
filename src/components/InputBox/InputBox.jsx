import "./InputBox.css";

const InputBox = ({ tooltipConfig, handleTooltipConfig }) => {
  return (
    <div className="input-container">
      <div className="input-box">
        <div className="input-column">
          <label htmlFor="target">Target Element</label>
          <select
            id="target"
            value={tooltipConfig.target}
            onChange={handleTooltipConfig("target")}
          >
            <option value="Button 1">Button 1</option>
            <option value="Button 2">Button 2</option>
            <option value="Button 3">Button 3</option>
            <option value="Button 4">Button 4</option>
            <option value="Button 5">Button 5</option>
          </select>
        </div>
        <div className="input-column">
          <label htmlFor="position">Tooltip Position</label>
          <select
            id="position"
            value={tooltipConfig.position}
            onChange={handleTooltipConfig("position")}
          >
            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
          </select>
        </div>
        <div className="input-column">
          <label htmlFor="text">Tooltip Text</label>
          <input
            type="text"
            id="text"
            value={tooltipConfig.text}
            onChange={handleTooltipConfig("text")}
          />
        </div>
        <div className="input-row">
          <div className="input-column">
            <label htmlFor="text-size">Text Size</label>
            <input
              type="number"
              id="text-size"
              value={tooltipConfig.textSize}
              onChange={handleTooltipConfig("textSize")}
            />
          </div>
          <div className="input-column">
            <label htmlFor="padding">Padding</label>
            <input
              type="number"
              id="padding"
              value={tooltipConfig.padding}
              onChange={handleTooltipConfig("padding")}
            />
          </div>
        </div>
        <div className="input-column">
          <label htmlFor="text-colour">Text Colour</label>
          <input
            type="text"
            id="text-colour"
            value={tooltipConfig.textColor}
            onChange={handleTooltipConfig("textColor")}
          />
        </div>
        <div className="input-column">
          <label htmlFor="background-colour">Background Colour</label>
          <input
            type="text"
            id="background-colour"
            value={tooltipConfig.backgroundColor}
            onChange={handleTooltipConfig("backgroundColor")}
          />
        </div>
        <div className="input-row">
          <div className="input-column">
            <label htmlFor="corner-radius">Corner Radius</label>
            <input
              type="number"
              id="corner-radius"
              value={tooltipConfig.cornerRadius}
              onChange={handleTooltipConfig("cornerRadius")}
            />
          </div>
          <div className="input-column">
            <label htmlFor="tooltip-width">Tooltip Width</label>
            <input
              type="number"
              id="tooltip-width"
              value={tooltipConfig.width}
              onChange={handleTooltipConfig("width")}
            />
          </div>
        </div>
        <div className="input-row">
          <div className="input-column">
            <label htmlFor="arrow-width">Arrow Width</label>
            <input
              type="number"
              id="arrow-width"
              value={tooltipConfig.arrowWidth}
              onChange={handleTooltipConfig("arrowWidth")}
            />
          </div>
          <div className="input-column">
            <label htmlFor="arrow-height">Arrow Height</label>
            <input
              type="number"
              id="arrow-height"
              value={tooltipConfig.arrowHeight}
              onChange={handleTooltipConfig("arrowHeight")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
