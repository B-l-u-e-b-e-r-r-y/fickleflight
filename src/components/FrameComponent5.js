import { useMemo } from "react";

const FrameComponent5 = ({
  results,
  results1,
  results2,
  propWidth,
  propMinWidth,
  propDisplay,
  propMinWidth1,
}) => {
  const resultsStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const results1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div className="flex flex-col items-start justify-start gap-[24px] text-left text-3xl text-dimgray-200 font-components-button-large">
      <h3
        className="m-0 w-[189px] relative text-inherit tracking-[0.26px] font-bold font-inherit inline-block mq450:text-lg"
        style={resultsStyle}
      >
        {results}
      </h3>
      <div className="flex flex-col items-start justify-start gap-[16px] text-mid">
        <div className="flex flex-row items-start justify-start gap-[15px]">
          <div className="h-5 w-5 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-primary-contrast box-border border-[1px] border-solid border-darkgray-100" />
          </div>
          <div className="relative tracking-[0.26px]">{results1}</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[14px]">
          <div className="h-5 w-5 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-primary-contrast box-border border-[1px] border-solid border-darkgray-100" />
          </div>
          <div className="relative tracking-[0.26px]" style={results1Style}>
            {results2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
