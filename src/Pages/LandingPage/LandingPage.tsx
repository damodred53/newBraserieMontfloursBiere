import { useNavigate } from "react-router-dom";
import ButtonBrown from "../../Components/Buttons/ButtonsBrown/ButtonBrown";
import landingImage from "../../assets/images/POST_detoure.png";
import "./LandingPage.scss"
import TranslateButton from "../../Components/Buttons/TranslateButton/TranslateButton";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Modal, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type SiteLanguage = "fr" | "en" | "may";

const languageLabels: Record<SiteLanguage, string> = {
  fr: "Francais",
  en: "Anglais",
  may: "Mayennais",
};

const LandingPage = () => {

  const STORAGE_KEY = "bam-language";
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedLanguage, setSelectedLanguage] = useState<SiteLanguage>(localStorage.getItem(STORAGE_KEY) as SiteLanguage || "fr");

  const handleConfirm = (nextLanguage: SiteLanguage) => {
    setSelectedLanguage(nextLanguage);
    setOpen(false);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    i18n.changeLanguage(nextLanguage);
  };


  const navigate = useNavigate();

  return (
    <div className="landingPage">
      <div className="landingPage__stage">
        <img className="landingPage__image" src={landingImage} alt="Landing Page" />
        <ButtonBrown
          className="landingPage__button landingPage__button--intro"
          content={t('landing.button1')}
          size="medium"
          isAnimated={true}
          onClick={() => navigate("/presentation")}
        />
        <ButtonBrown
          className="landingPage__button landingPage__button--urgent"
          content={t('landing.button2')}
          size="medium"
          isAnimated={true}
          onClick={() => navigate("/urgence")}
        />
        <ButtonBrown
          className="landingPage__button landingPage__button--details"
          content={t('landing.button3')}
          size="medium"
          isAnimated={true}
          onClick={() => navigate("/details")}
        />

        <TranslateButton className="translate_button_landingpage" onClick={handleOpen} />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
              <DialogTitle>{t('languageModal.title')}</DialogTitle>
              <DialogContent>
                <Stack spacing={2} sx={{ pt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {t('languageModal.description')}
                  </Typography>

                  <RadioGroup
                    value={selectedLanguage}
                    onChange={(event) => setSelectedLanguage(event.target.value as SiteLanguage)}
                  >
                    <FormControlLabel value="fr" control={<Radio />} label={languageLabels.fr} />
                    <FormControlLabel value="en" control={<Radio />} label={languageLabels.en} />
                    <FormControlLabel value="may" control={<Radio />} label={languageLabels.may} />
                  </RadioGroup>
                </Stack>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="inherit">
                  {t('languageModal.cancel')}
                </Button>
                <Button variant="contained" onClick={() => handleConfirm(selectedLanguage)}>
                  {t('languageModal.confirm')}
                </Button>
              </DialogActions>
            </Dialog>
        </Box>
      </Modal>
    </div>
  );
}

export default LandingPage;