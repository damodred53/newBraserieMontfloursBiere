import PhoneIcon from "../../assets/Icons/PhoneIcon.png";
import EmailIcon from "../../assets/Icons/MailIcon.png";
import Masque from "../../assets/Icons/Masque.png";
import styles from "./ContactBam.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type ContactBamProps = {
    className?: string;
    isTelephoneNumber: boolean;
}

const ContactBam = ({ className, isTelephoneNumber }: ContactBamProps) => {

    const {t} = useTranslation();

    const [isDisplayed, setIsDisplayed] = useState(false);

    const phoneDisplay = "06 01 05 34 56";
    const phoneHref = "+33601053456";
    const commandeEmail = "commande@brasserie-montflours.fr";
    const questionEmail = "contact@brasserie-montflours.fr";

    const handleDisplayData = () => {
        setIsDisplayed(!isDisplayed);
    }

    const callOrEmail = () => {
        return (
            isTelephoneNumber ? 
                <a className={styles.link} href={`tel:${phoneHref}`} aria-label={`Appeler le ${phoneDisplay}`}>
                    <p className={styles.text}>{phoneDisplay}</p>
                </a> 
                : 
                <div className={styles.emailList}>
                <a className={styles.link} href={`mailto:${commandeEmail}`}>
                    <p className={styles.text}>{t("urgence.contact.commande")} <br/>{commandeEmail}</p>
                </a>
                <a className={styles.link} href={`mailto:${questionEmail}`}>
                    <p className={styles.text}>{t("urgence.contact.question")} <br/>{questionEmail}</p>
                </a>
                </div>
            )
    }

    return (
        <div className={`${styles.contactBam} ${className}`} >

            {!isDisplayed && (
                isTelephoneNumber ?
                <img className={styles.logo} src={PhoneIcon} alt="phone" /> 
                :
                <img className={styles.logo} src={EmailIcon} alt="email" />
            )}
            
            <div className={styles.content}>

                <button className={styles.toggle} type="button" onClick={handleDisplayData}>
                    {isDisplayed ? <img className={styles.logo} src={Masque} alt="masquer" /> : <p className={styles.text}>{t("urgence.clickToSee")}</p>}
                </button>

                <div>
                    {isDisplayed && callOrEmail()}
                </div>
                
            </div>
        </div>
    )
}

export default ContactBam;