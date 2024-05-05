import { useMemo } from "react";

const InputGroup = ({ departure, singaporeSIN, propWidth, propMinWidth }) => {
  const labelContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const departureStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-[5px] box-border min-w-[266px] max-w-full text-left text-xs text-text-secondary font-components-button-large">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch rounded box-border flex flex-col items-start justify-start py-0 px-[11px] max-w-full border-[1px] border-solid border-other-outlined-border">
          <div
            className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-[3px] box-border"
            style={labelContainerStyle}
          >
            <div
              className="relative tracking-[0.15px] leading-[12px] inline-block min-w-[55px]"
              style={departureStyle}
            >
              {departure}
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 box-border gap-[8px] max-w-full text-center text-grey-grey-700">
            <div className="hidden flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[71px] rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                  <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                    <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                      F
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                    <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                      Chip
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/cancel-6.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[71px] rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                  <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                    <div className="h-6 flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                      F
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                    <div className="self-stretch h-[18px] relative tracking-[0.16px] leading-[18px] inline-block">
                      Chip
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/cancel-6.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-text-primary text-left inline-block max-w-full">
              {singaporeSIN}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
