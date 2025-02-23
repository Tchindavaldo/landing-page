
import { FormsModule } from '@angular/forms';  // Importer FormsModule
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header3Component } from "../../components/header3/header3.component";
import { DataComponent } from "../../components/tracking/data/data.component";

@Component( {
       selector: 'app-tracking',
       imports: [ Header3Component, DataComponent, CommonModule, FormsModule ],
       templateUrl: './tracking.component.html',
       styleUrl: './tracking.component.css'
} )
export class TrackingComponent
{
       trackingNumber: string = '';
       isLoading: boolean = false;  // État du loader
       showData: boolean = false;   // Affichage conditionnel du composant app-data

       // Méthode pour gérer la recherche
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
}
