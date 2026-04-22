import { useTranslation } from "react-i18next";
import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import styles from "./MentionLegale.module.scss";

const MentionLegale = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.mentions}>
            <TitleTextBloc
                className={styles.mentionsSection}
                title={t("mentionLegale.title")}
                text={
                    <>
                        <p>
                            {t("mentionLegale.text")}
                        </p>
                        <p>
                            {t("mentionLegale.address")}
                        </p>
                    </>
                }
            />

            <TitleTextBloc
                className={styles.mentionsSection}
                title={t("mentionLegale.directorTitle")}
                text={t("mentionLegale.directorText")}
            />

            <TitleTextBloc
                className={styles.mentionsSection}
                title={t("mentionLegale.hostingTitle")}
                text={
                    <>
                        <p>OVH</p>
                        <p>
                            2 rue Kellermann
                            <br />
                            59100 ROUBAIX
                            <br />
                            France
                            <br />
                            Tél. : 0 899 498 765
                        </p>
                    </>
                }
            />

            <TitleTextBloc
                className={styles.mentionsSection}
                title={t("mentionLegale.realisationTitle")}
                text={
                    <>
                        <p>{t("mentionLegale.realisationText")}</p>
                        <ul>
                            <li>Cédric Soufflet</li>
                            <li>Marine Levêque</li>
                            <li>Gilles Charpentier</li>
                            <li>Florent Guyard</li>
                            <li>Un grand merci pour la traduction en mayennais à Brice Mauny</li>
                        </ul>
                    </>
                }
            />

            <TitleTextBloc
                className={styles.mentionsSection}
                title={t("mentionLegale.copyrightTitle")}
                text={
                    <>
                        <p>
                            {t("mentionLegale.copyrightText")}
                        </p>
                        <p>{t("mentionLegale.copyrightText2")}</p>
                    </>
                }
            />

            <TitleTextBloc
                className={styles.mentionsSection}
                title={t("mentionLegale.externalLinksTitle")}
                text={
                    <p>
                        {t("mentionLegale.externalLinksText")}
                    </p>
                }
            />
        </div>

    )
}

export default MentionLegale;