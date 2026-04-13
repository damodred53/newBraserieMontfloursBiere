
import PresentationContent from "../../Components/PresentationComponents/PresentationContent/PresentationContent";
import PresentationSection from "../../Components/PresentationComponents/PresentationSection/PresentationSection";
import PresentationVisual from "../../Components/PresentationComponents/PresentationVisual/PresentationVisual";
// import PresentationContent from "../../Components/PresentationContent/PresentationContent";
// import PresentationIntro from "../../Components/PresentationIntro/PresentationIntro";
// import PresentationHeading from "../../Components/PresentationHeading/PresentationHeading";
// import BeerGrid from "../../Components/BeerGrid/BeerGrid";
// import PresentationVisual from "../../Components/PresentationVisual/PresentationVisual";

const Presentation = () => {
  return (
    <div>   
        <PresentationSection> 
          <PresentationContent />
          <PresentationVisual />
        </PresentationSection>
    </div>
  );
}

export default Presentation;