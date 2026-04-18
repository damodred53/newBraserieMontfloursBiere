import styles from "./PresentationVisual.module.scss";
import verreBamImage from "../../../assets/images/verre-BAM.png";

type PresentationVisualProps = {
  className: string;
};

const PresentationVisual = ({className}: PresentationVisualProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>   
        <img className={styles.image} src={verreBamImage} alt="Presentation Visual" />
    </div>
  );
}

export default PresentationVisual;