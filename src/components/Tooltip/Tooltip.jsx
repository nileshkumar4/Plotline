import React from "react";
import "./Tooltip.css";

const Tooltip = ({ isTarget, position, style, text, children }) => {
  return (
    <div className="tooltip-container">
      {isTarget && (
        <div className={`tooltip ${position}`} style={style}>
          {text}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
