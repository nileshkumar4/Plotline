import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ target, position, style, text }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isTooltipVisible && (
        <div className={`tooltip ${position}`} style={style}>
          {text}
        </div>
      )}
      {target}
    </div>
  );
};

export default Tooltip;
