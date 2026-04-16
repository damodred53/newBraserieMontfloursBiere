
import PresentationContent from "../../Components/PresentationComponents/PresentationContent/PresentationContent";
import PresentationVisual from "../../Components/PresentationComponents/PresentationVisual/PresentationVisual";
import CommonLayout from "../../Components/CommonComponents/CommonLayout/CommonLayout";
import BlocTitle from "../../Components/BlocTitle/BlocTitle";
import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import styles from "./Presentation.module.scss";

const Presentation = () => {

  return (
    <div>   
        <CommonLayout> 
          <PresentationContent />
          <PresentationVisual />
        </CommonLayout>

        <CommonLayout className={styles.wrapper}> 
          <BlocTitle title="A votre service !!" className={styles.title} />

          <div className={styles.wrapper_presentation_services}>
            <TitleTextBloc title="Formation" className={styles.subTitle} text="Le meilleur moyen de comprendre la fabrication de la bière, c’est de la faire ! Nous proposons un atelier de brassage de bière en petit volume. Pendant cette journée dans nos locaux, vous brassez votre propre bière, repartez avec le fermenteur chez vous pour faire le suivi de fermentation et revenez pour le conditionnement 15 jours après. Formation le samedi de 10h à 16h30 sur réservation.Tarif 200€ pour 2 personnes + 35€/personne supplémentaire" />
            <TitleTextBloc title="Commande de fûts" className={styles.subTitle} text="Nous proposons des fûts en 20 et 30 L pour vos événements : blonde et ambrée toute l'année et autres bières sur commande. Prêt gratuit d'une tireuse et de gobelets, sous réservation. Reprise des fûts non-percutés." />
          </div>
        </CommonLayout>
  
    </div>
  );
}

export default Presentation;