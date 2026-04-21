import PhoneIcon from "../../assets/Icons/PhoneIcon.png";
import EmailIcon from "../../assets/Icons/MailIcon.png";
import Masque from "../../assets/Icons/Masque.png";
import styles from "./ContactBam.module.scss";
import { useState } from "react";

type ContactBamProps = {
    className?: string;
    isTelephoneNumber: boolean;
}

const ContactBam = ({ className, isTelephoneNumber }: ContactBamProps) => {

    const [isDisplayed, setIsDisplayed] = useState(false);

    const phoneDisplay = "06 12 34 56 78";
    const phoneHref = "+33612345678";
    const email = "brasserie.montflours@orange.fr";

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
                <a className={styles.link} href={`mailto:${email}`}>
                    <p className={styles.text}>{email}</p>
                </a>
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
                    {isDisplayed ? <img className={styles.logo} src={Masque} alt="masquer" /> : <p className={styles.text}>Cliquer pour voir</p>}
                </button>

                <div>
                    {isDisplayed && callOrEmail()}
                </div>
                
            </div>
        </div>
    )
}

export default ContactBam;