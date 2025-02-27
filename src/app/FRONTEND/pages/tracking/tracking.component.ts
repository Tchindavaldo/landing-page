
import { FormsModule } from '@angular/forms';  // Importer FormsModule
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Header3Component } from "../../components/header3/header3.component";
import { DataComponent } from "../../components/tracking/data/data.component";
import { DataService } from '../../components/service/data/data.service';
import { FirestoreService } from '../../../services/firestore/firestore.service';

@Component( {
       selector: 'app-tracking',
       imports: [ Header3Component, DataComponent, CommonModule, FormsModule ],
       templateUrl: './tracking.component.html',
       styleUrl: './tracking.component.css'
} )
export class TrackingComponent implements OnInit
{

       @Input() isAdmin = false
       constructor ( private firestoreService: FirestoreService, private data: DataService ) { }
       trackingNumber: string = '';
       isLoading: boolean = false;  // État du loader
       showData: boolean = false;   // Affichage conditionnel du composant app-data

       // Méthode pour gérer la recherche

       ngOnInit(): void
       {
              this.getData();
       }

       onSearch()
       {
              if ( this.trackingNumber )
              {
                     this.isLoading = true;

                     // Simuler un délai de 1 seconde (par exemple, pour charger des données)
                     setTimeout( () =>
                     {
                            this.isLoading = false;   // Cacher le loader
                            this.showData = true;     // Afficher le composant app-data
                     }, 1000 );
              }
       }



       getData()
       {
              // Récupérer les données depuis Firestore
              this.firestoreService.getData( 'data' ).subscribe( ( data ) =>
              {
                     this.data.existingData = data;
                     console.log( 'Données récupérées :', this.data.existingData );
              } );
       }

}
