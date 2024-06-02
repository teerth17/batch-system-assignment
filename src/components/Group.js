import PropTypes from "prop-types";

const Group = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_203px)] left-[calc(50%_-_545.5px)] w-[173px] h-[118px] text-left text-base text-black font-clash-display ${className}`}
    >
      <div className="absolute top-[calc(50%_-_59px)] left-[calc(50%_-_86.5px)] w-[117px] h-[34.4px] text-8xs-2 text-gray-300">
        <div className="absolute top-[calc(50%_-_7.2px)] left-[calc(50%_+_49.5px)] font-medium inline-block w-[9px] h-[5px]">
          TM
        </div>
        <div className="absolute top-[calc(50%_-_17.2px)] left-[calc(50%_-_58.5px)] w-[106.2px] h-[34.4px]">
          <img
            className="absolute top-[calc(50%_-_17.2px)] left-[calc(50%_-_53.1px)] w-[34px] h-[34px] overflow-hidden"
            alt=""
            src="/frame.svg"
          />
          <img
            className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12.7px)] w-[65.8px] h-[29.3px]"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_86.5px)] w-[172px] h-[26px]">
        <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_54px)] leading-[26px] capitalize font-medium">
          help@frybix.com
        </div>
        <img
          className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_86px)] w-6 h-6 overflow-hidden"
          alt=""
          src="/frame1.svg"
        />
      </div>
      <div className="absolute top-[calc(50%_+_33px)] left-[calc(50%_-_86.5px)] w-[173px] h-[26px]">
        <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_54.5px)] leading-[26px] capitalize font-medium">
          +1 234 456 678 89
        </div>
        <img
          className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_86.5px)] w-6 h-6 overflow-hidden"
          alt=""
          src="/frame2.svg"
        />
      </div>
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
