import PropTypes from "prop-types";

const FormContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_1373.3px)] left-[calc(50%_-_565px)] w-[1239.5px] h-[719.5px] text-left text-29xl text-black font-clash-display ${className}`}
    >
      <div className="absolute top-[calc(50%_-_161.75px)] left-[calc(50%_-_619.75px)] w-[535px] h-[323px]">
        <div className="absolute top-[calc(50%_-_161.5px)] left-[calc(50%_-_267.5px)] w-[470px] h-20">
          <b className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_235px)] leading-[48px] capitalize">
            why choose Uifry?
          </b>
          <div className="absolute top-[calc(50%_-_40px)] left-[calc(50%_-_235px)] text-lg tracking-[0.16em] leading-[28px] uppercase font-medium text-tomato">
            advatnages
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_49.5px)] left-[calc(50%_-_267.5px)] w-[535px] h-[211px] text-lg">
          <div className="absolute top-[calc(50%_-_34.5px)] left-[calc(50%_-_267.5px)] leading-[28px] capitalize font-medium inline-block w-[535px] opacity-[0.5]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
          <div className="absolute top-[calc(50%_-_105.5px)] left-[calc(50%_-_267.5px)] w-[336px] h-12 text-9xl">
            <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_105px)] leading-[28px] capitalize font-semibold">
              clever notifications
            </div>
            <img
              className="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_168px)] w-12 h-12"
              alt=""
              src="/group-358991.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[calc(50%_-_359.75px)] left-[calc(50%_-_99.75px)] w-[719.5px] h-[719.5px] object-cover"
        alt=""
        src="/group-35935@2x.png"
      />
    </div>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
