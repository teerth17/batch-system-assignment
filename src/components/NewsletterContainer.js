import PropTypes from "prop-types";

const NewsletterContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_203px)] left-[calc(50%_+_205.5px)] w-[340px] h-[181px] text-left text-base text-black font-clash-display ${className}`}
    >
      <div className="absolute top-[calc(50%_-_90.5px)] left-[calc(50%_-_170px)] text-13xl leading-[42px] capitalize font-medium">
        Newsletter
      </div>
      <div className="absolute top-[calc(50%_-_32.5px)] left-[calc(50%_-_170px)] leading-[26px] capitalize font-medium">
        Stay up to date
      </div>
      <div className="absolute top-[calc(50%_+_9.5px)] left-[calc(50%_-_170px)] w-[340px] h-[81px] text-gray-200">
        <div className="absolute top-[calc(50%_-_40.5px)] left-[calc(50%_-_170px)] shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white w-[340px] h-[81px]" />
        <div className="absolute top-[calc(50%_-_12.5px)] left-[calc(50%_-_146px)] leading-[26px] font-medium">{`Your email `}</div>
        <div className="absolute top-[calc(50%_-_30.5px)] left-[calc(50%_-_0px)] w-40 h-[61px] text-white">
          <div className="absolute top-[calc(50%_-_30.5px)] left-[calc(50%_-_80px)] rounded bg-black w-40 h-[61px]" />
          <div className="absolute top-[calc(50%_-_12.5px)] left-[calc(50%_-_40px)] leading-[26px] capitalize font-medium">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
};

NewsletterContainer.propTypes = {
  className: PropTypes.string,
};

export default NewsletterContainer;
