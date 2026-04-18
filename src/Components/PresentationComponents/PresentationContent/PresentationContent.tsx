
import BlocText from "../../BlocText/BlocText";
import styles from "./PresentationContent.module.scss";
import { useTranslation } from "react-i18next";
import BlocTitle from "../../BlocTitle/BlocTitle";
import BeerGrid from "../BeerGrid/BeerGrid";

type PresentationContentProps = {
  className: string;
};

const PresentationContent = ({ className }: PresentationContentProps) => {

    const { t } = useTranslation();

  return (
    <div className={`${styles.wrapper} ${className}`}>   
        <BlocText text={t(["presentation.textBlock.bam.brasserie"])} />
        <BlocText text={t("presentation.textBlock.bam.associative")} />
        <BlocText text={t("presentation.textBlock.bam.montflours")} />
        <BlocTitle title={t("presentation.title")} subTitle={t("presentation.subTitle")} />
        <BeerGrid />
    </div>
  );
}   

export default PresentationContent;