# Flightcalc

Boîte à outils de calculs pour pilote (réglée pour le B1900D), sous forme de web app
installable sur iPhone et utilisable hors ligne. Français / anglais, mode clair et sombre.

## Outils

| Groupe | Outils |
|---|---|
| Accès rapide | Carburant lb → kg → L (cases liées, densité réglable) |
| Descente & approche | Plan de descente · Profil d'approche (table distance/altitude, MDA) · Correction température froide (OACI PANS-OPS) |
| Altimétrie & météo | QNH ↔ QFE · Altitude pression & densité · Base des nuages |
| Navigation | Règle du 1/60 · Composantes de vent · Rayon de virage · Temps, distance, ETA |
| Carburant & performances | CAS → TAS / Mach · Contrôle avitaillement · Autonomie |
| Outils | Conversions d'unités |

Les valeurs saisies sont mémorisées sur l'appareil.

## Installer sur l'iPhone

1. Dans GitHub : **Settings → Pages → Source : Deploy from a branch**, choisir la branche et `/ (root)`.
2. Ouvrir l'adresse `https://<utilisateur>.github.io/Flightcalc/` dans Safari.
3. Partager → **Sur l'écran d'accueil**.

L'app fonctionne ensuite sans réseau.

## Structure

- `index.html` : toute l'app (HTML, CSS, JS sans dépendance)
- `sw.js` : cache hors ligne
- `manifest.webmanifest`, `icons/` : installation sur l'écran d'accueil

> Outil d'aide au calcul et à la vérification. Il ne remplace ni l'AFM, ni le manuel
> d'exploitation, ni les cartes et l'AIP.
