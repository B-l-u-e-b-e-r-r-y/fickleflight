import FlightMainContainer from "./FlightMainContainer";

const FrameComponent2 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-5xl text-cornflowerblue-300 font-components-button-large">
      <div className="w-[1280px] flex flex-col items-start justify-start gap-[36px] max-w-full mq725:gap-[18px]">
        <FlightMainContainer
          sIN="SIN"
          lAX="LAX"
          departOn="Depart on: "
          sep2021="7 Sep 2021"
        />
        <div className="self-stretch relative text-lg tracking-[0.04em] uppercase text-lightgray">
          Prepare for your trip
        </div>
      </div>
      <FlightMainContainer
        sIN="MY"
        lAX="DUB"
        departOn="Depart on:"
        sep2021=" 9 Sep 2021"
        propWidth="unset"
        propFlex="1"
        propMarginLeft="-632.5px"
        propMinWidth="51.3px"
      />
    </div>
  );
};

export default FrameComponent2;
