import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component( {
       selector: 'app-nav-bar',
       imports: [ CommonModule ],
       templateUrl: './nav-bar.component.html',
       styleUrl: './nav-bar.component.css'
} )
export class NavBarComponent
{

       menuState: 'closed' | 'open' | 'closing' = 'closed';

       constructor () { }



       // Ouvre le menu
       openMenu(): void
       {
              this.menuState = 'open';
       }

       // Ferme le menu et, après 0.3s (durée de l'animation), le retire
       closeMenu(): void
       {
              this.menuState = 'closing';
              setTimeout( () =>
              {
                     this.menuState = 'closed';
              }, 300 );
       }
}
