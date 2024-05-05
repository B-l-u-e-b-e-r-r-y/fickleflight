import { useMemo } from "react";

const FlightCard1 = ({
  turkish,
  singaporeAirlines,
  aM,
  h55MNonStop,
  aM1,
  s730,
  propWidth,
  propPadding,
  propAlignSelf,
  propMinWidth,
  propWidth1,
  propAlignSelf1,
  propDisplay,
  propMinWidth1,
  propAlignSelf2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const airlineSectionStyle = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  const singaporeAirlinesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const aMStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
      alignSelf: propAlignSelf2,
    };
  }, [propDisplay, propMinWidth1, propAlignSelf2]);

  return (
    <div className="rounded-md bg-primary-contrast box-border flex flex-row items-start justify-start py-0 pr-1.5 pl-6 gap-[50px] max-w-full text-left text-base text-dimgray-200 font-components-button-large border-[0.7px] border-solid border-lightgray mq750:gap-[25px] mq1050:flex-wrap">
      <div
        className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0"
        style={frameDivStyle}
      >
        <div
          className="flex flex-row items-start justify-start gap-[7px]"
          style={airlineSectionStyle}
        >
          <img
            className="h-[46px] w-[34.8px] relative"
            loading="lazy"
            alt=""
            src={turkish}
          />
          <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
            <div
              className="relative tracking-[0.26px] inline-block min-w-[114px]"
              style={singaporeAirlinesStyle}
            >
              {singaporeAirlines}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200">
        <div className="flex flex-row items-start justify-start gap-[13.1px] mq450:flex-wrap">
          <div
            className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0"
            style={frameDiv1Style}
          >
            <div
              className="flex flex-col items-start justify-start gap-[8px]"
              style={frameDiv2Style}
            >
              <div
                className="relative tracking-[0.32px] font-medium inline-block min-w-[93px] whitespace-nowrap mq450:text-mid"
                style={aMStyle}
              >
                {aM}
              </div>
              <div className="w-[73.9px] relative text-base tracking-[0.26px] text-dimgray-100 inline-block">
                SIN
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-[20.9px] text-center text-base text-gray-100">
            <div className="flex flex-row items-start justify-end py-0 pr-[6.7px] pl-[7px]">
              <img
                className="h-[15.1px] w-[107.1px] relative shrink-0 [debug_commit:1de1738]"
                loading="lazy"
                alt=""
                src="/flighticon.svg"
              />
            </div>
            <div className="relative tracking-[0.21px] inline-block min-w-[121px] shrink-0 [debug_commit:1de1738] whitespace-nowrap">
              {h55MNonStop}
            </div>
          </div>
          <div className="w-[91px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-right">
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                {aM1}
              </div>
              <div className="w-[75.9px] flex flex-row items-start justify-end py-0 px-px box-border text-base text-dimgray-100">
                <div className="flex-1 relative tracking-[0.26px] shrink-0">
                  LAX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100px] w-32 relative text-center text-5xl text-orange-100">
        <img
          className="absolute top-[0px] left-[0px] w-px h-[100px]"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <b className="absolute top-[36px] left-[0px] tracking-[0.34px] inline-block w-32 whitespace-nowrap mq450:text-lgi">
          {s730}
        </b>
      </div>
    </div>
  );
};

export default FlightCard1;
