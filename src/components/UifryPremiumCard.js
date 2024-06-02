import PropTypes from "prop-types";

const UifryPremiumCard = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_178.85px)] left-[calc(50%_-_227.9px)] w-[512.4px] h-[313.9px] text-left text-xs-8 text-black font-clash-display ${className}`}
    >
      <img
        className="absolute top-[calc(50%_+_80.35px)] left-[calc(50%_+_0.2px)] rounded-lg w-64 h-[71px]"
        alt=""
        src="/rectangle-4.svg"
      />
      <img
        className="absolute top-[calc(50%_+_81.45px)] left-[calc(50%_+_16.1px)] w-[56.4px] h-[57.1px] object-contain"
        alt=""
        src="/rectangle-5.svg"
      />
      <img
        className="absolute top-[calc(50%_+_95.35px)] left-[calc(50%_+_79.1px)] w-[41.8px] h-[41.8px]"
        alt=""
        src="/star-7.svg"
      />
      <div className="absolute top-[calc(50%_+_80.35px)] left-[calc(50%_+_136.6px)] bg-black w-[1.3px] h-[71.2px]" />
      <div className="absolute top-[calc(50%_+_80.35px)] left-[calc(50%_+_62.1px)] bg-black w-[1.3px] h-[71.2px]" />
      <img
        className="absolute top-[calc(50%_-_147.15px)] left-[calc(50%_-_47.9px)] rounded-lg w-[297.5px] h-[302.6px] object-contain"
        alt=""
        src="/rectangle-3.svg"
      />
      <div className="absolute top-[calc(50%_+_69.15px)] left-[calc(50%_+_24.8px)] leading-[18.3px] capitalize font-semibold [transform:_rotate(-45.7deg)] [transform-origin:0_0]">
        make the best financial decisions
      </div>
      <div className="absolute top-[calc(50%_-_156.95px)] left-[calc(50%_-_256.2px)] w-[505.3px] h-[313.9px]">
        <div className="absolute top-[calc(50%_+_93.85px)] left-[calc(50%_-_252.65px)] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-black w-[534.3px] h-[71.4px] [transform:_rotate(-28deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[calc(50%_-_127.35px)] left-[calc(50%_-_222.55px)] w-[440px] h-[257.6px] object-contain"
          alt=""
          src="/group-35920@2x.png"
        />
      </div>
      <div className="absolute top-[calc(50%_+_96.65px)] left-[calc(50%_+_153.6px)] w-[86px] h-[38.6px]">
        <div className="absolute top-[calc(50%_-_19.3px)] left-[calc(50%_-_43px)] leading-[18.3px] capitalize font-semibold">
          Uifry Premium
        </div>
        <div className="absolute top-[calc(50%_+_0.3px)] left-[calc(50%_-_43px)] text-2xs-5 leading-[18.3px] capitalize font-medium">
          free trial
        </div>
      </div>
    </div>
  );
};

UifryPremiumCard.propTypes = {
  className: PropTypes.string,
};

export default UifryPremiumCard;
