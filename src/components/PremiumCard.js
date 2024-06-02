import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const PremiumCard = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_2012.8px)] left-[calc(50%_-_694px)] w-[1322px] h-[719.5px] text-left text-29xl text-black font-clash-display ${className}`}
    >
      <div className="absolute top-[calc(50%_-_231.75px)] left-[calc(50%_+_23px)] w-[638px] h-[464px]">
        <div className="absolute top-[calc(50%_-_232px)] left-[calc(50%_-_319px)] w-[359px] h-20">
          <b className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_179.5px)] leading-[48px] capitalize">
            uifry premium
          </b>
          <div className="absolute top-[calc(50%_-_40px)] left-[calc(50%_-_179.5px)] text-lg tracking-[0.16em] leading-[28px] uppercase font-medium text-tomato">
            features
          </div>
        </div>
        <GroupComponent star05="/star05.svg" />
        <GroupComponent star05="/cube02.svg" propTop="calc(50% + 8px)" />
        <GroupComponent star05="/cube04.svg" propTop="calc(50% + 136px)" />
      </div>
      <img
        className="absolute top-[calc(50%_-_359.75px)] left-[calc(50%_-_661px)] w-[719.5px] h-[719.5px] object-cover"
        alt=""
        src="/group-35933@2x.png"
      />
    </div>
  );
};

PremiumCard.propTypes = {
  className: PropTypes.string,
};

export default PremiumCard;
