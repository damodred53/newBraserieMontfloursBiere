import styles from "./PresentationVisual.module.scss";
import verreBamImage from "../../../assets/images/verre-BAM.png";

const PresentationVisual = () => {
  return (
    <div className={styles.wrapper}>   
        <img className={styles.image} src={verreBamImage} alt="Presentation Visual" />
    </div>
  );
}

export default PresentationVisual;