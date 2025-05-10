# Structure conseillée pour le projet

```bash
322-labo2/
├── frontend/ # Application Angular
│ ├── src/
│ │ ├── app/
│ │ │ ├── core/ # Services, guards, interceptors
│ │ │ ├── shared/ # Composants, pipes, directives réutilisables
│ │ │ ├── features/ # Modules fonctionnels
│ │ │ └── models/ # Interfaces et types
│ │ ├── assets/
│ │ └── environments/ # Configurations par environnement
│ ├── angular.json
│ ├── package.json
│ └── tsconfig.json
│
├── backend/ # API json-server
│ ├── src/
│ │ ├── data/ # Données JSON
│ │ │ └── db.json # Base de données JSON
│ │ └── routes/ # Routes personnalisées si nécessaire
│ ├── package.json
│ └── server.js # Configuration json-server
│
├── docker/ # Configuration Docker
│ ├── frontend/
│ │ └── Dockerfile
│ └── backend/
│ └── Dockerfile
│
├── docker-compose.yml # Orchestration des conteneurs
├── .gitignore
├── README.md
└── package.json # Scripts communs
```

## Les changements principaux et leurs justifications

### Frontend (Angular)

- Réorganisation des composants dans une structure plus modulaire :
  - core/ : Services globaux, authentification, etc.
  - shared/ : Composants réutilisables (comme votre card.component)
  - features/ : Modules fonctionnels (hikes, users, etc.)
  - models/ : Interfaces TypeScript

### Backend (json-server)

- Simplification de la structure :
  - data/ : Contient uniquement les fichiers JSON
  - routes/ : Pour les routes personnalisées si nécessaire
  - Suppression des dossiers inutiles (views/, public/)

### Docker

- Séparation des configurations Docker dans un dossier dédié
- Un docker-compose.yml à la racine pour orchestrer les deux services

### Racine du projet

- Un package.json commun pour les scripts de développement
- Un README.md unifié
- Configuration Git commune

Cette structure offre plusieurs avantages :
Meilleure séparation des responsabilités
Plus facile à maintenir et à faire évoluer
Meilleure organisation du code
Plus adaptée à un développement en équipe
Plus facile à déployer
