import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "", star05, propTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[calc(50%_-_120px)] left-[calc(50%_-_319px)] w-[638px] h-24 text-left text-lg text-black font-clash-display ${className}`}
      style={groupDivStyle}
    >
      <div className="absolute top-[calc(50%_-_48px)] left-[calc(50%_-_319px)] w-[207px] h-7">
        <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_71.5px)] leading-[28px] capitalize font-semibold">
          budgeting intervals
        </div>
        <img
          className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_103.5px)] w-6 h-6 overflow-hidden"
          alt=""
          src={star05}
        />
      </div>
      <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_319px)] leading-[28px] capitalize font-medium inline-block w-[638px] opacity-[0.5]">
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  star05: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default GroupComponent;
