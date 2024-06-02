import PropTypes from "prop-types";

const UserFeedbackContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_+_38.2px)] left-[calc(50%_-_640px)] w-[1185px] h-[821px] text-center text-29xl text-black font-clash-display ${className}`}
    >
      <div className="absolute top-[calc(50%_-_410.5px)] left-[calc(50%_-_179.5px)] w-[455px] h-32">
        <b className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_227.5px)] leading-[48px] capitalize inline-block w-[455px]">
          what our users say about us?
        </b>
        <div className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_74.5px)] text-lg tracking-[0.16em] leading-[28px] uppercase font-medium">
          testimonial
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_302.5px)] left-[calc(50%_-_592.5px)] w-[1185px] h-[713px] text-left text-lg">
        <div className="absolute top-[calc(50%_-_211.5px)] left-[calc(50%_+_150.5px)] w-[442px] h-[392px]">
          <div className="absolute top-[calc(50%_-_116px)] left-[calc(50%_-_221px)] leading-[28px] capitalize font-medium inline-block w-[442px] opacity-[0.5]">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </div>
          <div className="absolute top-[calc(50%_-_196px)] left-[calc(50%_-_221px)] text-9xl leading-[28px] capitalize font-semibold inline-block w-[442px]">
            the best financial accounting app ever!
          </div>
          <div className="absolute top-[calc(50%_+_104px)] left-[calc(50%_-_221px)] w-48 h-10">
            <img
              className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_96px)] w-10 h-10 object-cover"
              alt=""
              src="/group-28@2x.png"
            />
            <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_48px)] w-36 h-[30px] opacity-[0.5]">
              <img
                className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_72px)] w-[30px] h-[30px] object-cover"
                alt=""
                src="/group-27@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_34px)] w-[30px] h-[30px] object-cover"
                alt=""
                src="/group-29@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_4px)] w-[30px] h-[30px] object-cover"
                alt=""
                src="/group-30@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_42px)] w-[30px] h-[30px] object-cover"
                alt=""
                src="/group-31@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[calc(50%_+_168px)] left-[calc(50%_-_221px)] leading-[28px] capitalize font-semibold">
            nick jonas
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_356.5px)] left-[calc(50%_-_592.5px)] w-[713px] h-[713px]"
          alt=""
          src="/group-1000002332.svg"
        />
      </div>
    </div>
  );
};

UserFeedbackContainer.propTypes = {
  className: PropTypes.string,
};

export default UserFeedbackContainer;
