import InputGroup from "./InputGroup";

const FrameComponent6 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full text-left text-42xl text-primary-contrast font-baloo-bhai mq450:pb-8 mq450:box-border">
      <div className="flex-1 [background:linear-gradient(100.3deg,_#114f8b,_#2a9bd7)] flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] flex flex-row items-start justify-start py-[84.5px] px-0 box-border relative max-w-full mq450:pt-[55px] mq450:pb-[55px] mq450:box-border">
          <div className="h-[362px] w-[1440px] relative [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] hidden max-w-full z-[0]" />
          <img
            className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden object-cover z-[1]"
            alt=""
            src="/banner-background@2x.png"
          />
          <div className="flex-1 flex flex-col items-center justify-center py-0 px-20 box-border gap-[20px] max-w-full z-[2] mq750:pl-10 mq750:pr-10 mq750:box-border">
            <div className="self-stretch flex flex-col items-center justify-start">
              <h1 className="m-0 self-stretch relative text-inherit leading-[67px] font-normal font-inherit mq1050:text-30xl mq1050:leading-[54px] mq450:text-18xl mq450:leading-[40px]">
                Where are you off too?
              </h1>
            </div>
            <form className="m-0 self-stretch rounded-3xs bg-primary-contrast flex flex-row flex-wrap items-start justify-start p-5 box-border max-w-full [row-gap:20px]">
              <div className="flex-1 flex flex-row items-start justify-start min-w-[693px] max-w-full [row-gap:20px] mq1050:flex-wrap mq1050:min-w-full">
                <InputGroup
                  departure="Departure"
                  singaporeSIN="Singapore (SIN)"
                />
                <InputGroup
                  departure="Arrival"
                  singaporeSIN="Los Angeles (LA)"
                  propWidth="43px"
                  propMinWidth="36px"
                />
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] box-border min-w-[266px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-[11px] border-[1px] border-solid border-other-outlined-border">
                      <div className="h-0.5 bg-primary-contrast flex flex-row items-center justify-start py-0 px-1 box-border">
                        <div className="relative text-xs tracking-[0.15px] leading-[12px] font-components-button-large text-text-secondary text-left inline-block min-w-[26px]">
                          Date
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-[8px]">
                        <div className="hidden flex-row items-start justify-start gap-[8px]">
                          <div className="flex flex-col items-start justify-start">
                            <div className="w-[71px] rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1 box-border">
                              <div className="w-6 rounded-45xl bg-grey-grey-400 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                <div className="h-6 flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                                  F
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                                <div className="self-stretch h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left inline-block">
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
                                <div className="h-6 flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-button-large text-grey-grey-700 text-center flex items-center justify-center">
                                  F
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start py-[3px] px-1.5">
                                <div className="self-stretch h-[18px] relative text-smi tracking-[0.16px] leading-[18px] font-components-button-large text-text-primary text-left inline-block">
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
                        <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] font-components-button-large text-text-primary text-left">
                          01/05/2022
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/date.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[174px] flex flex-col items-center justify-center p-[5px] box-border">
                <div className="self-stretch rounded bg-orange-200 overflow-hidden flex flex-col items-center justify-center py-[15px] px-[8.5px] whitespace-nowrap hover:bg-darkorange">
                  <div className="self-stretch relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-center">
                    Search flights
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
