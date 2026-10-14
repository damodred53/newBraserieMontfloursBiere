# Matomo sur OVH mutualise

## Configuration de cette installation

- URL Matomo : `https://stats.brasserie-montflours.fr/`.
- Identifiant du site Bam confirme dans l'assistant Matomo : `1`.
- Dossier racine du sous-domaine attribue par OVH : `j8tiew4vuw`.
- Dossier du site public existant : `www`. Ne pas y envoyer les fichiers PHP Matomo.
- `.env.production.local` est configure sur cet ordinateur pour les prochains builds.
   Il est ignore par Git : sur un autre ordinateur ou en CI, fournir les memes
   variables de production. `.env.example` reste volontairement vide.

Le build local est prepare, mais cela ne publie pas automatiquement le site sur
OVH. La reception des vraies visites reste a confirmer apres deploiement.

## Etat de l'integration

Le projet suit les pages React Router avec le tracker JavaScript officiel Matomo.
Il ne telecharge pas ce tracker avant acceptation. Accepter et Refuser ont la meme
importance visuelle. Le bouton Confidentialite permet de modifier le choix.
Le choix est conserve dans localStorage pendant 180 jours. Si le stockage est
indisponible, il ne vaut que pour la page en cours.

Le suivi est desactive avec `npm run dev` et lorsque la configuration est vide ou
invalide. Seule une URL Matomo HTTPS et un identifiant de site numerique positif
activent le suivi dans le build de production. Aucun secret n'est necessaire cote
React. Les valeurs `VITE_*` sont publiques dans le JavaScript distribue.

Les cookies de mesure d'audience sont desactives, Do Not Track est respecte.
Lors d'un retrait, le tracker peut creer le cookie technique `mtm_consent_removed`
pour memoriser le refus ; ce n'est pas un cookie de mesure d'audience.
Seuls les chemins
des pages sont suivis, sans parametres ni fragments. Les titres sont derives du
chemin pour eviter d'envoyer du contenu personnel. Le referent est egalement
nettoye. Cela limite la mesure des campagnes UTM, qui n'est pas activee ici.
Il n'y a pas de suivi automatique des clics, formulaires ou enregistrements de sessions.

## 1. Preparer OVH (avec l'accord du client)

1. Sauvegarder les fichiers et la configuration du site existant.
2. Dans Bases de donnees, creer une base dediee SQL Perso 1000 MB / MySQL 8.4.
   Verifier le recapitulatif de l'offre avant validation ; ne commander aucun
   service supplementaire sans accord. Garder les identifiants dans un gestionnaire
   de mots de passe, pas dans Git, le frontend ou une conversation.
3. Dans Mes sites (anciennement Multisite), associer `stats.brasserie-montflours.fr`
   a son dossier distinct `j8tiew4vuw`. Ne pas changer le dossier du site existant.
4. Configurer les entrees DNS du sous-domaine suivant les valeurs de l'hebergement
   et activer son certificat SSL. Verifier que HTTPS fonctionne.

## 2. Installer le serveur Matomo

1. Telecharger la derniere version stable depuis https://matomo.org/download/.
   Ne pas utiliser une beta par defaut.
2. Extraire l'archive localement et envoyer le CONTENU du dossier `matomo` dans
   `j8tiew4vuw` par FTP/SFTP, selon les acces fournis par OVH.
   Ne pas creer un sous-dossier `matomo` et ne pas envoyer ces fichiers dans `www`.
3. Ouvrir `https://stats.brasserie-montflours.fr/` et suivre l'assistant.
4. Verifier tous les controles obligatoires : PHP, extensions PDO MySQL/mysqli,
   permissions de fichiers et connexion MySQL. Ne pas changer le PHP global a
   l'aveugle ; il peut etre utilise par d'autres applications du client.
5. Saisir dans cet assistant les parametres MySQL fournis par OVH. Le serveur SQL
   n'est pas forcement `localhost`. Creer un compte administrateur unique avec
   mot de passe fort ; activer l'authentification a deux facteurs si disponible.
6. Ajouter le site avec ses vraies URL publiques (avec/sans www si utilisees).
   Relever son identifiant de site dans Matomo. Ne pas supposer qu'il vaut 1.
7. Ne pas copier le script genere dans `index.html` : le projet le charge deja,
   et un second script pourrait contourner le consentement ou doubler les visites.

Reference des prerequis : https://matomo.org/docs/requirements/.
Les versions affichees par OVH sont prometteuses, mais seule l'installation et
son diagnostic confirmeront la compatibilite reelle de l'environnement.

## 3. Regler la confidentialite et la maintenance

Avant activation publique, dans l'administration Matomo :

- Anonymiser les adresses IP (au moins 2 octets IPv4, et protection IPv6 adaptee).
- Ne pas activer User ID, geolocalisation precise, profils enrichis, heatmaps,
  enregistrements de sessions, ni partage des donnees avec des tiers.
- Choisir et appliquer une retention des donnees brutes (par exemple 90 jours),
  puis fixer aussi celle des rapports agreges avec le client. Surveiller le quota 1 Go.
- Configurer l'archivage periodique si les taches planifiees OVH le permettent.
  Utiliser la procedure officielle et proteger tout token d'authentification.
  Ne pas desactiver l'archivage navigateur avant de verifier la tache planifiee.
- Prevoir les mises a jour Matomo, sauvegardes fichiers/base et tests de restauration.
- Faire valider l'information de confidentialite par le client : responsable du
  traitement, contact pour les droits, hebergement/destinataires, durees effectives,
  finalite, base legale du consentement et droit de reclamation a la CNIL.
  Le texte ajoute au site est un point de depart, pas une garantie de conformite.

## 4. Activer le suivi dans le site React

La configuration locale a deja ete creee. Pour la reproduire sur un autre poste,
copier `.env.example` vers `.env.production.local` et completer :

```dotenv
VITE_MATOMO_URL=https://stats.brasserie-montflours.fr/
VITE_MATOMO_SITE_ID=1
```

Ce fichier local est deja ignore par Git. Aucun mot de passe de base de donnees
ni token administrateur ne doit y figurer.

```powershell
npm run build
npm run preview -- --host 127.0.0.1
```

Verifier le build local, puis sauvegarder `www` et publier le contenu de `dist`
dans ce dossier du site React, sans supprimer sa configuration serveur existante
(notamment les regles de routage SPA) et sans toucher a `j8tiew4vuw`.
Ne pas transferer `.env.production.local` : les valeurs publiques sont deja dans
le JavaScript compile. Les variables sont integrees au build :
les modifier sur OVH apres compilation ne change pas les fichiers deja produits.
Si une politique CSP existe, autoriser l'origine Matomo dans script-src,
connect-src et img-src sans elargir ces directives inutilement.

## 5. Recette avant mise en ligne

1. Nouveau navigateur : aucune requete vers Matomo avant acceptation.
2. Refuser : naviguer entre pages ; aucune requete de mesure.
3. Confidentialite puis Accepter : le tracker se charge et la page courante apparait
   dans les visites en temps reel de Matomo.
4. Naviguer sans rechargement : une mesure par nouvelle page, y compris retour
   arriere ; pas de doublon. Aucun cookie `_pk_*` ne doit etre cree.
5. Retirer l'accord : les nouvelles pages ne sont plus mesurees. Recharger : le
   refus doit rester applique. Les anciennes statistiques ne sont pas effacees.
6. Verifier sur mobile que le bandeau et les choix restent accessibles.
7. Tester avec un bloqueur et avec Matomo indisponible : le site doit rester utilisable.

En developpement ou sans configuration, il est normal de ne voir aucun bandeau
Matomo et aucune visite dans le tableau de bord. Aucun historique anterieur a
l'installation ne peut etre reconstitue par ce suivi.

## Verification locale effectuee

`npm run test:matomo` execute cinq tests sans dependance supplementaire :
configuration, absence de suivi sans consentement, deduplication, retrait et
expiration/indisponibilite du stockage.

Le parcours navigateur a aussi ete teste avec le tracker officiel et une
destination fictive interceptee : aucune requete avant accord/apres refus,
deux navigations acceptees avec deux mesures, arret apres retrait et rechargement.
Le bandeau mobile a ete verifie a 390 x 844 pixels.

Ces controles ne valident pas le serveur OVH, la reception des statistiques dans
une vraie base, l'archivage ou la conformite juridique finale : ils restent a
verifier apres installation.