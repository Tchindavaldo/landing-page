import { AfterViewInit, Component } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { tns } from 'tiny-slider';


@Component( {
       selector: 'app-requetes',
       imports: [],
       templateUrl: './requetes.component.html',
       styleUrl: './requetes.component.css'
} )
export class RequetesComponent    
{

              // constructor( private firestoreService: FirestoreService ) { }
 
      

        
}

//        getUsers()
//        {
//               this.firestoreService.getData( 'users' ).subscribe( users =>
//               {
//                      console.log( 'Users:', users );
//               } );
//        }









//        addUser()
//        {
//               this.firestoreService.addData( 'users', { name: 'John Doe', email: 'john@example.com' } )
//                      .then( () => console.log( 'User added!' ) )
//                      .catch( err => console.error( err ) );
//        }

 

// Tâches de Développement pour le Mountains Tech Hackathon

// 1. Développement du Module d’Inscriptions et Cotisations
// 	•	Création du formulaire d’inscription des membres.
// 	•	Enregistrement des membres dans la base de données.
// 	•	Gestion des cotisations avec suivi des paiements.
// 	•	Génération de reçus et tableau de bord administrateur.

// 2. Développement du Module de Fund Raising
// 	•	Interface pour la collecte de fonds.
// 	•	Intégration des paiements en ligne.
// 	•	Affichage en temps réel des contributions.
// 	•	Gestion des partenaires et sponsors.

// 3. Développement du Module de Financement des Projets
// 	•	Formulaire de soumission de projet.
// 	•	Mécanisme d’évaluation et d’approbation des financements.
// 	•	Suivi des remboursements avec échéancier.
// 	•	Notifications de rappel et tableau de bord financier.

// 4. Développement Général
// 	•	Conception et développement du frontend.
// 	•	Implémentation du backend et des bases de données.
// 	•	Sécurisation des transactions et des données.
// 	•	Tests et validation des fonctionnalités.