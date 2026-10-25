# React + TypeScript + Vite

## Presentation mobile

Les ajustements graphiques mobiles sont limites a la media query
`(width < 500px)` dans les styles des composants. A partir de 500 px,
la presentation existante est conservee. Le mobile utilise un menu compact,
des cartes de bieres, un carrousel historique tactile et des coordonnees directement visibles.
Le carrousel mobile dispose de fleches, d'un compteur et d'une barre de progression ;
ses cartes partagent la hauteur du texte le plus long pour garder les commandes
fixes pendant la navigation, sans tronquer les textes. La banniere mobile reprend
le decor de feuilles de houblon de la version grand ecran, avec un leger debordement
des feuilles et du logo agrandi ; un espace reserve les separe du contenu.
Le decor couvre le haut de l'ecran dans une zone independante du menu ;
la navigation s'ouvre sous les feuilles, sans recouvrir le logo.
Les textes courts du carrousel sont centres et affiches en plus grand.
Les numeros du journal
sont disposes sur deux colonnes. Le fond illustre d'origine est conserve
avec un voile creme pour faciliter la lecture.
Pour comparer, lancer `npm run dev` et verifier notamment les largeurs
320, 390, 499, 500 et 501 px. L'accueil reste defilable sur les ecrans peu hauts.

## Matomo sur OVH

Le suivi Matomo des pages et le choix de consentement sont integres, mais restent
desactives sans configuration. L'installation serveur OVH, la configuration de
confidentialite et l'activation du build sont detaillees dans
[le guide Matomo OVH](docs/MATOMO_OVH.md).

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
