import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import NewsletterFormSection from "../components/NewsletterFormSection";
import Footer from "../components/Footer";

const ResultsPage = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-primary-contrast overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <TopHeader
        searchColor="#424242"
        hotelsColor="#1262af"
        onFickleflightLogoContainerClick={onFickleflightLogoContainerClick}
        onExploreTextClick={onExploreTextClick}
        onHotelsTextClick={onHotelsTextClick}
      />
      <FrameComponent6 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[50px] box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:pb-[21px] mq750:box-border mq1050:pb-8 mq1050:box-border">
        <FrameComponent4 />
      </section>
      <NewsletterFormSection
        newsletterSectionBackgrou="/newsletter-section-background@2x.png"
        arrowDropDown="pending_I1016:12773;6626:50985"
        arrowDropDown1="pending_I1016:12781;6626:50985"
      />
      <Footer
        propDebugCommit="unset"
        propPadding="unset"
        propPadding1="unset"
        propPadding2="unset"
      />
    </div>
  );
};

export default ResultsPage;
