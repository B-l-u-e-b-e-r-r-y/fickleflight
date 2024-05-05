import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import TripMenus from "../components/TripMenus";
import FrameComponent1 from "../components/FrameComponent1";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStays from "../components/PopularStays";
import FrameComponent from "../components/FrameComponent";

const Homepage = () => {
  return (
    <div className="w-full relative bg-primary-contrast overflow-hidden flex flex-col items-start justify-start gap-[69px] tracking-[normal] leading-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a] mq725:gap-[34px] mq450:gap-[17px]">
      <FrameComponent3 />
      <section className="self-stretch flex flex-col items-start justify-start py-0 px-20 box-border gap-[80px] max-w-full text-left text-lg text-darkslategray-300 font-components-button-large mq725:gap-[40px] mq725:pl-10 mq725:pr-10 mq725:box-border mq450:gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Recent Searches
          </b>
          <FrameComponent2 />
          <TripMenus />
        </div>
        <FrameComponent1 />
        <div className="w-[231.4px] rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] whitespace-nowrap text-right text-cornflowerblue-300">
          <div className="h-[21px] flex-1 relative tracking-[0.04em] font-medium inline-block">
            View all destinations
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/arrowright.svg"
          />
        </div>
        <RecommendedHolidaysContainer />
        <PopularStays />
      </section>
      <FrameComponent />
    </div>
  );
};

export default Homepage;
