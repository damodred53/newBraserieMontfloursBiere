import { useTranslation } from "react-i18next";
import TitleTextBloc from "../../Components/CommonComponents/TitleTextBloc/TitleTextBloc";
import styles from "./MentionLegale.module.scss";
import { matomoEnabled } from "../../Services/matomo";

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
            {matomoEnabled && <TitleTextBloc
                className={styles.mentionsSection}
                title={t("analytics.privacyTitle", { defaultValue: "Mesure d'audience et confidentialit\u00e9" })}
                text={
                    <>
                        <p>{t("analytics.privacyText", { defaultValue: "Avec votre accord, la Brasserie Associative de Montflours utilise Matomo pour mesurer les visites, les pages consult\u00e9es, leur provenance et les caract\u00e9ristiques techniques des appareils. Ce suivi ne d\u00e9pose pas de cookies de mesure d'audience. Les param\u00e8tres et fragments des URL ne sont pas envoy\u00e9s par cette int\u00e9gration." })}</p>
                        <p>{t("analytics.choiceText", { defaultValue: "Votre choix est enregistr\u00e9 dans votre navigateur pendant 6 mois. Vous pouvez refuser ou retirer votre accord \u00e0 tout moment avec le bouton Confidentialit\u00e9, sans limiter l'acc\u00e8s au site. Le retrait arr\u00eate les nouvelles mesures mais n'efface pas automatiquement les donn\u00e9es d\u00e9j\u00e0 collect\u00e9es. Pour toute demande relative \u00e0 vos donn\u00e9es, contactez la brasserie aux coordonn\u00e9es indiqu\u00e9es sur ce site." })}</p>
                    </>
                }
            />}
        </div>

    )
}

export default MentionLegale;