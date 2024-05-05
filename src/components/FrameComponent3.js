import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import TopHeader from "./TopHeader";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-42xl text-primary-contrast font-baloo-bhai">
      <TopHeader
        onSearchTextClick={onSearchTextClick}
        onHotelsTextClick={onHotelsTextClick}
      />
      <div className="self-stretch [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] flex flex-row items-start justify-start relative max-w-full">
        <div className="self-stretch w-[1440px] relative [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] hidden max-w-full z-[0]" />
        <img
          className="h-full w-full absolute !m-[0] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden object-cover z-[1]"
          alt=""
          src="/banner--background@2x.png"
        />
        <div className="flex-1 flex flex-col items-center justify-start py-[167.5px] px-5 box-border gap-[43px] max-w-full z-[2] mq725:gap-[21px] mq725:pt-[109px] mq725:pb-[109px] mq725:box-border">
          <div className="w-[1160px] flex flex-col items-start justify-start gap-[5px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[67px] font-normal font-inherit mq1000:text-30xl mq1000:leading-[54px] mq450:text-18xl mq450:leading-[40px]">{`Let’s explore & travel the world`}</h1>
            <h3 className="m-0 self-stretch relative text-5xl text-white leading-[32px] font-normal font-components-button-large mq450:text-lgi mq450:leading-[26px]">
              Find the best destinations and the most popular stays!
            </h3>
          </div>
          <form className="m-0 w-[1160px] rounded-3xs bg-primary-contrast flex flex-col items-start justify-start pt-[25px] px-5 pb-5 box-border gap-[9px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[5px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border min-w-[577px] max-w-full mq725:min-w-full">
                  <b className="self-stretch relative text-xl tracking-[0.04em] uppercase font-components-button-large text-darkslategray-300 text-left mq450:text-base">
                    Search flights
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[20px]">
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-[38px] w-[38px] rounded-lgi flex flex-row items-center justify-start p-[9px] box-border">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/radiobuttonunchecked.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="relative text-base tracking-[0.15px] leading-[150%] font-components-button-large text-darkslategray-400 text-left inline-block min-w-[48px]">
                        Return
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-[38px] w-[38px] rounded-lgi flex flex-row items-center justify-start p-[9px] box-border">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/radiobuttonchecked.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="relative text-base tracking-[0.15px] leading-[150%] font-components-button-large text-darkslategray-400 text-left inline-block min-w-[72.5px]">
                        One-way
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] mq1000:flex-col">
              <div className="flex-1 flex flex-row items-start justify-start p-[5px] box-border gap-[10px] min-w-[615px] max-w-full mq725:min-w-full mq1000:flex-wrap mq1000:flex-[unset] mq1000:self-stretch">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                  <Input
                    className="bg-[transparent] self-stretch h-14 font-components-button-large text-base text-text-primary min-w-[183px] mq1000:min-w-full"
                    id="departure"
                    size="middle"
                    placeholder="Departure"
                    bordered={true}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[229px]">
                  <Input
                    className="bg-[transparent] self-stretch h-14 font-components-button-large text-base text-text-primary min-w-[183px] mq1000:min-w-full"
                    id="arrival"
                    size="middle"
                    placeholder="Arrival"
                    bordered={true}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start border border-solid border-[#d9d9d9] min-w-[229px] duration-300 hover:border-[#40a9ff]">
                  <DatePicker
                    className="self-stretch h-14 text-base"
                    id="date"
                    size="middle"
                    placeholder="Date"
                    allowClear={false}
                    bordered={false}
                  />
                </div>
              </div>
              <div className="w-[174px] flex flex-col items-center justify-center p-[5px] box-border mq1000:self-stretch mq1000:w-auto">
                <button
                  className="cursor-pointer [border:none] py-[15px] px-[8.5px] bg-orange-200 self-stretch rounded overflow-hidden flex flex-col items-center justify-center whitespace-nowrap hover:bg-chocolate mq1000:text-center mq1000:self-stretch mq1000:w-auto mq1000:min-w-[164]"
                  id="SEARCH FLIGHTS"
                  onClick={onSearchFlightsButtonClick}
                >
                  <div className="self-stretch relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-center">
                    Search flights
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
