# Flightcalc

Boîte à outils de calculs pour pilote, sous forme de web app
installable sur iPhone et utilisable hors ligne. Français / anglais, mode clair et sombre.

## Outils

| Groupe | Outils |
|---|---|
| Accès rapide | Carburant lb → kg → L (cases liées, densité réglable) · Commande carburant (litres par aile, règle × 0,32 et valeur exacte) |
| Descente & approche | Plan de descente · Profil d'approche (table distance/altitude, MDA) · Correction température froide (OACI PANS-OPS) |
| Altimétrie & météo | QNH ↔ QFE · Altitude pression & densité · Base des nuages |
| Navigation | Règle du 1/60 · Composantes de vent · Rayon de virage · Temps, distance, ETA |
| Carburant & performances | CAS → TAS / Mach · Contrôle avitaillement · Autonomie |
| Outils | Conversions d'unités |

Les valeurs saisies sont mémorisées sur l'appareil. L'unité de masse carburant (lb ou kg) se choisit dans les réglages, en bas de l'accueil.

## Installer sur l'iPhone

1. Une seule fois, sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch**,
   choisir la branche `claude/ecstatic-noether-ibbr06` (ou `main` une fois fusionnée) et le dossier `/ (root)`, puis **Save**.
2. Après une à deux minutes, ouvrir **https://lbl69.github.io/Flightcalc/** dans **Safari**.
3. Toucher **Partager → Sur l'écran d'accueil**.

L'app s'ouvre ensuite en plein écran et fonctionne sans réseau. Les mises à jour arrivent
automatiquement à la prochaine ouverture avec du réseau.

## Structure

- `index.html` : toute l'app (HTML, CSS, JS sans dépendance)
- `sw.js` : cache hors ligne
- `manifest.webmanifest`, `icons/` : installation sur l'écran d'accueil

> Outil d'aide au calcul et à la vérification. Il ne remplace ni l'AFM, ni le manuel
> d'exploitation, ni les cartes et l'AIP.
