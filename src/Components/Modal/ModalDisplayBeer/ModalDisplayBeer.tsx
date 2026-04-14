import { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { Beer, BeerDetail } from "../../../Models/Beers";
import styles from "./ModalDisplayBeer.module.scss";

type ModalDisplayBeerProps = {
    open: boolean;
    onClose: () => void;
    beer?: Beer | null;
}

const ModalDisplayBeer = ({open, onClose, beer}: ModalDisplayBeerProps) => {
    const [beerDetails, setBeerDetails] = useState<BeerDetail[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const { t } = useTranslation();

    useEffect(() => {
        const fetchBeerDetails = async () => {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}detailBeer.json`);
                const data = await response.json() as BeerDetail[];
                setBeerDetails(data);
            } catch (error) {
                console.error("Erreur lors du chargement des détails des bières", error);
            } finally {
                setIsLoading(false);
            }
        };

        void fetchBeerDetails();
    }, []);

    if (!beer) return null;

    const selectedBeerDetail = beerDetails.find((detailBeer) => detailBeer.name === beer.name);
    const beerVisualPath = selectedBeerDetail?.imagePath ?? beer.imagePath;
    const beerDescription = selectedBeerDetail?.presentation ?? "Les détails de cette bière seront bientôt disponibles.";

    return (
        <>
            <Dialog
            open={open}
            onClose={onClose}
            slotProps={{
            paper: {
                className: styles.paper,
            },
            }}
            >
                <DialogTitle className={styles.title}>
                    <span className={styles.kicker}>Brasserie artisanale</span>
                    <span className={styles.heading}>{beer.name}</span>
                </DialogTitle>

                <DialogContent className={styles.content}>
                    <div className={styles.layout}>
                        <div className={styles.visualFrame}>
                            <img
                                className={styles.visual}
                                src={`${import.meta.env.BASE_URL}${beerVisualPath}`}
                                alt={beer.name}
                            />
                        </div>

                        <div className={styles.copy}>
                            <span className={styles.eyebrow}>Dégustation</span>
                            <Typography component="p" className={styles.description}>
                                {isLoading ? "Chargement des détails..." : beerDescription}
                            </Typography>
                        </div>
                    </div>
                </DialogContent>

                <DialogActions className={styles.actions}>
                    <Button className={styles.closeButton} onClick={onClose}>
                    {t('languageModal.cancel') || "Fermer"}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};


export default ModalDisplayBeer;