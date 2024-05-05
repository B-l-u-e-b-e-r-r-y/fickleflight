const FrameComponent1 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-lg text-cornflowerblue-300 font-components-button-large">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <b className="w-[1048.6px] relative tracking-[0.04em] uppercase inline-block max-w-full">
          Plan your next trip
        </b>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] mt-[-2px] text-11xl text-darkslategray-300">
          <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[682px] max-w-full mq1000:min-w-full">
            <h2 className="m-0 self-stretch relative text-inherit tracking-[0.04em] capitalize font-bold font-inherit mq1000:text-5xl mq450:text-lg">
              Most Popular Destinations
            </h2>
          </div>
          <div className="w-[231.4px] rounded-12xl bg-primary-contrast flex flex-row items-start justify-start gap-[10px] whitespace-nowrap text-right text-lg text-cornflowerblue-300">
            <div className="flex-1 relative tracking-[0.04em] font-medium">
              View all destinations
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start grid-cols-[repeat(4,_minmax(240px,_1fr))] text-xl text-primary-contrast mq725:grid-cols-[minmax(240px,_1fr)] mq1050:[grid-row-gap:20px] mq1050:grid-cols-[repeat(2,_minmax(240px,_416px))] mq1050:justify-center">
        <div className="flex flex-row items-start justify-start py-0 px-4">
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-end justify-start pt-2 px-[12.3px] pb-[115px] relative">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/parisimage@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start gap-[38.4px] mq450:flex-wrap mq450:gap-[19px]">
              <b className="flex-1 relative tracking-[0.02em] inline-block min-w-[37px] z-[1] mq450:text-base">
                Paris
              </b>
              <div className="w-[52.5px] relative text-base tracking-[0.04em] uppercase text-right inline-block shrink-0 z-[1]">
                from
              </div>
            </div>
            <div className="w-[90.9px] h-9 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-right text-19xl font-baloo-bhai">
              <div className="mt-[-2px] flex-1 relative leading-[38px] inline-block min-w-[90.9px] whitespace-nowrap shrink-0 z-[1] mq1000:text-11xl mq1000:leading-[30px] mq450:text-4xl mq450:leading-[23px]">
                $699
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-4">
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-end justify-start pt-2 px-[12.3px] pb-[115px] relative">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/greeceimage@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <b className="w-[163.5px] relative tracking-[0.02em] inline-block z-[1] mq450:text-base">
                Greece
              </b>
              <div className="w-[52.5px] relative text-base tracking-[0.04em] uppercase text-right inline-block shrink-0 z-[1]">
                from
              </div>
            </div>
            <div className="h-9 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-right text-19xl font-baloo-bhai">
              <div className="mt-[-2px] relative leading-[38px] inline-block min-w-[99px] whitespace-nowrap z-[1] mq1000:text-11xl mq1000:leading-[30px] mq450:text-4xl mq450:leading-[23px]">
                $1079
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-4">
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-end justify-start pt-2 px-[12.3px] pb-[115px] relative">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/norwayimage@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start gap-[38.4px] mq450:flex-wrap mq450:gap-[19px]">
              <b className="flex-1 relative tracking-[0.02em] inline-block min-w-[55px] z-[1] mq450:text-base">
                Norway
              </b>
              <div className="w-[52.5px] relative text-base tracking-[0.04em] uppercase text-right inline-block shrink-0 z-[1]">
                from
              </div>
            </div>
            <div className="w-[90.9px] h-9 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-right text-19xl font-baloo-bhai">
              <div className="mt-[-2px] flex-1 relative leading-[38px] inline-block min-w-[90.9px] whitespace-nowrap shrink-0 z-[1] mq1000:text-11xl mq1000:leading-[30px] mq450:text-4xl mq450:leading-[23px]">
                $895
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-4">
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-end justify-start pt-2 px-[12.3px] pb-[115px] relative">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/tuscanyimage@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <b className="w-[162.8px] relative tracking-[0.02em] inline-block z-[1] mq450:text-base">
                Tuscany
              </b>
              <div className="w-[52.5px] relative text-base tracking-[0.04em] uppercase text-right inline-block shrink-0 z-[1]">
                from
              </div>
            </div>
            <div className="w-[100.6px] h-9 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-right text-19xl font-baloo-bhai">
              <div className="mt-[-2px] flex-1 relative leading-[38px] inline-block min-w-[100.6px] whitespace-nowrap z-[1] mq1000:text-11xl mq1000:leading-[30px] mq450:text-4xl mq450:leading-[23px]">
                $1245
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
