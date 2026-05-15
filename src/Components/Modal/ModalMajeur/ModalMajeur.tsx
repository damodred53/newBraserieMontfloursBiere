import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./ModalMajeur.module.scss";
import logo from "../../../assets/images/logo.png";

type ModalMajeurProps = {
    open: boolean;
    onYes: () => void;
    onNo: () => void;
}

const ModalMajeur = ({ open, onYes, onNo }: ModalMajeurProps) => {
    const { t } = useTranslation();

    return (
        <Dialog
            open={open}
            onClose={(_event, reason) => {
                if (reason === "backdropClick" || reason === "escapeKeyDown") return;
            }}
            slotProps={{
                paper: {
                    className: styles.paper,
                },
            }}
        >
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo BAM" className={styles.image} />
            </div>

            <DialogTitle className={styles.title}>
                {t('ageModal.title')}
            </DialogTitle>

            <DialogContent className={styles.content}>
                <Typography component="p" className={styles.description}>
                    {t('ageModal.description')}
                </Typography>
            </DialogContent>

            <DialogActions className={styles.actions}>
                <Button className={styles.buttonYes} onClick={onYes} fullWidth>
                    {t('ageModal.yes')}
                </Button>
                <Button className={styles.buttonNo} onClick={onNo} fullWidth variant="outlined">
                    {t('ageModal.no')}
                </Button>
            </DialogActions>

            <Typography component="p" className={styles.footer}>
                {t('ageModal.footer')}
            </Typography>
        </Dialog>
    );
};

export default ModalMajeur;
