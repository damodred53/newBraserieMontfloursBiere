import type { ChangeEvent } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./ModalSelectLanguage.module.scss";

const languageLabels = {
  fr: "Français",
  en: "Anglais",
  may: "Mayennais",
};

type ModalSelectLanguageProps = {
  open: boolean;
  handleClose: () => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  setOpen: (open: boolean) => void;
};

const ModalSelectLanguage = ({
  open,
  handleClose,
  selectedLanguage,
  setSelectedLanguage,
  setOpen,
}: ModalSelectLanguageProps) => {
  const { t, i18n } = useTranslation();
  const STORAGE_KEY = "bam-language";

  const handleConfirm = (nextLanguage: string) => {
    setSelectedLanguage(nextLanguage);
    setOpen(false);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            className: styles.paper,
          },
        }}
      >
        <DialogTitle className={styles.title}>
          {t("languageModal.title") || "Choisir une langue"}
        </DialogTitle>

        <DialogContent className={styles.content}>
          <Stack spacing={2}>
            <Typography variant="body1" className={styles.description}>
              {t("languageModal.description") || "Sélectionnez votre langue préférée"}
            </Typography>

            <RadioGroup
              value={selectedLanguage}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setSelectedLanguage(event.target.value)
              }
              className={styles.radioGroup}
            >
              {Object.entries(languageLabels).map(([value, label]) => (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={<Radio className={styles.radio} />}
                  label={label}
                  className={styles.option}
                />
              ))}
            </RadioGroup>
          </Stack>
        </DialogContent>

        <DialogActions className={styles.actions}>
          <Button
            className={[styles.button, styles.buttonCancel].join(" ")}
            onClick={handleClose}
          >
            {t("languageModal.cancel") || "Annuler"}
          </Button>
          <Button
            className={[styles.button, styles.buttonConfirm].join(" ")}
            onClick={() => handleConfirm(selectedLanguage)}
          >
            {t("languageModal.confirm") || "Valider"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalSelectLanguage;