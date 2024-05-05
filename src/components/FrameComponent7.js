import ResultsCard1 from "./ResultsCard1";
import ResultsCard from "./ResultsCard";

const FrameComponent7 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full text-left text-base text-gray-100 font-components-button-large lg:flex-wrap">
      <div className="w-[561.9px] flex flex-col items-start justify-start gap-[12px] min-w-[561.8999999999996px] max-w-full lg:flex-1 mq750:min-w-full">
        <ResultsCard1
          resultsImage="/results-image@2x.png"
          kingBedStandard="1 king bed standard"
          holidayInnExpre="Holiday Inn Expre..."
        />
        <ResultsCard
          resultsImage="/results-image-1@2x.png"
          bedInQuad="Bed in Quad"
          freehandLosAngeles="Freehand Los Angeles"
          prop="4.2"
          reviews="(1,941 reviews)"
          s198="$S 198"
        />
        <ResultsCard
          resultsImage="/results-image-2@2x.png"
          bedInQuad="1 King, City view"
          freehandLosAngeles="The Westin Bonavent..."
          prop="4.1"
          reviews="(1,002 reviews)"
          s198="$S 289"
          propMinWidth="unset"
          propWidth="28.2px"
        />
        <ResultsCard1
          resultsImage="/results-image-3@2x.png"
          kingBedStandard="Deluxe King"
          holidayInnExpre="The Ritz-Carlton, L..."
          propWidth="146.9px"
          propDisplay="inline-block"
          propWidth1="unset"
          propAlignSelf="unset"
        />
      </div>
      <div className="h-[918.3px] flex-1 relative overflow-hidden min-w-[452px] max-w-full mq750:min-w-full">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
          alt=""
          src="/map-1@2x.png"
        />
        <div className="absolute top-[81.6px] left-[114.7px] w-[412.4px] h-[502.2px] z-[2] flex items-center justify-center">
          <img
            className="w-full h-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.039)]"
            alt=""
            src="/dots-1.svg"
          />
        </div>
        <div className="absolute top-[826.4px] left-[640.3px] w-[37.3px] h-[73.6px] z-[2] flex items-center justify-center">
          <img
            className="w-full h-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.536)]"
            alt=""
            src="/zoom-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
