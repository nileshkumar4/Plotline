import Tooltip from "../Tooltip/Tooltip";
import "./PhoneSimulator.css";

const PhoneSimulator = ({ tooltipConfig }) => {
  const classNames = [
    "top-left",
    "top-right",
    "center",
    "bottom-left",
    "bottom-right",
  ];

  return (
    <div className="phone-container">
      <div className="phone">
        <div className="screen">
          {classNames.map((className, index) => (
            <div className={className} key={index}>
              <Tooltip tooltipConfig={tooltipConfig}>
                <button>{`Button ${index + 1}`}</button>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneSimulator;
