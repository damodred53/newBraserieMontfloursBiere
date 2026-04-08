import ButtonBrown from "../../Components/Buttons/ButtonsBrown/ButtonBrown";
import "./LandingPage.scss"

const LandingPage = () => {
  const landingImageSrc = `${import.meta.env.BASE_URL}assets/images/POST_detoure.png`;

  return (
    <div className="landingPage">
      <div className="landingPage__stage">
        <img className="landingPage__image" src={landingImageSrc} alt="Landing Page" />
        <ButtonBrown
          className="landingPage__button landingPage__button--intro"
          content="La BAM en quelques mots"
          size="medium"
        />
        <ButtonBrown
          className="landingPage__button landingPage__button--urgent"
          content="Une urgence BAM ?"
          size="medium"
        />
        <ButtonBrown
          className="landingPage__button landingPage__button--details"
          content="La BAM en plus de mots"
          size="medium"
        />
      </div>
    </div>
  );
}

export default LandingPage;