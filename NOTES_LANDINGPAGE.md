# Notes LandingPage

## Objectif

Faire en sorte que les boutons soient affichés par-dessus l'image et qu'en responsive, l'image et les boutons se déplacent ensemble.

## Problème identifié

- Les boutons et l'image n'avaient pas le meme conteneur de reference.
- Les boutons ne suivaient donc pas correctement le redimensionnement de l'image.
- La classe de base du bouton devait porter le positionnement absolu, sinon le placement restait incoherent.

## Changement de structure

- Creation d'un wrapper commun `landingPage__stage`.
- Ce wrapper devient le repere principal avec `position: relative`.
- L'image est placee dedans avec la classe `landingPage__image`.
- Les trois boutons sont aussi places dans ce meme wrapper.

## Changement de classes pour les boutons

- Classe commune: `landingPage__button`
- Variantes:
  - `landingPage__button--intro`
  - `landingPage__button--urgent`
  - `landingPage__button--details`

La classe commune applique:

- `position: absolute`
- `z-index: 10`
- `transform: translate(-50%, -50%)`

## Principe de positionnement

Les coordonnees `left` et `top` des boutons sont maintenant calculees par rapport au wrapper de l'image, et non par rapport a la fenetre.

Exemple de positions actuelles:

- intro: `left: 31%`, `top: 29%`
- urgent: `left: 31%`, `top: 49%`
- details: `left: 31%`, `top: 69%`

## Responsive

- Le wrapper `landingPage__stage` change de largeur selon la taille d'ecran.
- L'image prend `width: 100%` du wrapper.
- Les boutons restent au meme endroit visuellement sur l'image, car ils sont ancres dans le meme conteneur.
- La taille des boutons est aussi reduite sur mobile et tablette pour eviter qu'ils debordent.

## Fichiers concernes

- `src/Pages/LandingPage/LandingPage.tsx`
- `src/Pages/LandingPage/LandingPage.scss`

## Point d'ajustement possible

Si le rendu n'est pas exactement celui souhaite, il faut surtout ajuster les valeurs `left` et `top` des variantes de `landingPage__button` dans le fichier SCSS.