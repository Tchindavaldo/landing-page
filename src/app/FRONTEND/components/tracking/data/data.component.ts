import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component( {
       selector: 'app-data',
       imports: [],
       templateUrl: './data.component.html',
       styleUrl: './data.component.css',
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ], // Ajoute cette ligne

} )
export class DataComponent
{

       imprimerFiche(): void
       {
              const printContent = document.getElementById( 'wpcargo-result-print' );
              if ( printContent )
              {
                     const originalContent = document.body.innerHTML;
                     document.body.innerHTML = printContent.innerHTML;
                     window.print();
                     document.body.innerHTML = originalContent;
                     window.location.reload(); // Recharge la page pour éviter tout bug d'affichage après impression
              } else
              {
                     console.error( "Element 'wpcargo-result-print' non trouvé." );
              }
       }
}
