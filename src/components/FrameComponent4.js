import FrameComponent5 from "./FrameComponent5";
import FlightCard1 from "./FlightCard1";
import FlightCard from "./FlightCard";
import BookingCard from "./BookingCard";

const FrameComponent4 = () => {
  return (
    <div className="flex-1 flex flex-row items-start justify-start max-w-full text-left text-base text-dimgray-200 font-components-button-large">
      <div className="w-[310.8px] flex flex-col items-start justify-start gap-[38.6px] shrink-0 [debug_commit:1de1738] text-3xl lg:hidden mq450:gap-[19px]">
        <div className="w-[228px] flex flex-col items-start justify-start gap-[24px] text-xl">
          <div className="w-[219.4px] relative tracking-[0.26px] inline-block mq450:text-base">
            10 out of 177 Results
          </div>
          <img
            className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/vector-21.svg"
          />
        </div>
        <div className="w-[296.6px] flex flex-col items-start justify-start gap-[24px]">
          <h3 className="m-0 relative text-inherit tracking-[0.26px] font-bold font-inherit inline-block min-w-[65.3px] mq450:text-lg">
            Stops
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-mid">
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <div className="h-5 w-5 relative">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-primary-contrast box-border border-[1px] border-solid border-darkgray-100" />
              </div>
              <div className="relative tracking-[0.26px] inline-block min-w-[51px]">
                1 Stop
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
              <div className="h-5 w-5 relative">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-primary-contrast box-border border-[1px] border-solid border-darkgray-100" />
              </div>
              <div className="flex-1 relative tracking-[0.26px] inline-block min-w-[46px]">
                2 Stops
              </div>
            </div>
          </div>
        </div>
        <FrameComponent5
          results="Booking Options"
          results1="Book on Fickleflight"
          results2="Official Airline Websites"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h3 className="m-0 w-[198px] relative text-inherit tracking-[0.26px] font-bold font-inherit inline-block mq450:text-lg">
            Flight Experience
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-mid">
            <div className="w-[302.5px] flex flex-row items-start justify-start gap-[16px]">
              <div className="h-5 w-5 relative">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-primary-contrast box-border border-[1px] border-solid border-darkgray-100" />
              </div>
              <div className="flex-1 relative tracking-[0.26px]">
                No overnight flights
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
              <div className="h-5 w-5 relative">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-primary-contrast box-border border-[1px] border-solid border-darkgray-100" />
              </div>
              <div className="flex-1 relative tracking-[0.26px] inline-block min-w-[116px]">
                No long stop-overs
              </div>
            </div>
          </div>
        </div>
        <img className="w-[228px] h-px relative" alt="" src="/vector-21.svg" />
        <FrameComponent5
          results="Airlines"
          results1="Singapore Airlines"
          results2="Qatar Airways"
          propWidth="unset"
          propMinWidth="87.8px"
          propDisplay="inline-block"
          propMinWidth1="109px"
        />
      </div>
      <div className="flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border max-w-[calc(100%_-_568px)] lg:max-w-full">
        <div className="flex flex-col items-start justify-start gap-[12px] shrink-0 [debug_commit:1de1738] max-w-full z-[1]">
          <div className="relative text-lg tracking-[0.26px] text-lightslategray">
            10 out of 177 Results
          </div>
          <FlightCard1
            turkish="/turkish.svg"
            singaporeAirlines="Turkish Airlines"
            aM="11:35 PM"
            h55MNonStop="33H 10M, 1-stop"
            aM1="4:45 PM"
            s730="S$ 723"
          />
          <FlightCard
            sIA="/sia.svg"
            singaporeAirlines="Singapore Airlines"
            aM="8:45 PM"
            h55MNonStop="15H 10M, 2-stops"
            aM1="7:55 PM"
            s730="S$ 900"
          />
          <FlightCard1
            turkish="/japan.svg"
            singaporeAirlines="Japan Airlines"
            aM="8:20 PM"
            h55MNonStop="17H 30M, 1-stop"
            aM1="9:50 PM"
            s730="S$ 859"
            propWidth="unset"
            propPadding="0px 9px 0px 0px"
            propAlignSelf="unset"
            propMinWidth="105px"
            propWidth1="93px"
            propAlignSelf1="stretch"
            propDisplay="unset"
            propMinWidth1="unset"
            propAlignSelf2="stretch"
          />
          <FlightCard1
            turkish="/ana.svg"
            singaporeAirlines="ANA"
            aM="6:35 PM"
            h55MNonStop="19H 15M, 1-stop"
            aM1="9:50 PM"
            s730="S$ 936"
            propWidth="155.8px"
            propPadding="unset"
            propAlignSelf="stretch"
            propMinWidth="34px"
            propWidth1="93px"
            propAlignSelf1="stretch"
            propDisplay="unset"
            propMinWidth1="unset"
            propAlignSelf2="stretch"
          />
          <FlightCard
            sIA="/americanairlines.svg"
            singaporeAirlines="American Airlines"
            aM="8:20 PM"
            h55MNonStop="17H 30M, 1-stop"
            aM1="9:50 PM"
            s730="S$ 936"
            propRight="-16px"
            propGap="13.1px"
            propMinWidth="121px"
          />
          <FlightCard1
            turkish="/turkish.svg"
            singaporeAirlines="Turkish Airlines"
            aM="11:35 PM"
            h55MNonStop="33H 10M, 1-stop"
            aM1="4:45 PM"
            s730="S$ 673"
            propWidth="unset"
            propPadding="unset"
            propAlignSelf="unset"
            propMinWidth="114px"
            propWidth1="unset"
            propAlignSelf1="unset"
            propDisplay="inline-block"
            propMinWidth1="93px"
            propAlignSelf2="unset"
          />
          <div className="rounded-md bg-primary-contrast box-border flex flex-row items-start justify-start py-0 pr-1.5 pl-6 gap-[50px] max-w-full border-[0.7px] border-solid border-lightgray mq750:gap-[25px] mq1050:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0">
              <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-0 gap-[7px]">
                <img
                  className="h-[46px] w-[34.8px] relative"
                  alt=""
                  src="/japan.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
                  <div className="relative tracking-[0.26px] inline-block min-w-[105px]">
                    Japan Airlines
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[331.2px] flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200">
              <div className="self-stretch flex flex-row items-start justify-start gap-[13.1px] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative tracking-[0.32px] font-medium inline-block min-w-[93px] whitespace-nowrap mq450:text-mid">
                      10:25 PM
                    </div>
                    <div className="w-[73.9px] relative text-base tracking-[0.26px] text-dimgray-100 inline-block">
                      SIN
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-end justify-start gap-[8px] min-w-[146px] text-right">
                  <div className="flex flex-row items-start justify-start gap-[19.8px]">
                    <img
                      className="h-[15.1px] w-[107.1px] relative"
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className="w-[91px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                      <div className="self-stretch relative tracking-[0.32px] font-medium whitespace-nowrap mq450:text-mid">
                        9:10 AM
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 text-center text-base text-gray-100">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[29.2px]">
                      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                        <div className="relative tracking-[0.21px] inline-block min-w-[121px] shrink-0 [debug_commit:1de1738] whitespace-nowrap">
                          26H 45M, 1-stop
                        </div>
                      </div>
                      <div className="w-[73.9px] relative tracking-[0.26px] text-dimgray-100 text-right inline-block shrink-0 [debug_commit:1de1738]">
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
                S$ 859
              </b>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-[25.5px] px-[28.5px] pb-[24.5px] relative whitespace-nowrap text-center text-lg text-primary-contrast">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-md bg-cornflowerblue-200" />
            <div className="relative tracking-[0.04em] font-medium z-[1]">
              Show more results
            </div>
          </div>
        </div>
      </div>
      <div className="w-[257px] rounded-md bg-primary-contrast flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-[18px] shrink-0 [debug_commit:1de1738] text-cornflowerblue-300 lg:hidden">
        <div className="self-stretch h-[33px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[14px]">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Recently booked
          </b>
          <img
            className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/vector-2-1.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-xs text-lightslategray font-inter">
          <BookingCard
            airlineLogo="/airlinelogo@2x.png"
            singaporeAirlines="Singapore Airlines"
            price="$1128"
            depCode="SIN"
            depName="Singapore"
            arrCode="LAX"
            arrName="Los Angeles"
            flightClass="Economy"
            numPeople="2 Adults"
            expedia="Expedia"
            timeAgo="1s ago!"
          />
          <BookingCard
            airlineLogo="/icon@2x.png"
            singaporeAirlines="American Airlines"
            price="$1024"
            depCode="SFO"
            depName="San Francisco"
            arrCode="SIN"
            arrName="Singapore"
            flightClass="First Class"
            numPeople="1 Adults"
            expedia="Kayak"
            timeAgo="2s ago!"
            propMinWidth="99px"
            propMinWidth1="50px"
            propFlex="unset"
            propMinWidth2="33px"
            propMinWidth3="80px"
            propMinWidth4="27px"
            propMinWidth5="58px"
            propTextAlign="right"
            propMinWidth6="60px"
            propMinWidth7="98px"
            propDisplay="inline-block"
          />
          <BookingCard
            airlineLogo="/icon-1@2x.png"
            singaporeAirlines="Japan Airlines"
            price="$2996"
            depCode="PHX"
            depName="Phoenix"
            arrCode="DXB"
            arrName="Dubai"
            flightClass="Economy"
            numPeople="3 Adults"
            expedia="Skyscanner"
            timeAgo="3s ago!"
            propMinWidth="80px"
            propMinWidth1="52px"
            propFlex="1"
            propMinWidth2="34px"
            propMinWidth3="46px"
            propMinWidth4="33px"
            propMinWidth5="33px"
            propTextAlign="left"
            propMinWidth6="53px"
            propMinWidth7="unset"
            propDisplay="unset"
          />
          <div className="self-stretch rounded-10xs bg-cornflowerblue-500 flex flex-row items-center justify-center py-[7px] px-5 gap-[4px] whitespace-nowrap text-cornflowerblue-200">
            <div className="relative leading-[16px] inline-block min-w-[64px]">
              Show more
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 object-contain min-h-[16px]"
              alt=""
              src="/icon--back@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
