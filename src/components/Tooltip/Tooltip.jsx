import "./Tooltip.css";

const Tooltip = ({ tooltipConfig, children }) => {
  const {
    target,
    position,
    text,
    textSize,
    padding,
    textColor,
    backgroundColor,
    cornerRadius,
    width,
    arrowWidth,
    arrowHeight,
    imgSrc,
    imgWidth,
    imgHeight,
  } = tooltipConfig;

  const getArrowBorderWidth = () => {
    if (position === "top")
      return `${arrowHeight}px ${arrowWidth}px 0 ${arrowWidth}px`;
    else if (position === "right")
      return `${arrowWidth}px ${arrowHeight}px ${arrowWidth}px 0`;
    else if (position === "bottom")
      return `0 ${arrowWidth}px ${arrowHeight}px ${arrowWidth}px`;
    return `${arrowWidth}px 0 ${arrowWidth}px ${arrowHeight}px`;
  };

  const getArrowBorderColor = () => {
    if (!backgroundColor) return;
    if (position === "top")
      return `${backgroundColor} transparent transparent transparent`;
    else if (position === "right")
      return `transparent ${backgroundColor} transparent transparent`;
    else if (position === "bottom")
      return `transparent transparent ${backgroundColor} transparent`;
    return `transparent transparent transparent ${backgroundColor}`;
  };

  return (
    <div className="tooltip-container">
      {target === children.props.children && (
        <>
          <div
            className={`tooltip ${position}`}
            style={{
              fontSize: textSize + "px",
              padding: padding + "px",
              color: textColor,
              backgroundColor,
              borderRadius: cornerRadius + "px",
              width: width + "px",
            }}
          >
            <div
              className={`arrow arrow-${position}`}
              style={{
                borderWidth: getArrowBorderWidth(),
                borderColor: getArrowBorderColor(),
              }}
            />
            {text}
            {!!imgSrc && (
              <img
                src={imgSrc}
                alt="set by user"
                style={{ width: imgWidth + "px", height: imgHeight + "px" }}
              />
            )}
          </div>
        </>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
