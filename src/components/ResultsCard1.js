import { useMemo } from "react";

const ResultsCard1 = ({
  resultsImage,
  kingBedStandard,
  holidayInnExpre,
  propWidth,
  propDisplay,
  propWidth1,
  propAlignSelf,
}) => {
  const kingBedStandardStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  const hotelNameStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const holidayInnExpreStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-end justify-start pt-0 pb-[0.6px] pr-3 pl-0 gap-[16px] text-left text-base text-gray-100 font-components-button-large mq750:flex-wrap mq750:pl-3 mq750:pt-px mq750:box-border">
      <img
        className="h-[220px] w-[260px] relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs object-cover mq750:flex-1"
        loading="lazy"
        alt=""
        src={resultsImage}
      />
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[14.4px] box-border min-w-[178px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[31px] mq450:gap-[15px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div
                className="relative tracking-[0.02em] shrink-0 [debug_commit:1de1738]"
                style={kingBedStandardStyle}
              >
                {kingBedStandard}
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 [debug_commit:1de1738]"
                loading="lazy"
                alt=""
                src="/video1.svg"
              />
            </div>
            <div
              className="w-[232.9px] flex flex-col items-start justify-start gap-[6px] text-3xl text-darkslategray-300"
              style={hotelNameStyle}
            >
              <h3
                className="m-0 self-stretch relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit mq450:text-lg"
                style={holidayInnExpreStyle}
              >
                {holidayInnExpre}
              </h3>
              <div className="flex flex-row items-start justify-start gap-[7.5px] text-base">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="relative tracking-[0.04em] font-medium inline-block min-w-[25px]">
                  4.7
                </div>
                <div className="relative tracking-[0.04em] text-cornflowerblue-200 inline-block min-w-[118px]">
                  (1,136 reviews)
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[10.6px] text-3xl text-darkslategray-300">
            <div className="flex flex-row items-start justify-start">
              <b className="relative tracking-[0.02em] capitalize inline-block min-w-[73px] mq450:text-lg">
                $S 286
              </b>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-sm">
                <div className="relative tracking-[0.02em] inline-block min-w-[39px]">
                  /night
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-[12.5px] px-[27.5px] pb-[11.5px] relative whitespace-nowrap text-center text-lg text-primary-contrast">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-md bg-cornflowerblue-200" />
              <div className="relative tracking-[0.04em] font-medium inline-block min-w-[109px] z-[1]">
                View Details
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard1;
