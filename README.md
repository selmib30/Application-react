# Hero Forge Front - Initialisation du projet

Frontend React (Vite) pour la gestion de personnages et de groupes.

## Prerequis

- Node.js 20+ (recommande)
- npm 10+ (fourni avec Node.js)
- Un backend accessible sur `http://127.0.0.1:8000/api/v1`

Verifier les versions :

```bash
node -v
npm -v
```

## Installation

Depuis la racine du projet :

```bash
npm install
```

## Lancement en local

```bash
npm run dev
```

Puis ouvrir l'URL affichee dans le terminal

## Configuration API

Le frontend utilise actuellement cette base URL :

http://127.0.0.1:8000/api/v1


Fichier concerne : `src/services/api.js`.

## Routes de l'application

- `/` : liste des personnages
- `/characters/:id` : detail d'un personnage
- `/parties` : liste des groupes
- `/parties/:id` : detail d'un groupe
