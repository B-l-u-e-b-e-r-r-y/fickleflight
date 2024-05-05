import { useMemo } from "react";

const TopHeader = ({
  searchColor,
  hotelsColor,
  onFickleflightLogoContainerClick,
  onExploreTextClick,
  onSearchTextClick,
  onHotelsTextClick,
}) => {
  const exploreStyle = useMemo(() => {
    return {
      color: searchColor,
    };
  }, [searchColor]);

  const searchStyle = useMemo(() => {
    return {
      color: hotelsColor,
    };
  }, [hotelsColor]);

  return (
    <header className="self-stretch bg-primary-contrast flex flex-row items-start justify-start py-[20.5px] px-20 box-border sticky top-[0] z-[99] max-w-full text-left text-sm text-darkslategray-200 font-components-button-large mq725:pl-10 mq725:pr-10 mq725:box-border">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
        <div className="w-[174px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
          <div className="self-stretch h-[33px] relative overflow-hidden shrink-0">
            <img
              className="absolute h-[96.97%] w-[99.83%] top-[1.52%] right-[0.17%] bottom-[1.52%] left-[0%] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/symbols.svg"
            />
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain hidden"
          alt=""
          src="/hamburgermenu@2x.png"
        />
        <div className="w-[368px] flex flex-row items-start justify-start gap-[30px] max-w-full mq725:hidden">
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-cornflowerblue-200">
            <div
              className="relative inline-block min-w-[47px]"
              style={exploreStyle}
              onClick={onExploreTextClick}
            >
              Explore
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div
              className="relative inline-block min-w-[43px] cursor-pointer"
              onClick={onSearchTextClick}
              style={searchStyle}
            >
              Search
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div
              className="relative inline-block min-w-[41px] cursor-pointer"
              onClick={onHotelsTextClick}
            >
              Hotels
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 pb-0 pr-1.5 pl-0">
            <div className="relative inline-block min-w-[39px]">Offers</div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/notification-bell@2x.png"
              />
            </div>
            <img
              className="h-9 w-9 rounded-19xl object-cover"
              loading="lazy"
              alt=""
              src="/profile-picture@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
