import PropTypes from "prop-types";

const CreditCardForm = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_135.05px)] left-[calc(50%_-_363px)] w-[260.3px] h-[159.3px] text-left text-smi-7 text-white font-dm-sans ${className}`}
    >
      <div className="absolute top-[calc(50%_-_79.65px)] left-[calc(50%_-_130.15px)] [backdrop-filter:blur(27.89px)] rounded-[8.64px] w-[260.3px] h-[159.3px]">
        <div className="absolute h-full w-[99.92%] top-[0%] right-[0.08%] bottom-[0%] left-[0%] rounded-2xl bg-black" />
      </div>
      <div className="absolute top-[calc(50%_+_22.45px)] left-[calc(50%_-_112.35px)] tracking-[0.08em] font-medium">
        0000 8888 2222 3333
      </div>
      <div className="absolute top-[calc(50%_+_52.15px)] left-[calc(50%_-_111.85px)] w-[67.1px] h-[13px] text-2xs-4">
        <div className="absolute top-[calc(50%_-_6.5px)] left-[calc(50%_+_1.65px)] tracking-[0.08em]">
          07/24
        </div>
        <div className="absolute top-[calc(50%_-_2.2px)] left-[calc(50%_-_33.45px)] text-8xs-8 tracking-[0.08em] leading-[100%]">
          VALID THRU
        </div>
      </div>
      <img
        className="absolute top-[calc(50%_-_63.45px)] left-[calc(50%_+_67.55px)] w-[44.3px] h-[14.6px]"
        alt=""
        src="/credit-cardvisa-typewhite.svg"
      />
      <div className="absolute top-[calc(50%_-_64.55px)] left-[calc(50%_-_112.35px)] w-[56.1px] h-[16.7px] text-11xs font-plus-jakarta-sans">
        <div className="absolute top-[calc(50%_-_3.45px)] left-[calc(50%_+_23.85px)] font-extrabold inline-block w-[4.3px] h-[2.7px]">
          TM
        </div>
        <img
          className="absolute top-[calc(50%_-_8.35px)] left-[calc(50%_-_28.05px)] w-[50.7px] h-[16.7px] object-cover"
          alt=""
          src="/group@2x.png"
        />
      </div>
    </div>
  );
};

CreditCardForm.propTypes = {
  className: PropTypes.string,
};

export default CreditCardForm;
