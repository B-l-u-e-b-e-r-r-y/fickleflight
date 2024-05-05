import { useMemo } from "react";

const FlightCard = ({
  sIA,
  singaporeAirlines,
  aM,
  h55MNonStop,
  aM1,
  s730,
  propRight,
  propGap,
  propMinWidth,
}) => {
  const singaporeAirlines1Style = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const flightDetailsSectionStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const h55MNonStopStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="rounded-md bg-primary-contrast box-border flex flex-row items-start justify-start py-0 pr-1.5 pl-6 gap-[50px] max-w-full text-left text-base text-dimgray-200 font-components-button-large border-[0.7px] border-solid border-lightgray mq750:gap-[25px] mq1050:flex-wrap">
      <div className="w-[155.8px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[7px]">
          <img
            className="h-[46px] w-[34.8px] relative"
            loading="lazy"
            alt=""
            src={sIA}
          />
          <div
            className="absolute !m-[0] top-[calc(50%_-_9.5px)] right-[-20px] tracking-[0.26px]"
            style={singaporeAirlines1Style}
          >
            {singaporeAirlines}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200">
        <div
          className="flex flex-row items-start justify-start gap-[9.1px] mq450:flex-wrap"
          style={flightDetailsSectionStyle}
        >
          <div className="w-[93px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                {aM}
              </div>
              <div className="w-[73.9px] relative text-base tracking-[0.26px] text-dimgray-100 inline-block">
                SIN
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-[20.9px] text-center text-base text-gray-100">
            <div className="flex flex-row items-start justify-end py-0 pr-[10.7px] pl-[11px]">
              <img
                className="h-[15.1px] w-[107.1px] relative shrink-0 [debug_commit:1de1738]"
                alt=""
                src="/flighticon.svg"
              />
            </div>
            <div
              className="relative tracking-[0.21px] inline-block min-w-[129px] shrink-0 [debug_commit:1de1738] whitespace-nowrap"
              style={h55MNonStopStyle}
            >
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

export default FlightCard;
