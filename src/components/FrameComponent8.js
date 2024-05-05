const FrameComponent8 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[50px] box-border max-w-full shrink-0 text-left text-23xl text-primary-contrast font-baloo-bhai">
      <div className="flex-1 [background:linear-gradient(100.3deg,_#0b5ba8,_#299bd8)] flex flex-row items-start justify-start pt-[50px] px-0 pb-[46px] box-border relative gap-[8px] max-w-full">
        <img
          className="h-full w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/banner-background@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-20 box-border gap-[8px] max-w-full z-[1] lg:pl-10 lg:box-border">
          <h1 className="m-0 w-[1280px] relative text-inherit tracking-[0.02em] leading-[48px] font-normal font-inherit inline-block max-w-full mq1050:text-15xl mq1050:leading-[38px] mq450:text-6xl mq450:leading-[29px]">
            Stays in Los Angeles
          </h1>
          <div className="flex flex-row items-start justify-start gap-[8px] max-w-full text-center text-base font-components-button-large mq450:flex-wrap">
            <div className="rounded-8xl bg-primary-contrast flex flex-row items-center justify-center py-[9px] px-[19px] text-cornflowerblue-200 border-[1px] border-solid border-primary-contrast">
              <div className="relative tracking-[0.04em] capitalize font-medium inline-block min-w-[116px]">
                Recommended
              </div>
            </div>
            <div className="w-[82px] rounded-8xl box-border flex flex-row items-center justify-center py-[9px] px-[19px] border-[1px] border-solid border-primary-contrast">
              <div className="relative tracking-[0.04em] capitalize font-medium inline-block min-w-[41px]">
                Price
              </div>
            </div>
            <div className="w-[92px] rounded-8xl box-border flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-primary-contrast">
              <div className="relative tracking-[0.04em] capitalize font-medium inline-block min-w-[50px]">
                Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
