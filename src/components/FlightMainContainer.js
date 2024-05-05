import { useMemo } from "react";

const FlightMainContainer = ({
  sIN,
  lAX,
  departOn,
  sep2021,
  propWidth,
  propFlex,
  propMarginLeft,
  propMinWidth,
}) => {
  const flightMainContainerStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      marginLeft: propMarginLeft,
    };
  }, [propWidth, propFlex, propMarginLeft]);

  const lAXStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="w-[632.5px] rounded-lg box-border flex flex-col items-start justify-start py-[18px] px-[19px] gap-[21px] max-w-full text-left text-5xl text-cornflowerblue-300 font-components-button-large border-[1px] border-solid border-whitesmoke-200"
      style={flightMainContainerStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
        <h3 className="m-0 w-[44.7px] relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit inline-block shrink-0 mq450:text-lgi">
          {sIN}
        </h3>
        <div className="w-[117.4px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <img
            className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/duration.svg"
          />
        </div>
        <h3
          className="m-0 w-[51.3px] relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit text-right inline-block shrink-0 mq450:text-lgi"
          style={lAXStyle}
        >
          {lAX}
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 text-xl text-black">
        <div className="relative tracking-[0.04em] leading-[24px] capitalize mq450:text-base">
          <b>{departOn}</b>
          <span>{sep2021}</span>
        </div>
      </div>
    </div>
  );
};

export default FlightMainContainer;
