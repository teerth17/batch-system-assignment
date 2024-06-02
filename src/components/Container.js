import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_359.75px)] left-[calc(50%_-_622px)] w-[1244px] h-[719.5px] text-left text-lg text-black font-clash-display ${className}`}
    >
      <div className="absolute top-[calc(50%_-_105.75px)] left-[calc(50%_+_60px)] w-[562px] h-[211px]">
        <div className="absolute top-[calc(50%_-_105.5px)] left-[calc(50%_-_281px)] w-[562px] h-[211px]">
          <div className="absolute top-[calc(50%_-_34.5px)] left-[calc(50%_-_281px)] leading-[28px] capitalize font-medium inline-block w-[562px] opacity-[0.5]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
          <div className="absolute top-[calc(50%_-_105.5px)] left-[calc(50%_-_281px)] w-[325px] h-12 text-9xl">
            <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_99.5px)] leading-[28px] capitalize font-semibold">
              fully customizable
            </div>
            <img
              className="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_162.5px)] w-12 h-12"
              alt=""
              src="/group-358992.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[calc(50%_-_359.75px)] left-[calc(50%_-_622px)] w-[719.5px] h-[719.5px] object-cover"
        alt=""
        src="/group-35937@2x.png"
      />
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
