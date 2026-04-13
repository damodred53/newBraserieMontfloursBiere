
import BlocText from "../../BlocText/BlocText";
import styles from "./PresentationContent.module.scss";
import { useTranslation } from "react-i18next";

const PresentationContent = () => {

    const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>   
        <BlocText text={t("presentation.textBlock.bam.brasserie")} />
        <BlocText text={t("presentation.textBlock.bam.associative")} />
        <BlocText text={t("presentation.textBlock.bam.montflours")} />
        {/* <PresentationHeading />
        <BeerGrid /> */}
    </div>
  );
}   

export default PresentationContent;