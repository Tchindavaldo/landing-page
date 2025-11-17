# 📦 JONGLEUR - Landing Page & Tracking System

> **Une plateforme complète de suivi de colis et de gestion logistique construite avec Angular 19 et Firebase**

---

## 📋 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Architecture du projet](#architecture-du-projet)
3. [Stack technologique](#stack-technologique)
4. [Installation et configuration](#installation-et-configuration)
5. [Structure des dossiers](#structure-des-dossiers)
6. [Fonctionnalités principales](#fonctionnalités-principales)
7. [Services et API](#services-et-api)
8. [Composants](#composants)
9. [Routes et navigation](#routes-et-navigation)
10. [Configuration Firebase](#configuration-firebase)
11. [Scripts disponibles](#scripts-disponibles)
12. [Développement](#développement)
13. [Tests](#tests)
14. [Déploiement](#déploiement)
15. [Dépannage](#dépannage)
16. [Contribution](#contribution)

---

## 🎯 Vue d'ensemble

**JONGLEUR** est une application web moderne dédiée à la **gestion et au suivi de colis postaux**. Elle offre une interface utilisateur intuitive pour :

- 📍 **Suivi en temps réel** des colis
- 📧 **Formulaires de contact** pour les demandes clients
- 📊 **Tableau de bord administrateur** pour la gestion des expéditions
- 🎨 **Interface responsive** compatible tous appareils
- 🔥 **Intégration Firebase** pour la gestion des données

L'application est construite sur **Angular 19** avec une architecture modulaire et scalable, utilisant **Firebase Firestore** comme base de données et **Firebase Authentication** pour la sécurité.

---

## 🏗️ Architecture du projet

### Principes architecturaux

L'application suit une architecture **modulaire et composant-driven** :

```
┌─────────────────────────────────────────┐
│         Application Angular 19          │
├─────────────────────────────────────────┤
│  Routes (app.routes.ts)                 │
│  ├─ / (Accueil)                         │
│  ├─ /contact (Formulaire contact)       │
│  ├─ /tracking (Suivi client)            │
│  └─ /tracking2 (Admin)                  │
├─────────────────────────────────────────┤
│  Services (Couche métier)               │
│  └─ FirestoreService (CRUD)             │
├─────────────────────────────────────────┤
│  Composants (Couche présentation)       │
│  ├─ Pages (pages/)                      │
│  └─ Composants réutilisables (components/)
├─────────────────────────────────────────┤
│  Firebase (Backend)                     │
│  ├─ Firestore (Base de données)         │
│  ├─ Authentication                      │
│  └─ Storage (Fichiers)                  │
└─────────────────────────────────────────┘
```

### Flux de données

```
Utilisateur
    ↓
Composant (UI)
    ↓
Service (FirestoreService)
    ↓
Firebase Firestore
    ↓
Observable (RxJS)
    ↓
Composant (Affichage)
```

---

## 🛠️ Stack technologique

### Frontend
- **Angular 19.1.0** - Framework principal
- **TypeScript 5.7.2** - Langage de programmation
- **RxJS 7.8.0** - Programmation réactive
- **Bootstrap 5.3.0** - Framework CSS
- **Slick Carousel** - Carrousel d'images
- **Swiper** - Slider responsive
- **Tiny Slider** - Composant slider
- **Font Awesome** - Icônes

### Backend & Services
- **Firebase Firestore** - Base de données NoSQL
- **Firebase Authentication** - Authentification
- **Firebase Storage** - Stockage de fichiers
- **Angular Fire 19.0.0** - Intégration Firebase

### Outils de développement
- **Angular CLI 19.1.4** - Outil CLI
- **Karma** - Test runner
- **Jasmine** - Framework de test
- **TypeScript Compiler** - Compilation TypeScript

### Environnement
- **Node.js** (version compatible avec Angular 19)
- **npm** - Gestionnaire de paquets

---

## 📦 Installation et configuration

### Prérequis

- **Node.js** (v18 ou supérieur)
- **npm** (v9 ou supérieur)
- **Angular CLI** (v19.1.4)
- Un compte **Firebase** actif

### Étapes d'installation

#### 1. Cloner le projet

```bash
git clone https://github.com/valdoblair/landing-page.git
cd landing-page
```

#### 2. Installer les dépendances

```bash
npm install
```

#### 3. Configurer Firebase

**Option A : Configuration existante (déjà faite)**

Le projet contient déjà une configuration Firebase dans `src/app/app.config.ts` :

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyBG1FpxychUdgE75Z59Qm6FkO0vjCAuCZM",
  authDomain: "learnings-6f4ce.firebaseapp.com",
  databaseURL: "https://learnings-6f4ce-default-rtdb.firebaseio.com",
  projectId: "learnings-6f4ce",
  storageBucket: "learnings-6f4ce.appspot.com",
  messagingSenderId: "521332523789",
  appId: "1:521332523789:web:3876651ad24516057a2644"
};
```

**Option B : Utiliser votre propre Firebase**

1. Créer un projet sur [Firebase Console](https://console.firebase.google.com)
2. Copier votre configuration
3. Remplacer la configuration dans `src/app/app.config.ts`

#### 4. Démarrer le serveur de développement

```bash
npm start
```

L'application sera accessible à `http://localhost:4200/`

---

## 📁 Structure des dossiers

```
landing-page/
├── src/
│   ├── app/
│   │   ├── FRONTEND/                    # Couche présentation
│   │   │   ├── components/              # Composants réutilisables
│   │   │   │   ├── about/               # Section À propos
│   │   │   │   ├── collab/              # Section Collaborations
│   │   │   │   ├── header3/             # En-tête
│   │   │   │   ├── home/                # Section accueil
│   │   │   │   ├── nav-bar/             # Barre de navigation
│   │   │   │   ├── service/             # Section services
│   │   │   │   ├── solution/            # Section solutions
│   │   │   │   ├── stat/                # Statistiques
│   │   │   │   ├── stat-next-component/ # Statistiques avancées
│   │   │   │   └── tracking/            # Composant suivi
│   │   │   ├── pages/                   # Pages complètes
│   │   │   │   ├── contact/             # Page contact
│   │   │   │   ├── tracking/            # Page suivi client
│   │   │   │   └── tracking-admin/      # Page admin
│   │   │   └── front/                   # Composant principal
│   │   ├── services/                    # Services métier
│   │   │   └── firestore/
│   │   │       └── firestore.service.ts # Service Firestore
│   │   ├── requetes/                    # Requêtes API
│   │   ├── app.config.ts                # Configuration app
│   │   ├── app.routes.ts                # Routes
│   │   ├── app.component.ts             # Composant racine
│   │   └── app.component.html           # Template racine
│   ├── index.html                       # HTML principal
│   ├── main.ts                          # Point d'entrée
│   └── styles.css                       # Styles globaux
├── public/                              # Ressources statiques
│   └── data.json                        # Données statiques
├── angular.json                         # Configuration Angular
├── package.json                         # Dépendances npm
├── tsconfig.json                        # Configuration TypeScript
├── tsconfig.app.json                    # Config TS (app)
├── tsconfig.spec.json                   # Config TS (tests)
├── firebase.json                        # Configuration Firebase
├── .editorconfig                        # Configuration éditeur
├── .gitignore                           # Fichiers ignorés Git
└── README.md                            # Documentation originale
```

---

## ✨ Fonctionnalités principales

### 1. **Page d'accueil (Landing Page)**
- **Navigation responsive** avec menu mobile
- **Section héros** avec appel à l'action
- **Présentation des services** logistiques
- **Statistiques** d'activité
- **Témoignages clients**
- **Appels à l'action** stratégiques

### 2. **Suivi de colis (Tracking)**
- Recherche de colis par numéro de suivi
- Affichage du statut en temps réel
- Historique des étapes de livraison
- Informations détaillées du colis
- Interface utilisateur intuitive

### 3. **Formulaire de contact**
- Formulaire de contact complet
- Validation des données
- Envoi des messages via Firebase
- Confirmation de soumission
- Gestion des erreurs

### 4. **Tableau de bord administrateur**
- Gestion des colis
- Mise à jour des statuts
- Ajout/modification/suppression de colis
- Vue d'ensemble des expéditions
- Filtrage et recherche avancée

### 5. **Responsive Design**
- Adaptation à tous les appareils
- Mobile-first approach
- Breakpoints Bootstrap
- Images optimisées

---

## 🔧 Services et API

### FirestoreService

Service centralisé pour toutes les opérations Firestore.

**Localisation** : `src/app/services/firestore/firestore.service.ts`

#### Méthodes disponibles

```typescript
// Ajouter un document
addData(collectionName: string, data: any): Promise<DocumentReference>

// Lire les données
getData(collectionName: string): Observable<any[]>

// Mettre à jour un document
updateData(collectionName: string, docId: string, data: any): Promise<void>

// Supprimer un document
deleteData(collectionName: string, docId: string): Promise<void>
```

#### Exemple d'utilisation

```typescript
import { FirestoreService } from './services/firestore/firestore.service';

export class MonComposant {
  constructor(private firestoreService: FirestoreService) {}

  // Ajouter un colis
  ajouterColis(colis: any) {
    this.firestoreService.addData('colis', colis).then(() => {
      console.log('Colis ajouté');
    });
  }

  // Récupérer les colis
  chargerColis() {
    this.firestoreService.getData('colis').subscribe(colis => {
      console.log('Colis reçus:', colis);
    });
  }

  // Mettre à jour un colis
  mettreAJourColis(id: string, data: any) {
    this.firestoreService.updateData('colis', id, data);
  }

  // Supprimer un colis
  supprimerColis(id: string) {
    this.firestoreService.deleteData('colis', id);
  }
}
```

---

## 🎨 Composants

### Composants de la page d'accueil

#### **NavBarComponent**
- Navigation principale
- Menu responsive
- Liens vers les pages
- Logo de l'application

#### **HomeComponent**
- Section héros
- Présentation principale
- Appel à l'action

#### **ServiceComponent**
- Présentation des services
- Cartes de services
- Icônes et descriptions

#### **AboutComponent**
- Informations sur l'entreprise
- Valeurs et mission
- Équipe

#### **StatComponent** & **StatNExtComponentComponent**
- Affichage des statistiques
- Chiffres clés
- Animations

#### **CollabComponent**
- Partenaires
- Logos des collaborateurs

#### **SolutionComponent**
- Solutions proposées
- Cas d'usage

### Pages complètes

#### **FrontComponent** (`src/app/FRONTEND/front/`)
Page d'accueil principale composée de tous les composants ci-dessus.

#### **ContactComponent** (`src/app/FRONTEND/pages/contact/`)
Page de formulaire de contact avec validation et envoi Firebase.

#### **TrackingComponent** (`src/app/FRONTEND/pages/tracking/`)
Page de suivi de colis pour les clients.

#### **TrackingAdminComponent** (`src/app/FRONTEND/pages/tracking-admin/`)
Tableau de bord administrateur pour gérer les colis.

---

## 🛣️ Routes et navigation

### Routes configurées

```typescript
// src/app/app.routes.ts

export const routes: Routes = [
  { path: '', component: FrontComponent },           // Accueil
  { path: 'contact', component: ContactComponent },  // Contact
  { path: 'tracking', component: TrackingComponent }, // Suivi client
  { path: 'tracking2', component: TrackingAdminComponent } // Admin
];
```

### Navigation dans les templates

```html
<!-- Lien simple -->
<a routerLink="/">Accueil</a>
<a routerLink="/contact">Contact</a>
<a routerLink="/tracking">Suivi</a>
<a routerLink="/tracking2">Admin</a>

<!-- Avec classe active -->
<a routerLink="/" routerLinkActive="active">Accueil</a>

<!-- Programmativement -->
<button (click)="naviguer()">Aller au contact</button>
```

```typescript
// Dans le composant
import { Router } from '@angular/router';

export class MonComposant {
  constructor(private router: Router) {}

  naviguer() {
    this.router.navigate(['/contact']);
  }
}
```

---

## 🔐 Configuration Firebase

### Structure Firestore recommandée

```
Collections:
├── colis/
│   ├── {docId}
│   │   ├── numero_suivi: string
│   │   ├── statut: string (En attente, Expédié, Livré, etc.)
│   │   ├── origine: string
│   │   ├── destination: string
│   │   ├── date_envoi: timestamp
│   │   ├── date_livraison: timestamp
│   │   ├── poids: number
│   │   ├── prix: number
│   │   └── historique: array
│
├── contacts/
│   ├── {docId}
│   │   ├── nom: string
│   │   ├── email: string
│   │   ├── telephone: string
│   │   ├── message: string
│   │   ├── date_envoi: timestamp
│   │   └── statut: string (Nouveau, Traité, etc.)
│
└── utilisateurs/
    ├── {docId}
    │   ├── email: string
    │   ├── nom: string
    │   ├── role: string (admin, user)
    │   └── date_creation: timestamp
```

### Règles de sécurité Firestore

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Colis - lecture publique, écriture admin
    match /colis/{document=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }

    // Contacts - lecture admin, écriture publique
    match /contacts/{document=**} {
      allow read: if request.auth != null && request.auth.token.admin == true;
      allow create: if true;
    }

    // Utilisateurs - lecture/écriture propre utilisateur
    match /utilisateurs/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

---

## 📜 Scripts disponibles

### Développement

```bash
# Démarrer le serveur de développement
npm start
# ou
npm run ng serve

# Compiler en mode watch
npm run watch
```

### Production

```bash
# Build production
npm run build

# Build avec optimisations
ng build --configuration production
```

### Tests

```bash
# Exécuter les tests unitaires
npm test

# Exécuter les tests e2e
npm run ng e2e
```

### Autres

```bash
# Générer un nouveau composant
ng generate component nom-composant

# Générer un service
ng generate service nom-service

# Générer une directive
ng generate directive nom-directive

# Voir toutes les options
ng generate --help
```

---

## 💻 Développement

### Configuration de l'environnement

Le projet utilise une configuration centralisée dans `src/app/app.config.ts` :

```typescript
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

const firebaseConfig = {
  // Configuration Firebase
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    FirestoreService
  ]
};
```

### Créer un nouveau composant

```bash
ng generate component FRONTEND/components/mon-composant
```

Cela crée :
- `mon-composant.component.ts` - Logique
- `mon-composant.component.html` - Template
- `mon-composant.component.css` - Styles
- `mon-composant.component.spec.ts` - Tests

### Créer un nouveau service

```bash
ng generate service services/mon-service
```

### Styles globaux

Les styles globaux sont dans `src/styles.css`. Les styles spécifiques à chaque composant sont dans les fichiers `.css` correspondants.

### Imports de modules

Angular 19 utilise les imports standalone. Voici comment importer des modules :

```typescript
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mon-composant',
  imports: [CommonModule, FormsModule],
  templateUrl: './mon-composant.component.html',
  styleUrl: './mon-composant.component.css'
})
export class MonComposantComponent {}
```

---

## 🧪 Tests

### Tests unitaires

Les tests sont configurés avec **Karma** et **Jasmine**.

```bash
# Exécuter les tests
npm test

# Exécuter avec couverture
ng test --code-coverage
```

### Structure des tests

```typescript
// mon-composant.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonComposantComponent } from './mon-composant.component';

describe('MonComposantComponent', () => {
  let component: MonComposantComponent;
  let fixture: ComponentFixture<MonComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonComposantComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MonComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

---

## 🚀 Déploiement

### Déploiement sur Firebase Hosting

#### 1. Installer Firebase CLI

```bash
npm install -g firebase-tools
```

#### 2. Se connecter à Firebase

```bash
firebase login
```

#### 3. Initialiser Firebase

```bash
firebase init hosting
```

#### 4. Configurer le déploiement

Éditer `firebase.json` :

```json
{
  "hosting": {
    "public": "dist/code",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### 5. Build et déploiement

```bash
# Build production
npm run build

# Déployer
firebase deploy
```

### Déploiement sur Netlify

#### 1. Connecter le repository

```bash
npm run build
```

#### 2. Configurer `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist/code"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 3. Déployer

```bash
npm install -g netlify-cli
netlify deploy
```

### Déploiement sur Vercel

```bash
npm install -g vercel
vercel
```

---

## 🐛 Dépannage

### Problèmes courants

#### 1. **Erreur : "Cannot find module '@angular/fire'"**

```bash
npm install @angular/fire firebase
```

#### 2. **Erreur Firebase : "Missing or insufficient permissions"**

Vérifier les règles Firestore dans la console Firebase.

#### 3. **Port 4200 déjà utilisé**

```bash
ng serve --port 4300
```

#### 4. **Problèmes de CORS**

Configurer les domaines autorisés dans Firebase Console > Authentification > Domaines autorisés.

#### 5. **Styles CSS non appliqués**

- Vérifier que les fichiers CSS sont importés
- Vérifier la spécificité CSS
- Utiliser `!important` en dernier recours

#### 6. **Composants non affichés**

- Vérifier que le composant est importé dans le parent
- Vérifier le sélecteur du composant
- Vérifier la console pour les erreurs

### Logs et débogage

```typescript
// Activer les logs Angular
import { enableDebugTools } from '@angular/platform-browser';

enableDebugTools(componentRef);

// Logs personnalisés
console.log('Message:', variable);
console.error('Erreur:', error);
console.warn('Attention:', warning);
```

---

## 🤝 Contribution

### Workflow de contribution

1. **Fork** le projet
2. **Créer une branche** : `git checkout -b feature/ma-feature`
3. **Commit** les changements : `git commit -m 'Ajouter ma feature'`
4. **Push** : `git push origin feature/ma-feature`
5. **Pull Request** : Créer une PR vers `main`

### Standards de code

- Utiliser **TypeScript** strictement typé
- Respecter les conventions de nommage Angular
- Ajouter des commentaires pour le code complexe
- Écrire des tests pour les nouvelles fonctionnalités
- Respecter le style de code existant

### Commit messages

```
feat: Ajouter nouvelle fonctionnalité
fix: Corriger un bug
docs: Mettre à jour la documentation
style: Changements de style (formatage)
refactor: Refactoriser le code
test: Ajouter des tests
chore: Tâches de maintenance
```

---

## 📊 Statistiques du projet

- **Langage principal** : TypeScript
- **Framework** : Angular 19
- **Composants** : 10+
- **Services** : 1+ (extensible)
- **Pages** : 4
- **Dépendances** : 10+
- **Taille du bundle** : ~500kB (production)

---

## 📞 Support et contact

Pour toute question ou problème :

- 📧 Email : [contact@jongleur.com]
- 🐛 Issues : [GitHub Issues]
- 💬 Discussions : [GitHub Discussions]

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

## 🙏 Remerciements

- **Angular Team** pour le framework
- **Firebase** pour les services backend
- **Bootstrap** pour le framework CSS
- **Tous les contributeurs**

---

## 📝 Changelog

### Version 1.0.0 (2024)
- ✅ Landing page complète
- ✅ Système de suivi de colis
- ✅ Formulaire de contact
- ✅ Tableau de bord administrateur
- ✅ Intégration Firebase
- ✅ Design responsive

---

## 🔮 Roadmap future

- [ ] Authentification utilisateur avancée
- [ ] Notifications en temps réel
- [ ] API REST personnalisée
- [ ] Intégration SMS
- [ ] Paiement en ligne
- [ ] Application mobile (React Native)
- [ ] Multilangues (i18n)
- [ ] Mode sombre
- [ ] Analytics avancées
- [ ] Système de recommandations

---

**Dernière mise à jour** : Novembre 2024  
**Version** : 1.0.0  
**Auteur** : Valdoblair  
**Projet** : JONGLEUR Landing Page

---

*Pour toute mise à jour ou correction, n'hésitez pas à contribuer ! 🚀*
