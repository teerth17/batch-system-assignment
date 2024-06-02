import PropTypes from "prop-types";

const FrameIcon = ({ className = "" }) => {
  return (
    <img
      className={`absolute top-[calc(50%_-_2755.5px)] left-[calc(50%_+_103px)] rounded-lg w-[442px] h-[645px] object-contain ${className}`}
      alt=""
      src="/frame-1@2x.png"
    />
  );
};

FrameIcon.propTypes = {
  className: PropTypes.string,
};

export default FrameIcon;
