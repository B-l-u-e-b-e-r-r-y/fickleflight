import { useMemo } from "react";

const HotelCard = ({
  matterhornSuitesImage,
  entireBungalow,
  matterhornSuites,
  night,
  prop,
  reviews,
  propBorder,
}) => {
  const moreDetailsButtonStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className="flex flex-row items-start justify-start py-0 px-3 text-left text-base text-gray-100 font-components-button-large">
      <div className="flex-1 rounded-3xs bg-primary-contrast flex flex-col items-start justify-start py-[13px] px-3 gap-[23px] border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro hover:cursor-pointer">
        <img
          className="self-stretch h-[200px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={matterhornSuitesImage}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
              <div className="flex-1 relative tracking-[0.02em]">
                {entireBungalow}
              </div>
              <img
                className="h-[25px] w-[25px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/video.svg"
              />
            </div>
            <h3 className="m-0 w-[234px] relative text-3xl tracking-[0.04em] capitalize font-bold font-inherit text-darkslategray-300 inline-block mq450:text-lg">
              {matterhornSuites}
            </h3>
          </div>
          <div className="w-[234px] relative text-lg tracking-[0.04em] text-darkslategray-300 inline-block">
            {night}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[8.3px] text-darkslategray-300 mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[3.7px] shrink-0 [debug_commit:1de1738]">
            <img
              className="h-[17.2px] w-[16.6px] relative"
              alt=""
              src="/input-field.svg"
            />
            <div className="relative tracking-[0.04em] font-medium inline-block min-w-[25px]">
              {prop}
            </div>
          </div>
          <div className="flex-1 relative tracking-[0.04em] text-cornflowerblue-200 inline-block min-w-[74px] shrink-0 [debug_commit:1de1738]">
            {reviews}
          </div>
        </div>
        <div
          className="self-stretch rounded overflow-hidden flex flex-row items-start justify-center py-2 px-5 whitespace-nowrap text-mini text-cornflowerblue-200 border-[1px] border-solid border-lavender-200"
          style={moreDetailsButtonStyle}
        >
          <div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium inline-block min-w-[109px]">
            More details
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
