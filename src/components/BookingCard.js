import { useMemo } from "react";

const BookingCard = ({
  airlineLogo,
  singaporeAirlines,
  price,
  depCode,
  depName,
  arrCode,
  arrName,
  flightClass,
  numPeople,
  expedia,
  timeAgo,
  propMinWidth,
  propMinWidth1,
  propFlex,
  propMinWidth2,
  propMinWidth3,
  propMinWidth4,
  propMinWidth5,
  propTextAlign,
  propMinWidth6,
  propMinWidth7,
  propDisplay,
}) => {
  const singaporeAirlines2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const priceStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const departure1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const depCodeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const depNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const arrCodeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  const arrNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth5,
      textAlign: propTextAlign,
    };
  }, [propMinWidth5, propTextAlign]);

  const flightClassStyle = useMemo(() => {
    return {
      minWidth: propMinWidth6,
    };
  }, [propMinWidth6]);

  const providerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth7,
      display: propDisplay,
    };
  }, [propMinWidth7, propDisplay]);

  return (
    <div className="self-stretch rounded-md flex flex-col items-start justify-start py-2 px-[9px] gap-[10px] text-left text-xs text-lightslategray font-inter border-[1px] border-solid border-whitesmoke-200">
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="h-6 w-6 relative object-cover"
            loading="lazy"
            alt=""
            src={airlineLogo}
          />
          <div
            className="relative leading-[16px] inline-block min-w-[103px]"
            style={singaporeAirlines2Style}
          >
            {singaporeAirlines}
          </div>
        </div>
        <div
          className="relative text-base leading-[24px] font-semibold text-gray-200 text-right inline-block min-w-[47px] whitespace-nowrap"
          style={priceStyle}
        >
          {price}
        </div>
      </div>
      <div className="self-stretch rounded bg-whitesmoke-100 overflow-x-auto flex flex-row items-center justify-start p-2 gap-[7px] text-base text-cornflowerblue-200">
        <div
          className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[2px]"
          style={departure1Style}
        >
          <div
            className="relative font-semibold inline-block min-w-[27px]"
            style={depCodeStyle}
          >
            {depCode}
          </div>
          <div
            className="relative text-xs text-lightslategray inline-block min-w-[58px]"
            style={depNameStyle}
          >
            {depName}
          </div>
        </div>
        <img
          className="h-3 w-[47.8px] relative shrink-0"
          alt=""
          src="/flight-icon.svg"
        />
        <div className="flex flex-col items-end justify-start py-0 pr-0 pl-[9.6px] gap-[2px]">
          <div
            className="relative font-semibold inline-block min-w-[33px]"
            style={arrCodeStyle}
          >
            {arrCode}
          </div>
          <div
            className="relative text-xs text-lightslategray text-right inline-block min-w-[70px] whitespace-nowrap"
            style={arrNameStyle}
          >
            {arrName}
          </div>
        </div>
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-start gap-[20px]">
        <div className="flex flex-row items-start justify-start py-0 pr-[31.5px] pl-0 gap-[8px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/class-icon.svg"
          />
          <div
            className="relative leading-[16px] inline-block min-w-[53px]"
            style={flightClassStyle}
          >
            {flightClass}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[37.5px] pl-0 gap-[8px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/calender.svg"
          />
          <div className="relative leading-[16px] inline-block min-w-[47px]">
            {numPeople}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between pt-1.5 px-0 pb-0 gap-[20px] border-t-[1px] border-solid border-whitesmoke-200">
        <div
          className="relative leading-[16px] inline-block min-w-[109px]"
          style={providerStyle}
        >
          <span>{`Booked on `}</span>
          <span className="text-royalblue">{expedia}</span>
        </div>
        <div className="relative leading-[16px] font-semibold text-orange-100 inline-block min-w-[41px]">
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
