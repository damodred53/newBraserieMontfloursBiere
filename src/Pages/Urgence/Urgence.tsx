import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import ContactBam from "../../Components/ContactBam/ContactBam";
import styles from "./Urgence.module.scss";

const Urgence = () => {
  return (
    <div className={styles.wrapper}>   
        <TitleTextBloc className={styles.titleTextBloc} title="Une urgence BAM ?" text={<span>Vous pouvez retrouver nos produits dans les différents points de vente listés ci-dessous sur la carte. Nous vendons aussi en direct aux marchés de Montlfours (17h30 à 19h) et d'Argentré (17h à 19h30). Pour les commandes, n'hésitez pas à nous contacter. Une urgence BAM ? n'hésitez pas à nous contacter en cliquant par ici : <a href="mailto:brasserie.montflours@orange.fr">contactez-nous</a></span>} />
    
        <h2 className={styles.subtitle}>Nos differents points de vente</h2>

        <div className={styles.mapWrapper}>
            <iframe className={styles.googlemap_frame} src="https://www.google.com/maps/d/embed?mid=1k-waHdc2gotsPbR_OIoJx236mpdrtCs&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
            <div className={styles.contactWrapper}>
                <p className={styles.text}>ZA du Mottay Route de Sacé 53240 Montflours</p>
                <ContactBam isTelephoneNumber={true}/>
                <ContactBam isTelephoneNumber={false}/>
            </div>
        </div>
    </div>
    )
}


export default Urgence;