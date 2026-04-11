import type { ChangeEvent } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./ModalSelectLanguage.scss";

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

const ModalSelectLanguage = ({ open, handleClose, selectedLanguage, setSelectedLanguage, setOpen }: ModalSelectLanguageProps) => {
  const { t, i18n } = useTranslation();
  const STORAGE_KEY = "bam-language";

  const handleConfirm = (nextLanguage: string) => {
    setSelectedLanguage(nextLanguage);
    setOpen(false);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          className: "modal-select-language__paper",
        },
      }}
    >
      <DialogTitle className="modal-select-language__title">
        {t('languageModal.title') || "Choisir une langue"}
      </DialogTitle>

      <DialogContent className="modal-select-language__content">
        <Stack spacing={2}>
          <Typography variant="body1" className="modal-select-language__description">
            {t('languageModal.description') || "Sélectionnez votre langue préférée"}
          </Typography>

          <RadioGroup
            value={selectedLanguage}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSelectedLanguage(event.target.value)}
            className="modal-select-language__radio-group"
          >
            {Object.entries(languageLabels).map(([value, label]) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio className="modal-select-language__radio" />}
                label={label}
                className="modal-select-language__option"
              />
            ))}
          </RadioGroup>
        </Stack>
      </DialogContent>

      <DialogActions className="modal-select-language__actions">
        <Button className="modal-select-language__button modal-select-language__button--cancel" onClick={handleClose}>
          {t('languageModal.cancel') || "Annuler"}
        </Button>
        <Button className="modal-select-language__button modal-select-language__button--confirm" onClick={() => handleConfirm(selectedLanguage)}>
          {t('languageModal.confirm') || "Valider"}
        </Button>
      </DialogActions>

    </Dialog>
  );
};

export default ModalSelectLanguage;