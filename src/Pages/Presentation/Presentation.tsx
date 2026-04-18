
import PresentationContent from "../../Components/PresentationComponents/PresentationContent/PresentationContent";
import PresentationVisual from "../../Components/PresentationComponents/PresentationVisual/PresentationVisual";
import CommonLayout from "../../Components/CommonComponents/CommonLayout/CommonLayout";
import BlocTitle from "../../Components/BlocTitle/BlocTitle";
import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import styles from "./Presentation.module.scss";
import TranslateButton from "../../Components/Buttons/TranslateButton/TranslateButton";
import { useState } from "react";
import ModalSelectLanguage from "../../Components/Modal/ModalSelectLanguage/ModalSelectLanguage";

const Presentation = () => {

  const [open, setOpen] = useState(false);

  type SiteLanguage = "fr" | "en" | "may";
  const STORAGE_KEY = "bam-language";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedLanguage, setSelectedLanguage] = useState<SiteLanguage>(localStorage.getItem(STORAGE_KEY) as SiteLanguage || "fr");
  

  return (
    <div>   
        <CommonLayout> 
          <PresentationContent className={styles.content} />
          <PresentationVisual className={styles.picture} />
        </CommonLayout>

        <CommonLayout className={styles.wrapper}> 
          <BlocTitle title="A votre service !!" className={styles.title} />

          <div className={styles.wrapper_presentation_services}>
            <TitleTextBloc title="Formation" className={styles.subTitle} text="Le meilleur moyen de comprendre la fabrication de la bière, c’est de la faire ! Nous proposons un atelier de brassage de bière en petit volume. Pendant cette journée dans nos locaux, vous brassez votre propre bière, repartez avec le fermenteur chez vous pour faire le suivi de fermentation et revenez pour le conditionnement 15 jours après. Formation le samedi de 10h à 16h30 sur réservation.Tarif 200€ pour 2 personnes + 35€/personne supplémentaire" />
            <TitleTextBloc title="Commande de fûts" className={styles.subTitle} text="Nous proposons des fûts en 20 et 30 L pour vos événements : blonde et ambrée toute l'année et autres bières sur commande. Prêt gratuit d'une tireuse et de gobelets, sous réservation. Reprise des fûts non-percutés." />
          </div>

        </CommonLayout>

        <div className={styles.translateButtonWrapper}>
          <TranslateButton className={styles.translateButton} onClick={handleOpen} />
        </div>
        
        <ModalSelectLanguage
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={(language: string) => setSelectedLanguage(language as SiteLanguage)}
        />
    </div>
  );
}

export default Presentation;